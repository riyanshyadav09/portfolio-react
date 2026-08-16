import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Lightning.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1570e8a9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/acer swift lite/Desktop/Portfolio/portfolio/src/components/Lightning.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1570e8a9"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useRef = __vite__cjsImport3_react["useRef"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import "/src/components/Lightning.css";
const Lightning = ({ hue = 230, xOffset = 0, speed = 1, intensity = 1, size = 1 }) => {
  _s2();
  var _s = $RefreshSig$();
  const canvasRef = useRef(null);
  _s(useEffect(_s(() => {
    _s();
    const canvas = canvasRef.current;
    if (!canvas)
      return;
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const gl2 = canvas.getContext("webgl");
    if (!gl2) {
      console.error("WebGL not supported");
      return;
    }
    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;
          
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;
          
          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;
    const compileShader = (source, type) => {
      const shader = gl2.createShader(type);
      if (!shader)
        return null;
      gl2.shaderSource(shader, source);
      gl2.compileShader(shader);
      if (!gl2.getShaderParameter(shader, gl2.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl2.getShaderInfoLog(shader));
        gl2.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vertexShader = compileShader(vertexShaderSource, gl2.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl2.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader)
      return;
    const program = gl2.createProgram();
    if (!program)
      return;
    gl2.attachShader(program, vertexShader);
    gl2.attachShader(program, fragmentShader);
    gl2.linkProgram(program);
    if (!gl2.getProgramParameter(program, gl2.LINK_STATUS)) {
      console.error("Program linking error:", gl2.getProgramInfoLog(program));
      return;
    }
    gl2.useProgram(program);
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const vertexBuffer = gl2.createBuffer();
    gl2.bindBuffer(gl2.ARRAY_BUFFER, vertexBuffer);
    gl2.bufferData(gl2.ARRAY_BUFFER, vertices, gl2.STATIC_DRAW);
    const aPosition = gl2.getAttribLocation(program, "aPosition");
    gl2.enableVertexAttribArray(aPosition);
    gl2.vertexAttribPointer(aPosition, 2, gl2.FLOAT, false, 0, 0);
    const iResolutionLocation = gl2.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl2.getUniformLocation(program, "iTime");
    const uHueLocation = gl2.getUniformLocation(program, "uHue");
    const uXOffsetLocation = gl2.getUniformLocation(program, "uXOffset");
    const uSpeedLocation = gl2.getUniformLocation(program, "uSpeed");
    const uIntensityLocation = gl2.getUniformLocation(program, "uIntensity");
    const uSizeLocation = gl2.getUniformLocation(program, "uSize");
    const startTime = performance.now();
    const render = () => {
      resizeCanvas();
      gl2.viewport(0, 0, canvas.width, canvas.height);
      gl2.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      const currentTime = performance.now();
      gl2.uniform1f(iTimeLocation, (currentTime - startTime) / 1e3);
      gl2.uniform1f(uHueLocation, hue);
      gl2.uniform1f(uXOffsetLocation, xOffset);
      gl2.uniform1f(uSpeedLocation, speed);
      gl2.uniform1f(uIntensityLocation, intensity);
      gl2.uniform1f(uSizeLocation, size);
      gl2.drawArrays(gl2.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function() {
    return [gl.useProgram];
  }), [hue, xOffset, speed, intensity, size]), "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);
  return /* @__PURE__ */ jsxDEV("canvas", { ref: canvasRef, className: "lightning-container" }, void 0, false, {
    fileName: "C:/Users/acer swift lite/Desktop/Portfolio/portfolio/src/components/Lightning.jsx",
    lineNumber: 197,
    columnNumber: 10
  }, this);
};
_s2(Lightning, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Lightning;
export default Lightning;
var _c;
$RefreshReg$(_c, "Lightning");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/acer swift lite/Desktop/Portfolio/portfolio/src/components/Lightning.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/acer swift lite/Desktop/Portfolio/portfolio/src/components/Lightning.jsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUxTOzs7Ozs7Ozs7Ozs7Ozs7OztBQWpMVCxPQUFPQSxTQUFTQyxRQUFRQyxpQkFBaUI7QUFDekMsT0FBTztBQUVQLE1BQU1DLFlBQVlBLENBQUMsRUFBRUMsTUFBTSxLQUFLQyxVQUFVLEdBQUdDLFFBQVEsR0FBR0MsWUFBWSxHQUFHQyxPQUFPLEVBQUUsTUFBTTtBQUFBQyxNQUFBO0FBQUEsTUFBQUMsS0FBQUMsYUFBQTtBQUNwRixRQUFNQyxZQUFZWCxPQUFPLElBQUk7QUFFN0JTLEtBQUFSLFVBQVNRLEdBQUMsTUFBTTtBQUFBQSxPQUFBO0FBQ2QsVUFBTUcsU0FBU0QsVUFBVUU7QUFDekIsUUFBSSxDQUFDRDtBQUFRO0FBRWIsVUFBTUUsZUFBZUEsTUFBTTtBQUN6QkYsYUFBT0csUUFBUUgsT0FBT0k7QUFDdEJKLGFBQU9LLFNBQVNMLE9BQU9NO0FBQUFBLElBQ3pCO0FBQ0FKLGlCQUFhO0FBQ2JLLFdBQU9DLGlCQUFpQixVQUFVTixZQUFZO0FBRTlDLFVBQU1PLE1BQUtULE9BQU9VLFdBQVcsT0FBTztBQUNwQyxRQUFJLENBQUNELEtBQUk7QUFDUEUsY0FBUUMsTUFBTSxxQkFBcUI7QUFDbkM7QUFBQSxJQUNGO0FBRUEsVUFBTUMscUJBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU8zQixVQUFNQyx1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnRjdCLFVBQU1DLGdCQUFnQkEsQ0FBQ0MsUUFBUUMsU0FBUztBQUN0QyxZQUFNQyxTQUFTVCxJQUFHVSxhQUFhRixJQUFJO0FBQ25DLFVBQUksQ0FBQ0M7QUFBUSxlQUFPO0FBQ3BCVCxVQUFHVyxhQUFhRixRQUFRRixNQUFNO0FBQzlCUCxVQUFHTSxjQUFjRyxNQUFNO0FBQ3ZCLFVBQUksQ0FBQ1QsSUFBR1ksbUJBQW1CSCxRQUFRVCxJQUFHYSxjQUFjLEdBQUc7QUFDckRYLGdCQUFRQyxNQUFNLHlCQUF5QkgsSUFBR2MsaUJBQWlCTCxNQUFNLENBQUM7QUFDbEVULFlBQUdlLGFBQWFOLE1BQU07QUFDdEIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPQTtBQUFBQSxJQUNUO0FBRUEsVUFBTU8sZUFBZVYsY0FBY0Ysb0JBQW9CSixJQUFHaUIsYUFBYTtBQUN2RSxVQUFNQyxpQkFBaUJaLGNBQWNELHNCQUFzQkwsSUFBR21CLGVBQWU7QUFDN0UsUUFBSSxDQUFDSCxnQkFBZ0IsQ0FBQ0U7QUFBZ0I7QUFFdEMsVUFBTUUsVUFBVXBCLElBQUdxQixjQUFjO0FBQ2pDLFFBQUksQ0FBQ0Q7QUFBUztBQUNkcEIsUUFBR3NCLGFBQWFGLFNBQVNKLFlBQVk7QUFDckNoQixRQUFHc0IsYUFBYUYsU0FBU0YsY0FBYztBQUN2Q2xCLFFBQUd1QixZQUFZSCxPQUFPO0FBQ3RCLFFBQUksQ0FBQ3BCLElBQUd3QixvQkFBb0JKLFNBQVNwQixJQUFHeUIsV0FBVyxHQUFHO0FBQ3BEdkIsY0FBUUMsTUFBTSwwQkFBMEJILElBQUcwQixrQkFBa0JOLE9BQU8sQ0FBQztBQUNyRTtBQUFBLElBQ0Y7QUFDQXBCLFFBQUcyQixXQUFXUCxPQUFPO0FBRXJCLFVBQU1RLFdBQVcsSUFBSUMsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7QUFDNUUsVUFBTUMsZUFBZTlCLElBQUcrQixhQUFhO0FBQ3JDL0IsUUFBR2dDLFdBQVdoQyxJQUFHaUMsY0FBY0gsWUFBWTtBQUMzQzlCLFFBQUdrQyxXQUFXbEMsSUFBR2lDLGNBQWNMLFVBQVU1QixJQUFHbUMsV0FBVztBQUV2RCxVQUFNQyxZQUFZcEMsSUFBR3FDLGtCQUFrQmpCLFNBQVMsV0FBVztBQUMzRHBCLFFBQUdzQyx3QkFBd0JGLFNBQVM7QUFDcENwQyxRQUFHdUMsb0JBQW9CSCxXQUFXLEdBQUdwQyxJQUFHd0MsT0FBTyxPQUFPLEdBQUcsQ0FBQztBQUUxRCxVQUFNQyxzQkFBc0J6QyxJQUFHMEMsbUJBQW1CdEIsU0FBUyxhQUFhO0FBQ3hFLFVBQU11QixnQkFBZ0IzQyxJQUFHMEMsbUJBQW1CdEIsU0FBUyxPQUFPO0FBQzVELFVBQU13QixlQUFlNUMsSUFBRzBDLG1CQUFtQnRCLFNBQVMsTUFBTTtBQUMxRCxVQUFNeUIsbUJBQW1CN0MsSUFBRzBDLG1CQUFtQnRCLFNBQVMsVUFBVTtBQUNsRSxVQUFNMEIsaUJBQWlCOUMsSUFBRzBDLG1CQUFtQnRCLFNBQVMsUUFBUTtBQUM5RCxVQUFNMkIscUJBQXFCL0MsSUFBRzBDLG1CQUFtQnRCLFNBQVMsWUFBWTtBQUN0RSxVQUFNNEIsZ0JBQWdCaEQsSUFBRzBDLG1CQUFtQnRCLFNBQVMsT0FBTztBQUU1RCxVQUFNNkIsWUFBWUMsWUFBWUMsSUFBSTtBQUNsQyxVQUFNQyxTQUFTQSxNQUFNO0FBQ25CM0QsbUJBQWE7QUFDYk8sVUFBR3FELFNBQVMsR0FBRyxHQUFHOUQsT0FBT0csT0FBT0gsT0FBT0ssTUFBTTtBQUM3Q0ksVUFBR3NELFVBQVViLHFCQUFxQmxELE9BQU9HLE9BQU9ILE9BQU9LLE1BQU07QUFDN0QsWUFBTTJELGNBQWNMLFlBQVlDLElBQUk7QUFDcENuRCxVQUFHd0QsVUFBVWIsZ0JBQWdCWSxjQUFjTixhQUFhLEdBQU07QUFDOURqRCxVQUFHd0QsVUFBVVosY0FBYzlELEdBQUc7QUFDOUJrQixVQUFHd0QsVUFBVVgsa0JBQWtCOUQsT0FBTztBQUN0Q2lCLFVBQUd3RCxVQUFVVixnQkFBZ0I5RCxLQUFLO0FBQ2xDZ0IsVUFBR3dELFVBQVVULG9CQUFvQjlELFNBQVM7QUFDMUNlLFVBQUd3RCxVQUFVUixlQUFlOUQsSUFBSTtBQUNoQ2MsVUFBR3lELFdBQVd6RCxJQUFHMEQsV0FBVyxHQUFHLENBQUM7QUFDaENDLDRCQUFzQlAsTUFBTTtBQUFBLElBQzlCO0FBQ0FPLDBCQUFzQlAsTUFBTTtBQUU1QixXQUFPLE1BQU07QUFDWHRELGFBQU84RCxvQkFBb0IsVUFBVW5FLFlBQVk7QUFBQSxJQUNuRDtBQUFBLEVBQ0YsR0FBQztBQUFBLFlBdkNDTyxHQUFHMkIsVUFBVTtBQUFBLE1BdUNaLENBQUM3QyxLQUFLQyxTQUFTQyxPQUFPQyxXQUFXQyxJQUFJLENBQUMsR0FBQztBQUUxQyxTQUFPLHVCQUFDLFlBQU8sS0FBS0ksV0FBVyxXQUFVLHlCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVEO0FBQ2hFO0FBQUVILElBL0tJTixXQUFTO0FBQUFnRixLQUFUaEY7QUFpTE4sZUFBZUE7QUFBVSxJQUFBZ0Y7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTGlnaHRuaW5nIiwiaHVlIiwieE9mZnNldCIsInNwZWVkIiwiaW50ZW5zaXR5Iiwic2l6ZSIsIl9zMiIsIl9zIiwiJFJlZnJlc2hTaWckIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsInJlc2l6ZUNhbnZhcyIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2wiLCJnZXRDb250ZXh0IiwiY29uc29sZSIsImVycm9yIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwic291cmNlIiwidHlwZSIsInNoYWRlciIsImNyZWF0ZVNoYWRlciIsInNoYWRlclNvdXJjZSIsImdldFNoYWRlclBhcmFtZXRlciIsIkNPTVBJTEVfU1RBVFVTIiwiZ2V0U2hhZGVySW5mb0xvZyIsImRlbGV0ZVNoYWRlciIsInZlcnRleFNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsInByb2dyYW0iLCJjcmVhdGVQcm9ncmFtIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJnZXRQcm9ncmFtSW5mb0xvZyIsInVzZVByb2dyYW0iLCJ2ZXJ0aWNlcyIsIkZsb2F0MzJBcnJheSIsInZlcnRleEJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJidWZmZXJEYXRhIiwiU1RBVElDX0RSQVciLCJhUG9zaXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiaVJlc29sdXRpb25Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImlUaW1lTG9jYXRpb24iLCJ1SHVlTG9jYXRpb24iLCJ1WE9mZnNldExvY2F0aW9uIiwidVNwZWVkTG9jYXRpb24iLCJ1SW50ZW5zaXR5TG9jYXRpb24iLCJ1U2l6ZUxvY2F0aW9uIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZW5kZXIiLCJ2aWV3cG9ydCIsInVuaWZvcm0yZiIsImN1cnJlbnRUaW1lIiwidW5pZm9ybTFmIiwiZHJhd0FycmF5cyIsIlRSSUFOR0xFUyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIkxpZ2h0bmluZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0xpZ2h0bmluZy5jc3MnO1xuXG5jb25zdCBMaWdodG5pbmcgPSAoeyBodWUgPSAyMzAsIHhPZmZzZXQgPSAwLCBzcGVlZCA9IDEsIGludGVuc2l0eSA9IDEsIHNpemUgPSAxIH0pID0+IHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc2l6ZUNhbnZhcyA9ICgpID0+IHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIH07XG4gICAgcmVzaXplQ2FudmFzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG5cbiAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuICAgIGlmICghZ2wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYkdMIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgICBhdHRyaWJ1dGUgdmVjMiBhUG9zaXRpb247XG4gICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhUG9zaXRpb24sIDAuMCwgMS4wKTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiAgICAgIHVuaWZvcm0gdmVjMiBpUmVzb2x1dGlvbjtcbiAgICAgIHVuaWZvcm0gZmxvYXQgaVRpbWU7XG4gICAgICB1bmlmb3JtIGZsb2F0IHVIdWU7XG4gICAgICB1bmlmb3JtIGZsb2F0IHVYT2Zmc2V0O1xuICAgICAgdW5pZm9ybSBmbG9hdCB1U3BlZWQ7XG4gICAgICB1bmlmb3JtIGZsb2F0IHVJbnRlbnNpdHk7XG4gICAgICB1bmlmb3JtIGZsb2F0IHVTaXplO1xuICAgICAgXG4gICAgICAjZGVmaW5lIE9DVEFWRV9DT1VOVCAxMFxuXG4gICAgICB2ZWMzIGhzdjJyZ2IodmVjMyBjKSB7XG4gICAgICAgICAgdmVjMyByZ2IgPSBjbGFtcChhYnMobW9kKGMueCAqIDYuMCArIHZlYzMoMC4wLDQuMCwyLjApLCA2LjApIC0gMy4wKSAtIDEuMCwgMC4wLCAxLjApO1xuICAgICAgICAgIHJldHVybiBjLnogKiBtaXgodmVjMygxLjApLCByZ2IsIGMueSk7XG4gICAgICB9XG5cbiAgICAgIGZsb2F0IGhhc2gxMShmbG9hdCBwKSB7XG4gICAgICAgICAgcCA9IGZyYWN0KHAgKiAuMTAzMSk7XG4gICAgICAgICAgcCAqPSBwICsgMzMuMzM7XG4gICAgICAgICAgcCAqPSBwICsgcDtcbiAgICAgICAgICByZXR1cm4gZnJhY3QocCk7XG4gICAgICB9XG5cbiAgICAgIGZsb2F0IGhhc2gxMih2ZWMyIHApIHtcbiAgICAgICAgICB2ZWMzIHAzID0gZnJhY3QodmVjMyhwLnh5eCkgKiAuMTAzMSk7XG4gICAgICAgICAgcDMgKz0gZG90KHAzLCBwMy55enggKyAzMy4zMyk7XG4gICAgICAgICAgcmV0dXJuIGZyYWN0KChwMy54ICsgcDMueSkgKiBwMy56KTtcbiAgICAgIH1cblxuICAgICAgbWF0MiByb3RhdGUyZChmbG9hdCB0aGV0YSkge1xuICAgICAgICAgIGZsb2F0IGMgPSBjb3ModGhldGEpO1xuICAgICAgICAgIGZsb2F0IHMgPSBzaW4odGhldGEpO1xuICAgICAgICAgIHJldHVybiBtYXQyKGMsIC1zLCBzLCBjKTtcbiAgICAgIH1cblxuICAgICAgZmxvYXQgbm9pc2UodmVjMiBwKSB7XG4gICAgICAgICAgdmVjMiBpcCA9IGZsb29yKHApO1xuICAgICAgICAgIHZlYzIgZnAgPSBmcmFjdChwKTtcbiAgICAgICAgICBmbG9hdCBhID0gaGFzaDEyKGlwKTtcbiAgICAgICAgICBmbG9hdCBiID0gaGFzaDEyKGlwICsgdmVjMigxLjAsIDAuMCkpO1xuICAgICAgICAgIGZsb2F0IGMgPSBoYXNoMTIoaXAgKyB2ZWMyKDAuMCwgMS4wKSk7XG4gICAgICAgICAgZmxvYXQgZCA9IGhhc2gxMihpcCArIHZlYzIoMS4wLCAxLjApKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMyIHQgPSBzbW9vdGhzdGVwKDAuMCwgMS4wLCBmcCk7XG4gICAgICAgICAgcmV0dXJuIG1peChtaXgoYSwgYiwgdC54KSwgbWl4KGMsIGQsIHQueCksIHQueSk7XG4gICAgICB9XG5cbiAgICAgIGZsb2F0IGZibSh2ZWMyIHApIHtcbiAgICAgICAgICBmbG9hdCB2YWx1ZSA9IDAuMDtcbiAgICAgICAgICBmbG9hdCBhbXBsaXR1ZGUgPSAwLjU7XG4gICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBPQ1RBVkVfQ09VTlQ7ICsraSkge1xuICAgICAgICAgICAgICB2YWx1ZSArPSBhbXBsaXR1ZGUgKiBub2lzZShwKTtcbiAgICAgICAgICAgICAgcCAqPSByb3RhdGUyZCgwLjQ1KTtcbiAgICAgICAgICAgICAgcCAqPSAyLjA7XG4gICAgICAgICAgICAgIGFtcGxpdHVkZSAqPSAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdm9pZCBtYWluSW1hZ2UoIG91dCB2ZWM0IGZyYWdDb2xvciwgaW4gdmVjMiBmcmFnQ29vcmQgKSB7XG4gICAgICAgICAgdmVjMiB1diA9IGZyYWdDb29yZCAvIGlSZXNvbHV0aW9uLnh5O1xuICAgICAgICAgIHV2ID0gMi4wICogdXYgLSAxLjA7XG4gICAgICAgICAgdXYueCAqPSBpUmVzb2x1dGlvbi54IC8gaVJlc29sdXRpb24ueTtcbiAgICAgICAgICB1di54ICs9IHVYT2Zmc2V0O1xuICAgICAgICAgIFxuICAgICAgICAgIHV2ICs9IDIuMCAqIGZibSh1diAqIHVTaXplICsgMC44ICogaVRpbWUgKiB1U3BlZWQpIC0gMS4wO1xuICAgICAgICAgIFxuICAgICAgICAgIGZsb2F0IGRpc3QgPSBhYnModXYueCk7XG4gICAgICAgICAgdmVjMyBiYXNlQ29sb3IgPSBoc3YycmdiKHZlYzModUh1ZSAvIDM2MC4wLCAwLjcsIDAuOCkpO1xuICAgICAgICAgIHZlYzMgY29sID0gYmFzZUNvbG9yICogcG93KG1peCgwLjAsIDAuMDcsIGhhc2gxMShpVGltZSAqIHVTcGVlZCkpIC8gZGlzdCwgMS4wKSAqIHVJbnRlbnNpdHk7XG4gICAgICAgICAgY29sID0gcG93KGNvbCwgdmVjMygxLjApKTtcbiAgICAgICAgICBmcmFnQ29sb3IgPSB2ZWM0KGNvbCwgMS4wKTtcbiAgICAgIH1cblxuICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIG1haW5JbWFnZShnbF9GcmFnQ29sb3IsIGdsX0ZyYWdDb29yZC54eSk7XG4gICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IGNvbXBpbGVTaGFkZXIgPSAoc291cmNlLCB0eXBlKSA9PiB7XG4gICAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgICBpZiAoIXNoYWRlcikgcmV0dXJuIG51bGw7XG4gICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignU2hhZGVyIGNvbXBpbGUgZXJyb3I6JywgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoYWRlcjtcbiAgICB9O1xuXG4gICAgY29uc3QgdmVydGV4U2hhZGVyID0gY29tcGlsZVNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpO1xuICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICBpZiAoIXZlcnRleFNoYWRlciB8fCAhZnJhZ21lbnRTaGFkZXIpIHJldHVybjtcblxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgaWYgKCFwcm9ncmFtKSByZXR1cm47XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdQcm9ncmFtIGxpbmtpbmcgZXJyb3I6JywgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFstMSwgLTEsIDEsIC0xLCAtMSwgMSwgLTEsIDEsIDEsIC0xLCAxLCAxXSk7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHZlcnRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICBjb25zdCBhUG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVBvc2l0aW9uJyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYVBvc2l0aW9uKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFQb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIGNvbnN0IGlSZXNvbHV0aW9uTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ2lSZXNvbHV0aW9uJyk7XG4gICAgY29uc3QgaVRpbWVMb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnaVRpbWUnKTtcbiAgICBjb25zdCB1SHVlTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VIdWUnKTtcbiAgICBjb25zdCB1WE9mZnNldExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1WE9mZnNldCcpO1xuICAgIGNvbnN0IHVTcGVlZExvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1U3BlZWQnKTtcbiAgICBjb25zdCB1SW50ZW5zaXR5TG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VJbnRlbnNpdHknKTtcbiAgICBjb25zdCB1U2l6ZUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1U2l6ZScpO1xuXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgZ2wudW5pZm9ybTJmKGlSZXNvbHV0aW9uTG9jYXRpb24sIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgZ2wudW5pZm9ybTFmKGlUaW1lTG9jYXRpb24sIChjdXJyZW50VGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwLjApO1xuICAgICAgZ2wudW5pZm9ybTFmKHVIdWVMb2NhdGlvbiwgaHVlKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1WE9mZnNldExvY2F0aW9uLCB4T2Zmc2V0KTtcbiAgICAgIGdsLnVuaWZvcm0xZih1U3BlZWRMb2NhdGlvbiwgc3BlZWQpO1xuICAgICAgZ2wudW5pZm9ybTFmKHVJbnRlbnNpdHlMb2NhdGlvbiwgaW50ZW5zaXR5KTtcbiAgICAgIGdsLnVuaWZvcm0xZih1U2l6ZUxvY2F0aW9uLCBzaXplKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCA2KTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH07XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG4gICAgfTtcbiAgfSwgW2h1ZSwgeE9mZnNldCwgc3BlZWQsIGludGVuc2l0eSwgc2l6ZV0pO1xuXG4gIHJldHVybiA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBjbGFzc05hbWU9XCJsaWdodG5pbmctY29udGFpbmVyXCIgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWdodG5pbmc7Il0sImZpbGUiOiJDOi9Vc2Vycy9hY2VyIHN3aWZ0IGxpdGUvRGVza3RvcC9Qb3J0Zm9saW8vcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0xpZ2h0bmluZy5qc3gifQ==