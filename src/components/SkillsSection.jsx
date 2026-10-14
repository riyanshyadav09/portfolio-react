import React, { useState } from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: '⚡' },
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
      icon: '🛡️',
      color: '#ef4444',
      tools: ['Kali Linux', 'Burp Suite Pro', 'Nmap', 'Metasploit', 'Wireshark'],
      appliedIn: 'Network Sentinel & Security Audits'
    },
    {
      name: 'Web App Security & OWASP Top 10',
      category: 'cybersecurity',
      level: 88,
      tier: 'Advanced',
      icon: '🔒',
      color: '#f97316',
      tools: ['SQLi Prevention', 'XSS Sanitization', 'CSRF Tokens', 'JWT Auth'],
      appliedIn: 'MERN E-Commerce Backend Security'
    },
    {
      name: 'Email Protocol & Phishing Defense',
      category: 'cybersecurity',
      level: 91,
      tier: 'Expert',
      icon: '🎣',
      color: '#ec4899',
      tools: ['SPF Records', 'DKIM Keys', 'DMARC Rules', 'SMTP/TLS', 'MIME Headers'],
      appliedIn: 'Phishing Threat Awareness Suite'
    },
    {
      name: 'Network Reconnaissance & OSINT',
      category: 'cybersecurity',
      level: 94,
      tier: 'Master',
      icon: '🌐',
      color: '#3b82f6',
      tools: ['Nmap Scripting Engine', 'Shodan', 'Whois', 'DNS Enumeration'],
      appliedIn: 'Port Scanner & Sentinel Recon'
    },
    {
      name: 'React.js & Vite Ecosystem',
      category: 'fullstack',
      level: 95,
      tier: 'Master',
      icon: '⚛️',
      color: '#06b6d4',
      tools: ['React 18', 'Context API', 'React Router', 'Tailwind CSS', 'Framer Motion'],
      appliedIn: 'Forever Storefront & ReactBits Portfolio'
    },
    {
      name: 'Node.js & Express REST APIs',
      category: 'fullstack',
      level: 92,
      tier: 'Expert',
      icon: '🟢',
      color: '#22c55e',
      tools: ['MVC Architecture', 'JWT Tokens', 'Multer Uploads', 'Bcrypt Hashing'],
      appliedIn: 'E-Commerce Backend & Port Scanner APIs'
    },
    {
      name: 'Database Architecture & MongoDB',
      category: 'fullstack',
      level: 89,
      tier: 'Advanced',
      icon: '🍃',
      color: '#10b981',
      tools: ['MongoDB Atlas', 'Mongoose Schemas', 'Aggregation Pipelines', 'MySQL'],
      appliedIn: 'Cloud Data Clusters & ATM Simulator'
    },
    {
      name: 'Payment Gateways & Cloud Media',
      category: 'fullstack',
      level: 87,
      tier: 'Advanced',
      icon: '💳',
      color: '#8b5cf6',
      tools: ['Stripe Integration', 'Razorpay Webhooks', 'Cloudinary CDN'],
      appliedIn: 'Production E-Commerce Platform'
    },
    {
      name: 'Python Network Sockets & Automation',
      category: 'python',
      level: 94,
      tier: 'Master',
      icon: '🐍',
      color: '#eab308',
      tools: ['Raw Sockets', 'Multi-Threading', 'Requests', 'BeautifulSoup', 'Scapy'],
      appliedIn: 'Multi-threaded Port Scanner & Sockets'
    },
    {
      name: 'Flask Backend & Tool Frameworks',
      category: 'python',
      level: 90,
      tier: 'Expert',
      icon: '🧪',
      color: '#64748b',
      tools: ['Flask RESTful', 'Jinja2', 'CORS Policies', 'Daemon Background Workers'],
      appliedIn: 'Phishing Awareness Simulation Hub'
    },
    {
      name: 'Data Structures & Algorithms in Python',
      category: 'python',
      level: 86,
      tier: 'Advanced',
      icon: '📊',
      color: '#f59e0b',
      tools: ['Sorting & Searching', 'Trees & Graphs', 'Dynamic Programming', 'Complexity O(n)'],
      appliedIn: 'Algorithm Optimization & Core Engineering'
    },
    {
      name: 'Linux Administration (Ubuntu / Kali)',
      category: 'systems',
      level: 93,
      tier: 'Expert',
      icon: '🐧',
      color: '#e11d48',
      tools: ['Bash Scripting', 'SSH Key Auth', 'Systemd Services', 'IPTables', 'UFW'],
      appliedIn: 'Kali Virtual Labs & Production Server'
    },
    {
      name: 'Computer Networks (TCP/IP & OSI)',
      category: 'systems',
      level: 92,
      tier: 'Expert',
      icon: '📡',
      color: '#2563eb',
      tools: ['Subnetting', 'Routing Protocols', 'Packet Inspection', 'NAT & Firewalls'],
      appliedIn: 'RHCS Black Spot Telemetry & Nmap'
    },
    {
      name: 'IoT Mesh & Real-Time Telemetry',
      category: 'systems',
      level: 88,
      tier: 'Advanced',
      icon: '🛰️',
      color: '#14b8a6',
      tools: ['AngularJS', 'Chart.js', 'MQTT Handshake', 'Failover Routing'],
      appliedIn: 'RHCS Disaster Connectivity Console'
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="skills-matrix-wrapper">
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

      <div className="skills-cards-grid">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card-item"
            style={{ '--skill-color': skill.color }}
          >
            <div className="skill-card-top">
              <div className="skill-icon-box" style={{ background: `${skill.color}22`, color: skill.color }}>
                {skill.icon}
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
                  boxShadow: `0 0 12px ${skill.color}88`
                }}
              />
            </div>

            <div className="skill-tools-tags">
              {skill.tools.map((tool, i) => (
                <span key={i} className="skill-pill-tool">{tool}</span>
              ))}
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
