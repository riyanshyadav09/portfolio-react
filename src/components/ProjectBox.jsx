import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({ title, items, image, index }) => {
  const colors = [
    '#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#f97316',
    '#eab308', '#22c55e', '#14b8a6', '#06b6d4', '#6366f1', '#d946ef'
  ];

  const borderColor = colors[index % colors.length];

  return (
    <div className="project-box" style={{'--border-color': borderColor}}>
      <div className="project-box-inner">
        <div className="project-image-container">
          <img 
            src={image} 
            alt={title}
            className="project-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="project-icon" style={{background: `linear-gradient(135deg, ${borderColor}, ${borderColor}aa)`, display: 'none'}}>
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
          </div>
        </div>
        <div className="project-box-content">
          <h3 className="project-title">{title}</h3>
          <ul className="project-list">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="project-item">
                <span className="project-bullet" style={{background: borderColor}}></span>
                <span className="project-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;