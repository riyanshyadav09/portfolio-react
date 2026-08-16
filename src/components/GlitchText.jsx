import React from 'react';
import './GlitchText.css';

const GlitchText = ({ 
  children, 
  speed = 1, 
  enableShadows = true, 
  enableOnHover = true, 
  className = '' 
}) => {
  return (
    <div 
      className={`glitch ${enableOnHover ? 'enable-on-hover' : ''} ${className}`} 
      data-text={children}
    >
      {children}
    </div>
  );
};

export default GlitchText;