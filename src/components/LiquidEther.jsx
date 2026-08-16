import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

export default function LiquidEther({
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  className = '',
  style = {},
  mouseIntensity = 0.6,
} = {}) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const startRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2(-10, -10));

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.zIndex = '-1';
  // ensure the canvas doesn't block pointer events to UI elements
  renderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Geometry & material (full-screen quad)
    const plane = new THREE.PlaneBufferGeometry(2, 2);

    // Shader: a compact FBM-based moving noise with palette lookup
    const fragment = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform sampler2D u_palette;

      // 2D hash
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      // 2D noise
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        float a = hash(i + vec2(0.0,0.0));
        float b = hash(i + vec2(1.0,0.0));
        float c = hash(i + vec2(0.0,1.0));
        float d = hash(i + vec2(1.0,1.0));
        return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
      }

      // fbm
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv - 0.5;
        p.x *= u_resolution.x / u_resolution.y;

        // moving layers
        float t = u_time * 0.2;
        float q = fbm(p * 1.5 + t * 0.8);
        float r = fbm(p * 3.0 - t * 0.6 + q * 2.0);
        float m = fbm(p * 6.0 + r * 3.0 - t * 0.2);

        // combine
        float val = smoothstep(0.2, 0.8, r + 0.5 * m);

        // mouse ripple
        vec2 mp = (u_mouse.xy / u_resolution.xy) - vec2(0.5);
        mp.x *= u_resolution.x / u_resolution.y;
        float md = length(p - mp);
        float ripple = exp(-md * 6.0) * 0.5 * sin(10.0 * (md - u_time * 0.6));
        val += ripple * ${mouseIntensity.toFixed(3)};

        // palette lookup along a small gradient
        float idx = clamp(val, 0.0, 1.0);
        vec4 col = texture2D(u_palette, vec2(idx, 0.5));

        // final
        float alpha = smoothstep(0.02, 0.0, abs(val - 0.5));
        gl_FragColor = vec4(col.rgb * (0.6 + 0.8 * val), 0.6);
      }
    `;

    // build palette texture
    const paletteWidth = Math.max(2, colors.length);
    const data = new Uint8Array(paletteWidth * 4);
    for (let i = 0; i < paletteWidth; i++) {
      const c = new THREE.Color(colors[i % colors.length]);
      data[i * 4 + 0] = Math.round(c.r * 255);
      data[i * 4 + 1] = Math.round(c.g * 255);
      data[i * 4 + 2] = Math.round(c.b * 255);
      data[i * 4 + 3] = 255;
    }
    const paletteTex = new THREE.DataTexture(data, paletteWidth, 1, THREE.RGBAFormat);
    paletteTex.needsUpdate = true;
    paletteTex.minFilter = THREE.LinearFilter;
    paletteTex.magFilter = THREE.LinearFilter;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
        u_mouse: { value: new THREE.Vector2(-1000, -1000) },
        u_palette: { value: paletteTex },
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position,1.0); }`,
      fragmentShader: fragment,
      transparent: true,
    });

    const mesh = new THREE.Mesh(plane, material);
    scene.add(mesh);

    // handle resize
    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.u_resolution.value.set(w, h);
    }
    window.addEventListener('resize', onResize);

    // mouse
    function onMouseMove(e) {
      const rect = mount.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      material.uniforms.u_mouse.value.set(x, y);
    }
    function onTouch(e) {
      if (e.touches && e.touches.length > 0) {
        const rect = mount.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        material.uniforms.u_mouse.value.set(x, y);
      }
    }
    mount.addEventListener('mousemove', onMouseMove);
    mount.addEventListener('touchstart', onTouch);
    mount.addEventListener('touchmove', onTouch);

    // animation loop
    let start = performance.now();
    function animate(now) {
      const t = (now - start) / 1000;
      material.uniforms.u_time.value = t;
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    }
    frameRef.current = requestAnimationFrame(animate);

    // initial size
    onResize();

    // cleanup
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', onResize);
      mount.removeEventListener('mousemove', onMouseMove);
      mount.removeEventListener('touchstart', onTouch);
      mount.removeEventListener('touchmove', onTouch);
      material.dispose();
      plane.dispose();
      paletteTex.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [colors, mouseIntensity]);

  // container must accept pointer events so we can read mouse/touch positions,
  // but the canvas itself is pointer-events:none so it won't block clicks.
  return <div ref={mountRef} className={`liquid-ether-container ${className || ''}`} style={{ position: 'absolute', inset: 0, ...style }} />;
}
