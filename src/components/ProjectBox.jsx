import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({ project, onOpenGallery }) => {
  const {
    title,
    category,
    coverImage,
    description,
    tags = [],
    highlights = [],
    borderColor = '#3b82f6',
    liveUrl,
    githubUrl,
    gallery = []
  } = project;

  return (
    <div className="project-card-premium" style={{ '--card-border': borderColor }}>
      <div className="project-card-header-img" onClick={() => onOpenGallery(project)}>
        <img src={coverImage} alt={title} className="card-cover-image" />
        <div className="card-category-badge" style={{ backgroundColor: borderColor }}>
          {category}
        </div>
        <div className="card-hover-overlay">
          <div className="card-overlay-btn">
            🔍 View 5 HD Screens & Architecture
          </div>
        </div>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>

        <div className="project-card-highlights">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-pill">
              <span className="highlight-dot" style={{ backgroundColor: borderColor }}></span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="project-card-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <button 
            type="button" 
            className="btn-gallery-view" 
            onClick={() => onOpenGallery(project)}
            style={{ borderColor: borderColor, color: '#f8fafc' }}
          >
            📸 5 HD Screenshots
          </button>

          <div className="card-link-buttons">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-card-action btn-live" title="Open Live Web Application">
                Live App ↗
              </a>
            )}
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-card-action btn-github" title="View Source on GitHub">
                GitHub ↗
              </a>
            ) : (
              <span className="btn-card-action btn-private" title="Proprietary Project (Private Code)">
                🔒 Safe Code
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
