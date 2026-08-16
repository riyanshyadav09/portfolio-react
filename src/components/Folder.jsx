import React from 'react';
import './Folder.css';

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const folderStyle = {
    '--folder-color': color,
    transform: `scale(${size})`
  };

  return (
    <div className={`folder-container ${className}`} style={folderStyle}>
      <div className="folder">
        <div className="folder__back">
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;