import React, { useState, useEffect, useRef } from 'react';
import './TrueFocusText.css';

const TrueFocusText = ({ 
  sentence = "Mastering Cybersecurity & Full-Stack Engineering", 
  glowColor = "#3b82f6",
  animationDuration = 0.5,
  pauseBetweenWords = 1.2
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bracketRect, setBracketRect] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const wordRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenWords) * 1000);
    return () => clearInterval(interval);
  }, [words.length, animationDuration, pauseBetweenWords]);

  useEffect(() => {
    const activeWordEl = wordRefs.current[currentIndex];
    if (activeWordEl) {
      setBracketRect({
        top: activeWordEl.offsetTop,
        left: activeWordEl.offsetLeft,
        width: activeWordEl.offsetWidth,
        height: activeWordEl.offsetHeight
      });
    }
  }, [currentIndex]);

  return (
    <div className="true-focus-container">
      {words.map((word, idx) => (
        <span
          key={idx}
          ref={(el) => (wordRefs.current[idx] = el)}
          className={`focus-word ${currentIndex === idx ? 'active-focus' : 'blurred-focus'}`}
          style={{
            filter: currentIndex === idx ? 'blur(0px)' : 'blur(3.5px)',
            opacity: currentIndex === idx ? 1 : 0.4,
            transition: `all ${animationDuration}s cubic-bezier(0.2, 0.8, 0.2, 1)`
          }}
        >
          {word}
        </span>
      ))}

      {bracketRect.width > 0 && (
        <div
          className="focus-bracket"
          style={{
            top: bracketRect.top - 4,
            left: bracketRect.left - 6,
            width: bracketRect.width + 12,
            height: bracketRect.height + 8,
            borderColor: glowColor,
            boxShadow: `0 0 20px ${glowColor}66, inset 0 0 10px ${glowColor}33`,
            transition: `all ${animationDuration}s cubic-bezier(0.2, 0.8, 0.2, 1)`
          }}
        >
          <span className="bracket-corner top-left" style={{ borderColor: glowColor }}></span>
          <span className="bracket-corner top-right" style={{ borderColor: glowColor }}></span>
          <span className="bracket-corner bottom-left" style={{ borderColor: glowColor }}></span>
          <span className="bracket-corner bottom-right" style={{ borderColor: glowColor }}></span>
        </div>
      )}
    </div>
  );
};

export default TrueFocusText;
