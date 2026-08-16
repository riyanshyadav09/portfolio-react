import React, { useRef, useEffect, useState } from 'react';

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'ease-out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p'
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationComplete) {
          setIsVisible(true);
          animateText();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, animationComplete]);

  const animateText = () => {
    if (!ref.current || !text) return;

    const element = ref.current;
    const items = splitType === 'words' ? text.split(' ') : text.split('');
    
    element.innerHTML = items
      .map((item, index) => {
        const isWord = splitType === 'words';
        return `<span class="split-${splitType === 'words' ? 'word' : 'char'}" style="
          display: inline-block;
          opacity: 0;
          transform: translateY(${from.y || 40}px);
          transition: all ${duration}s ${ease};
          transition-delay: ${(index * delay) / 1000}s;
          ${isWord ? 'margin-right: 0.25em;' : ''}
        ">${item}${isWord && index < items.length - 1 ? '' : ''}</span>`;
      })
      .join(splitType === 'words' ? ' ' : '');

    // Trigger animation
    setTimeout(() => {
      const spans = element.querySelectorAll(`.split-${splitType === 'words' ? 'word' : 'char'}`);
      spans.forEach(span => {
        span.style.opacity = to.opacity || 1;
        span.style.transform = `translateY(${to.y || 0}px)`;
      });

      // Call completion callback after all animations
      setTimeout(() => {
        setAnimationComplete(true);
      }, (items.length * delay) + (duration * 1000));
    }, 50);
  };

  const style = {
    textAlign,
    overflow: 'hidden',
    display: 'block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    width: '100%'
  };

  const classes = `split-parent ${className}`;

  const renderTag = () => {
    switch (tag) {
      case 'h1':
        return <h1 ref={ref} style={style} className={classes}>{text}</h1>;
      case 'h2':
        return <h2 ref={ref} style={style} className={classes}>{text}</h2>;
      case 'h3':
        return <h3 ref={ref} style={style} className={classes}>{text}</h3>;
      case 'h4':
        return <h4 ref={ref} style={style} className={classes}>{text}</h4>;
      case 'h5':
        return <h5 ref={ref} style={style} className={classes}>{text}</h5>;
      case 'h6':
        return <h6 ref={ref} style={style} className={classes}>{text}</h6>;
      default:
        return <p ref={ref} style={style} className={classes}>{text}</p>;
    }
  };

  return renderTag();
};

export default SplitText;