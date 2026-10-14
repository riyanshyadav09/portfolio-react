import React from 'react';
import './CertificationsSection.css';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Infosys Maker Lab Cybersecurity Engineering',
      issuer: 'Infosys Maker Lab & CAS, AKTU Lucknow',
      type: 'Hands-on Offline Industry Residency',
      duration: '4-Week Offline Intensive',
      date: 'July 2026',
      badgeColor: '#0ea5e9',
      icon: '🏢',
      status: 'Verified & Completed',
      details: [
        'Advanced Network Penetration Testing & VAPT methodology',
        'OWASP Top 10 web vulnerabilities identification & remediation',
        'Offline lab hardware experiments at CAS AKTU campus',
        'Malware analysis heuristics and defensive countermeasures'
      ],
      skills: ['Network Security', 'VAPT', 'Wireshark', 'Burp Suite', 'CAS AKTU']
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google Career Certificates (Coursera)',
      type: 'Professional Specialization',
      duration: '8-Course Comprehensive Track',
      date: '2026 (In Progress / Specialized Modules Completed)',
      badgeColor: '#4285f4',
      icon: '🛡️',
      status: 'Active Learning Path',
      details: [
        'Foundations of Cybersecurity & Security Incident Response',
        'Connect & Protect: Networks, Routers & Network Security',
        'Tools of the Trade: Linux Command Line & SQL for Cyber Analysis',
        'Automate Cybersecurity Tasks with Python'
      ],
      skills: ['SIEM Tools', 'Python Automation', 'Network Defense', 'Incident Handling']
    },
    {
      title: 'TryHackMe Cyber Defense & Pre-Security',
      issuer: 'TryHackMe (Hands-On Labs)',
      type: 'Interactive Cyber Threat Labs',
      duration: '100+ Live Rooms Completed',
      date: '2025–2026',
      badgeColor: '#ef4444',
      icon: '🔴',
      status: 'Top Rank Achiever',
      details: [
        'Pre-Security Path: Network Fundamentals & Web Security Basics',
        'Complete Beginner Path: Linux Privilege Escalation & Shells',
        'Hands-on Capture The Flag (CTF) challenges solved',
        'Interactive Nmap scanning, Burp Suite intercepting, and Hydra brute force drills'
      ],
      skills: ['CTF Challenges', 'Linux PrivEsc', 'Web Exploitation', 'Hydra', 'Nmap']
    },
    {
      title: 'Hack The Box Academy Security Modules',
      issuer: 'Hack The Box (HTB)',
      type: 'Offensive Security Fundamentals',
      duration: 'Modular Hands-on Academy',
      date: '2026',
      badgeColor: '#10b981',
      icon: '🟩',
      status: 'Active Track',
      details: [
        'Linux Fundamentals & System Internals',
        'Web Requests, Headers & HTTP Response Analysis',
        'Active Reconnaissance & Port Scanning Techniques',
        'Targeted OSINT & Footprinting Standards'
      ],
      skills: ['Active Recon', 'HTTP Internals', 'Bug Bounty Recon', 'Bash']
    },
    {
      title: 'Bachelor of Technology in Information Technology',
      issuer: 'Accurate Institute (AIMT) / AKTU University',
      type: 'Undergraduate Engineering Degree',
      duration: '4-Year Professional Program (2023–2027)',
      date: 'CGPA: 7.6 / 10',
      badgeColor: '#f59e0b',
      icon: '🎓',
      status: 'Pursuing (Final Stages)',
      details: [
        'Core Data Structures & Algorithms in Python & Java',
        'Computer Networks (TCP/IP Architecture & Routing)',
        'Database Management Systems (MySQL Normalization & Transactions)',
        'Operating Systems (Process Scheduling, Concurrency & Memory)'
      ],
      skills: ['DSA', 'Computer Networks', 'Operating Systems', 'DBMS', 'MySQL']
    }
  ];

  return (
    <div className="certifications-wrapper">
      <div className="cert-cards-container">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="cert-card-item"
            style={{ '--cert-glow': cert.badgeColor }}
          >
            <div className="cert-card-header">
              <div className="cert-icon-container" style={{ borderColor: cert.badgeColor }}>
                <span className="cert-icon-glyph">{cert.icon}</span>
              </div>
              <div className="cert-header-meta">
                <div className="cert-status-pill" style={{ color: cert.badgeColor, borderColor: cert.badgeColor }}>
                  <span className="pill-dot" style={{ background: cert.badgeColor }}></span>
                  {cert.status}
                </div>
                <h3 className="cert-card-title">{cert.title}</h3>
                <span className="cert-issuer-name">{cert.issuer}</span>
              </div>
            </div>

            <div className="cert-date-banner">
              <span>📅 {cert.date}</span>
              <span>•</span>
              <span>{cert.type}</span>
            </div>

            <ul className="cert-details-list">
              {cert.details.map((item, i) => (
                <li key={i} className="cert-detail-point">
                  <span className="cert-bullet-check" style={{ color: cert.badgeColor }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="cert-skills-footer">
              {cert.skills.map((skill, i) => (
                <span key={i} className="cert-skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
