import React, { useState } from 'react';
import TrueFocusText from './TrueFocusText';
import './TeamSection.css';

const TEAM_MEMBERS = [
  {
    id: "rampravesh",
    name: "Ram Pravesh Yadav",
    role: "Lead Full Stack & Security Engineer",
    badge: "Architecture & VAPT",
    accentColor: "#3b82f6",
    image: "/Rampravesh.jpeg",
    description: "Overseeing end-to-end full-stack architecture, secure REST API development, multi-threaded raw socket reconnaissance engines, and high-availability MERN cloud deployments.",
    highlights: ["MERN Stack", "VAPT & OWASP Top 10", "Python Sockets", "Infosys Maker Lab CAS"]
  },
  {
    id: "tushar",
    name: "Tushar",
    role: "Frontend & UI/UX Specialist",
    badge: "UI/UX & Modern CSS",
    accentColor: "#8b5cf6",
    image: "/Tushar.jpeg",
    description: "Crafting modern, accessible, reactive user interfaces, glassmorphism design systems, dynamic transitions, and responsive micro-interactions.",
    highlights: ["React 18", "UI Design Systems", "Micro-Animations", "Tailwind & CSS"]
  },
  {
    id: "yash",
    name: "Yash Gupta",
    role: "Systems & Cloud Administrator",
    badge: "Cloud & DevSecOps",
    accentColor: "#06b6d4",
    image: "/yash gupta.jpeg",
    description: "Managing Linux server deployments, Nginx reverse proxy routing, containerized microservices, firewall topologies, and networking labs.",
    highlights: ["Linux Server", "Nginx Proxy", "Docker Containers", "Network Labs"]
  },
  {
    id: "pradeep",
    name: "Pradeep Yadav",
    role: "Database & Backend Engineer",
    badge: "Database Optimization",
    accentColor: "#10b981",
    image: "/Pradeep yadav.jpeg",
    description: "Designing normalized schemas, MongoDB Atlas cluster indexing, connection pooling, transaction safety, and high-concurrency REST controllers.",
    highlights: ["MongoDB Atlas", "MySQL Relational", "Node/Express", "Query Tuning"]
  },
  {
    id: "omjee",
    name: "Omjee Shukla",
    role: "Quality Assurance & QA Automation",
    badge: "QA & Reliability",
    accentColor: "#f59e0b",
    image: "/Omjee sukla.jpeg",
    description: "Executing automated test suites, concurrency stress benchmarks, API regression validation with Postman, and cross-browser reliability testing.",
    highlights: ["QA Automation", "Stress Testing", "Postman API", "Bug Remediation"]
  },
  {
    id: "divya",
    name: "Divya Prakash",
    role: "Research & Documentation Analyst",
    badge: "Compliance & Auditing",
    accentColor: "#ec4899",
    image: "/Divya prakash.jpeg",
    description: "Compiling system architecture debriefs, compliance audit frameworks, threat taxonomy catalogs, vulnerability scoring, and engineering user manuals.",
    highlights: ["Security Audits", "Compliance Docs", "Threat Modeling", "Technical Debriefs"]
  },
  {
    id: "abhishek",
    name: "Abhishek",
    role: "Security & Penetration Testing Intern",
    badge: "VAPT & Recon",
    accentColor: "#ef4444",
    image: "/Abhishek.jpeg",
    description: "Assisting in network reconnaissance, port scanning verification, service enumeration, CVE surface analysis, and defensive simulation verification.",
    highlights: ["Nmap Probing", "Kali Linux", "Wireshark", "Network Recon"]
  }
];

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState(TEAM_MEMBERS[0]);

  return (
    <section id="team" className="content-section team-section">
      <div className="container">
        {/* Section Headline */}
        <div className="section-head-center">
          <TrueFocusText 
            sentence="Leadership & Technical Collaborators"
            glowColor="#3b82f6"
          />
          <p className="section-subtitle-text">
            Specialized engineering team collaborating on secure full-stack software, automated penetration testing, cloud administration, and compliance audits.
          </p>
        </div>

        {/* ONE-LINE CIRCULAR ANIMATED AVATARS ROW */}
        <div className="team-one-line-container">
          <div className="team-one-line-track">
            {TEAM_MEMBERS.map((member, idx) => {
              const isActive = activeMember.id === member.id;
              return (
                <div
                  key={member.id}
                  className={`team-circle-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveMember(member)}
                  onMouseEnter={() => setActiveMember(member)}
                  style={{ '--accent': member.accentColor, '--delay': `${idx * 0.15}s` }}
                  title={`${member.name} - ${member.role}`}
                >
                  {/* Rotating Animated Glowing Ring */}
                  <div className="circle-avatar-wrapper">
                    <div className="circle-animated-glow-ring"></div>
                    <div className="circle-avatar-frame">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="circle-avatar-img"
                        loading="lazy" 
                      />
                    </div>
                    {/* Live Online Indicator Dot */}
                    <span className="circle-status-dot" title="Active Contributor"></span>
                  </div>

                  {/* Compact Name & Role under circle */}
                  <div className="circle-label-box">
                    <span className="circle-member-name">{member.name.split(' ')[0]}</span>
                    <span className="circle-member-badge">{member.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE SPOTLIGHT DETAILS CARD */}
        {activeMember && (
          <div 
            className="team-spotlight-card"
            style={{ '--card-accent': activeMember.accentColor }}
          >
            <div className="spotlight-header">
              <div className="spotlight-avatar-box">
                <img 
                  src={activeMember.image} 
                  alt={activeMember.name} 
                  className="spotlight-avatar-img" 
                />
                <span className="spotlight-status-glow"></span>
              </div>

              <div className="spotlight-info">
                <div className="spotlight-name-row">
                  <h3 className="spotlight-name">{activeMember.name}</h3>
                  <span className="spotlight-role-pill">{activeMember.role}</span>
                </div>
                <p className="spotlight-description">{activeMember.description}</p>
                
                {/* Tech & Specialization Badges */}
                <div className="spotlight-tags">
                  {activeMember.highlights.map((h, i) => (
                    <span key={i} className="spotlight-tag-item">
                      <span className="tag-spark">*</span> {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="spotlight-footer-hint">
              <span>Tip: Click or hover any teammate circle in the row above to view their technical focus</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
