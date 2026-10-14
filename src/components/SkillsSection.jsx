import React, { useState } from 'react';
import './SkillsSection.css';

const TOOL_ICONS = {
  'Kali Linux': '/icons/tech/kalilinux.svg',
  'Burp Suite Pro': '/icons/tech/burpsuite.svg',
  'Nmap': '/icons/tech/nmap.svg',
  'Metasploit': '/icons/tech/metasploit.svg',
  'Wireshark': '/icons/tech/wireshark.svg',
  'React 18': '/icons/tech/react.svg',
  'Node.js': '/icons/tech/nodejs.svg',
  'Express': '/icons/tech/express.svg',
  'MongoDB Atlas': '/icons/tech/mongodb.svg',
  'MySQL': '/icons/tech/mysql.svg',
  'Tailwind CSS': '/icons/tech/tailwindcss.svg',
  'Flask': '/icons/tech/flask.svg',
  'Flask RESTful': '/icons/tech/flask.svg',
  'Python': '/icons/tech/python.svg',
  'Docker': '/icons/tech/docker.svg',
  'Git': '/icons/tech/git.svg',
  'GitHub': '/icons/tech/github.svg',
  'JavaScript': '/icons/tech/javascript.svg',
  'HTML5': '/icons/tech/html5.svg',
  'CSS3': '/icons/tech/css3.svg',
  'Ubuntu': '/icons/tech/ubuntu.svg',
  'Linux': '/icons/tech/linux.svg',
  'Postman': '/icons/tech/postman.svg',
  'Java': '/icons/tech/java.svg',
  'C++': '/icons/tech/cplusplus.svg'
};

const TECH_CAROUSEL = [
  { name: 'Kali Linux', icon: '/icons/tech/kalilinux.svg', category: 'Security' },
  { name: 'Python', icon: '/icons/tech/python.svg', category: 'Language' },
  { name: 'React 18', icon: '/icons/tech/react.svg', category: 'Frontend' },
  { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend' },
  { name: 'MongoDB', icon: '/icons/tech/mongodb.svg', category: 'Database' },
  { name: 'Nmap', icon: '/icons/tech/nmap.svg', category: 'Recon' },
  { name: 'Wireshark', icon: '/icons/tech/wireshark.svg', category: 'Packet Analysis' },
  { name: 'Burp Suite', icon: '/icons/tech/burpsuite.svg', category: 'VAPT' },
  { name: 'Metasploit', icon: '/icons/tech/metasploit.svg', category: 'Exploitation' },
  { name: 'Docker', icon: '/icons/tech/docker.svg', category: 'DevOps' },
  { name: 'Tailwind CSS', icon: '/icons/tech/tailwindcss.svg', category: 'Styling' },
  { name: 'Express.js', icon: '/icons/tech/express.svg', category: 'API Framework' },
  { name: 'Flask', icon: '/icons/tech/flask.svg', category: 'Python Web' },
  { name: 'MySQL', icon: '/icons/tech/mysql.svg', category: 'Relational DB' },
  { name: 'Linux', icon: '/icons/tech/linux.svg', category: 'Operating System' },
  { name: 'Git', icon: '/icons/tech/git.svg', category: 'Version Control' }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: '⚡' },
    { id: 'cybersecurity', label: 'Cybersecurity & VAPT', icon: '🛡️' },
    { id: 'fullstack', label: 'Full-Stack MERN', icon: '💻' },
    { id: 'python', label: 'Python Automation', icon: '🐍' },
    { id: 'systems', label: 'Linux, Networks & IoT', icon: '🛰️' }
  ];

  const skillsData = [
    {
      name: 'VAPT & Penetration Testing',
      category: 'cybersecurity',
      level: 92,
      tier: 'Expert',
      iconUrl: '/icons/tech/kalilinux.svg',
      color: '#ef4444',
      tools: ['Kali Linux', 'Burp Suite Pro', 'Nmap', 'Metasploit', 'Wireshark'],
      appliedIn: 'Network Sentinel & Security Audits'
    },
    {
      name: 'Web App Security & OWASP Top 10',
      category: 'cybersecurity',
      level: 88,
      tier: 'Advanced',
      iconUrl: '/icons/tech/burpsuite.svg',
      color: '#f97316',
      tools: ['Burp Suite Pro', 'JavaScript', 'Node.js', 'Postman'],
      appliedIn: 'MERN E-Commerce Backend Security'
    },
    {
      name: 'Email Protocol & Phishing Defense',
      category: 'cybersecurity',
      level: 91,
      tier: 'Expert',
      iconUrl: '/icons/tech/flask.svg',
      color: '#ec4899',
      tools: ['Flask', 'Python', 'HTML5', 'Postman'],
      appliedIn: 'Phishing Threat Awareness Suite'
    },
    {
      name: 'Network Reconnaissance & OSINT',
      category: 'cybersecurity',
      level: 94,
      tier: 'Master',
      iconUrl: '/icons/tech/nmap.svg',
      color: '#3b82f6',
      tools: ['Nmap', 'Wireshark', 'Python', 'Linux'],
      appliedIn: 'Port Scanner & Sentinel Recon'
    },
    {
      name: 'React.js & Vite Ecosystem',
      category: 'fullstack',
      level: 95,
      tier: 'Master',
      iconUrl: '/icons/tech/react.svg',
      color: '#06b6d4',
      tools: ['React 18', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      appliedIn: 'Forever Storefront & ReactBits Portfolio'
    },
    {
      name: 'Node.js & Express REST APIs',
      category: 'fullstack',
      level: 92,
      tier: 'Expert',
      iconUrl: '/icons/tech/nodejs.svg',
      color: '#22c55e',
      tools: ['Node.js', 'Express', 'JavaScript', 'Postman'],
      appliedIn: 'E-Commerce Backend & Port Scanner APIs'
    },
    {
      name: 'Database Architecture & MongoDB',
      category: 'fullstack',
      level: 89,
      tier: 'Advanced',
      iconUrl: '/icons/tech/mongodb.svg',
      color: '#10b981',
      tools: ['MongoDB Atlas', 'MySQL', 'Node.js'],
      appliedIn: 'Cloud Data Clusters & ATM Simulator'
    },
    {
      name: 'Tailwind CSS & Modern UI Systems',
      category: 'fullstack',
      level: 94,
      tier: 'Master',
      iconUrl: '/icons/tech/tailwindcss.svg',
      color: '#38bdf8',
      tools: ['Tailwind CSS', 'CSS3', 'HTML5', 'React 18'],
      appliedIn: 'Production E-Commerce & Portfolio Designs'
    },
    {
      name: 'Python Network Sockets & Automation',
      category: 'python',
      level: 94,
      tier: 'Master',
      iconUrl: '/icons/tech/python.svg',
      color: '#eab308',
      tools: ['Python', 'Linux', 'Git', 'Nmap'],
      appliedIn: 'Multi-threaded Port Scanner & Sockets'
    },
    {
      name: 'Flask Backend & Tool Frameworks',
      category: 'python',
      level: 90,
      tier: 'Expert',
      iconUrl: '/icons/tech/flask.svg',
      color: '#64748b',
      tools: ['Flask', 'Python', 'HTML5', 'Postman'],
      appliedIn: 'Phishing Awareness Simulation Hub'
    },
    {
      name: 'Linux Administration (Ubuntu / Kali)',
      category: 'systems',
      level: 93,
      tier: 'Expert',
      iconUrl: '/icons/tech/linux.svg',
      color: '#e11d48',
      tools: ['Linux', 'Ubuntu', 'Kali Linux', 'Docker'],
      appliedIn: 'Kali Virtual Labs & Production Server'
    },
    {
      name: 'Computer Networks (TCP/IP & OSI)',
      category: 'systems',
      level: 92,
      tier: 'Expert',
      iconUrl: '/icons/tech/wireshark.svg',
      color: '#2563eb',
      tools: ['Wireshark', 'Nmap', 'Python', 'Linux'],
      appliedIn: 'RHCS Black Spot Telemetry & Nmap'
    },
    {
      name: 'Docker Containers & DevOps Tooling',
      category: 'systems',
      level: 88,
      tier: 'Advanced',
      iconUrl: '/icons/tech/docker.svg',
      color: '#0284c7',
      tools: ['Docker', 'Linux', 'Git', 'GitHub'],
      appliedIn: 'Microservices & Streamflix Containers'
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="skills-matrix-wrapper">
      {/* Interactive Transparent Brand Icon Strip */}
      <div className="tech-strip-container">
        <div className="tech-strip-header">
          <span className="strip-badge">TRANSPARENT VECTOR TECH STACK</span>
          <span className="strip-text">Official Brand Icons (High Definition & Clean Background)</span>
        </div>
        <div className="tech-icons-scroller">
          {TECH_CAROUSEL.map((t, i) => (
            <div key={i} className="tech-badge-card" title={`${t.name} • ${t.category}`}>
              <div className="tech-badge-icon-box">
                <img src={t.icon} alt={t.name} className="tech-svg-img" />
              </div>
              <span className="tech-badge-label">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="skills-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="tab-icon">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid with Transparent Icons */}
      <div className="skills-cards-grid">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card-item"
            style={{ '--skill-color': skill.color }}
          >
            <div className="skill-card-top">
              <div className="skill-icon-box" style={{ background: `${skill.color}18`, borderColor: `${skill.color}44` }}>
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name} 
                  className="skill-main-svg"
                />
              </div>
              <div className="skill-meta-head">
                <span className="skill-tier-badge" style={{ borderColor: skill.color, color: skill.color }}>
                  {skill.tier}
                </span>
                <span className="skill-percent-text">{skill.level}%</span>
              </div>
            </div>

            <h3 className="skill-card-name">{skill.name}</h3>

            <div className="skill-progress-bar-bg">
              <div 
                className="skill-progress-bar-fill" 
                style={{ 
                  width: `${skill.level}%`, 
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  boxShadow: `0 0 14px ${skill.color}99`
                }}
              />
            </div>

            <div className="skill-tools-tags">
              {skill.tools.map((tool, i) => {
                const iconPath = TOOL_ICONS[tool];
                return (
                  <span key={i} className="skill-pill-tool">
                    {iconPath && (
                      <img src={iconPath} alt={tool} className="tool-micro-icon" />
                    )}
                    <span>{tool}</span>
                  </span>
                );
              })}
            </div>

            <div className="skill-applied-badge">
              <span className="applied-dot" style={{ background: skill.color }}></span>
              <span><strong>Verified In:</strong> {skill.appliedIn}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
