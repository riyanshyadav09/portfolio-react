import React from 'react';
import './LearningPathSection.css';

const LearningPathSection = () => {
  const milestones = [
    {
      phase: 'PHASE 01',
      title: 'Foundations & Computer Science Core',
      period: '2023 – 2024',
      status: 'Completed',
      badgeColor: '#3b82f6',
      icon: '📚',
      headline: 'B.Tech IT Academic Excellence & Algorithmic Rigor',
      description: 'Mastered foundational computing principles at AIMT / AKTU. Solved core problems in Python Data Structures, Object-Oriented Programming, and database normalization with MySQL.',
      keyTakeaways: [
        'Data Structures & Algorithms in Python & Java',
        'Computer Networking Architecture (OSI Model, TCP/IP, DNS, ARP)',
        'Operating Systems fundamentals (Linux shell, process lifecycles)',
        'Relational Database Management Systems (MySQL normalization)'
      ]
    },
    {
      phase: 'PHASE 02',
      title: 'Full-Stack MERN Engineering & Cloud Platforms',
      period: '2024 – 2025',
      status: 'Completed',
      badgeColor: '#8b5cf6',
      icon: '⚛️',
      headline: 'Architecting Scalable Web Applications & REST Microservices',
      description: 'Progressed from basic scripts to production-ready enterprise applications. Built full-stack e-commerce platforms with React 18, Vite, Express REST APIs, MongoDB Atlas, and secure JWT authentication.',
      keyTakeaways: [
        'Single-Page Applications with React 18, Tailwind CSS, Context API',
        'Secure Node.js & Express REST Controllers with Bcrypt & JWT',
        'MongoDB Atlas cloud clustering, schemas & transactional pipelines',
        'Payment gateway integration (Stripe & Razorpay) and Cloudinary CDN'
      ]
    },
    {
      phase: 'PHASE 03',
      title: 'Cybersecurity Residency & Infosys Maker Lab',
      period: 'July 2026',
      status: 'Certified',
      badgeColor: '#0ea5e9',
      icon: '🏢',
      headline: 'Intensive Offline Training at CAS AKTU Lucknow',
      description: 'Selected for the prestigious 4-week offline cybersecurity training with Infosys Maker Lab at Centre for Advanced Studies (CAS), AKTU. Conducted hands-on vulnerability assessments and hardware security experiments.',
      keyTakeaways: [
        'Vulnerability Assessment & Penetration Testing (VAPT) workflows',
        'OWASP Top 10 web vulnerabilities identification and mitigations',
        'Live network traffic packet analysis with Wireshark & tcpdump',
        'Industrial security standards and defensive incident triage'
      ]
    },
    {
      phase: 'PHASE 04',
      title: 'Security Tooling, Threat Simulators & SOC Telemetry',
      period: 'Current Focus (2026)',
      status: 'Active Milestone',
      badgeColor: '#10b981',
      icon: '🛡️',
      headline: 'Developing Custom Offensive/Defensive Tooling & Freelance Practice',
      description: 'Engineering specialized cybersecurity tools: Python raw socket port scanners, Nmap wrappers, SMTP phishing simulation suites, and IoT telemetry monitoring consoles. Serving international clients on Upwork and Fiverr.',
      keyTakeaways: [
        'High-speed multi-threaded network reconnaissance tools (Python/Node)',
        'SMTP/TLS security auditing, SPF/DKIM verification & awareness labs',
        'Air-gapped mesh network operations and real-time Chart.js telemetry',
        'Verified Upwork ($20/hr) and Fiverr freelance client delivery'
      ]
    },
    {
      phase: 'PHASE 05',
      title: 'Industry Certifications & Advanced Offensive Security',
      period: '2026 – 2027 Roadmap',
      status: 'Target Horizon',
      badgeColor: '#f43f5e',
      icon: '🎯',
      headline: 'CEH Certification, Red Team Labs & Bug Bounty Hunting',
      description: 'Deepening advanced penetration testing methodologies, completing Google Cybersecurity Professional specialization, and preparing for the EC-Council Certified Ethical Hacker (CEH v12) examination.',
      keyTakeaways: [
        'Certified Ethical Hacker (CEH v12) credential completion',
        'Advanced TryHackMe & Hack The Box Academy privilege escalation',
        'Active participation in responsible vulnerability disclosure & bug bounties',
        'Enterprise SOC Level-1 / Junior Penetration Tester professional roles'
      ]
    }
  ];

  return (
    <div className="learning-path-wrapper">
      <div className="timeline-spine"></div>

      <div className="milestones-list">
        {milestones.map((m, index) => (
          <div key={index} className={`milestone-row ${index % 2 === 0 ? 'left-node' : 'right-node'}`}>
            <div className="milestone-marker" style={{ borderColor: m.badgeColor }}>
              <span className="marker-icon">{m.icon}</span>
            </div>

            <div className="milestone-card" style={{ '--node-color': m.badgeColor }}>
              <div className="milestone-top-meta">
                <span className="milestone-phase-tag" style={{ color: m.badgeColor, borderColor: m.badgeColor }}>
                  {m.phase}
                </span>
                <span className="milestone-period">{m.period}</span>
                <span className="milestone-status-badge" style={{ background: `${m.badgeColor}22`, color: m.badgeColor }}>
                  {m.status}
                </span>
              </div>

              <h3 className="milestone-card-title">{m.title}</h3>
              <h4 className="milestone-card-headline" style={{ color: m.badgeColor }}>{m.headline}</h4>
              <p className="milestone-card-desc">{m.description}</p>

              <div className="milestone-takeaways">
                <span className="takeaways-title">Key Competencies Mastered:</span>
                <ul className="takeaways-points">
                  {m.keyTakeaways.map((point, i) => (
                    <li key={i}>
                      <span className="point-bullet" style={{ background: m.badgeColor }}></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathSection;
