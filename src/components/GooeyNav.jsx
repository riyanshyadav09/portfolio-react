import React, { useState } from 'react';
import './GooeyNav.css';

const GooeyNav = ({ items, initialActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handleClick = (e, index) => {
    e.preventDefault();
    setActiveIndex(index);
    
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="gooey-nav-container">
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a href={item.href} onClick={e => handleClick(e, index)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;