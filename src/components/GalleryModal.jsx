import React, { useState, useEffect } from 'react';
import './GalleryModal.css';

const GalleryModal = ({ isOpen, onClose, project }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const currentItem = project.gallery[activeIndex] || project.gallery[0];

  return (
    <div className="gallery-backdrop" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-header">
          <div className="gallery-title-group">
            <span className="gallery-badge" style={{ borderColor: project.borderColor, color: project.borderColor }}>
              {project.category}
            </span>
            <h2 className="gallery-title">{project.title}</h2>
          </div>
          <button className="gallery-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="gallery-main-view">
          <div className="gallery-image-wrapper">
            <img 
              src={currentItem.src} 
              alt={currentItem.title} 
              className="gallery-active-image"
            />
          </div>

          <div className="gallery-info-bar">
            <div className="gallery-caption-meta">
              <div className="gallery-counter">Screenshot {activeIndex + 1} of {project.gallery.length}</div>
              <h4 className="gallery-image-title">{currentItem.title}</h4>
              <p className="gallery-image-desc">{currentItem.desc}</p>
            </div>
            
            <div className="gallery-action-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="modal-btn modal-btn-primary">
                  🚀 Launch Live App
                </a>
              )}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="modal-btn modal-btn-secondary">
                  💻 View Code on GitHub
                </a>
              ) : (
                <span className="modal-badge-secured">
                  🔒 Proprietary Client Code (Private & Safe)
                </span>
              )}
              <a href="https://www.linkedin.com/in/rampravesh-yadav-89a142331/" target="_blank" rel="noreferrer" className="modal-btn modal-btn-linkedin">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="gallery-thumbnails">
          {project.gallery.map((item, idx) => (
            <div 
              key={idx} 
              className={`gallery-thumb-item ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              style={{ borderColor: activeIndex === idx ? project.borderColor : 'transparent' }}
            >
              <img src={item.src} alt={item.title} className="gallery-thumb-img" />
              <div className="gallery-thumb-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
