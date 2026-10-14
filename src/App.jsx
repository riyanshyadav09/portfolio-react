import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import GlitchText from './components/GlitchText';
import TrueFocusText from './components/TrueFocusText';
import Lightning from './components/Lightning';
import SplitText from './components/SplitText';
import StarBorder from './components/StarBorder';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import LearningPathSection from './components/LearningPathSection';
import ProjectBox from './components/ProjectBox';
import GalleryModal from './components/GalleryModal';
import Folder from './components/Folder';
import GooeyNav from './components/GooeyNav';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const projectsData = [
    {
      id: "port_scanner",
      title: "Network Recon Sentinel & Port Recon Console",
      category: "CYBERSECURITY & NETWORK RECON",
      borderColor: "#3b82f6",
      coverImage: "/projects/port_scanner/05_fiverr_upwork_gig_cover.png",
      description: "High-speed multi-threaded port scanner and network reconnaissance engine with live Nmap integration, latency analysis, and interactive web telemetry console.",
      highlights: [
        "Multi-threaded TCP/UDP port probing (100+ ports/sec)",
        "Automated Nmap service detection & OS fingerprinting",
        "Dual Flask & Node.js interactive security consoles"
      ],
      tags: ["Python Sockets", "Multi-Threading", "Nmap Engine", "Node.js", "Express", "REST API"],
      liveUrl: "http://localhost:3000",
      githubUrl: "https://github.com/riyanshyadav09/networking-lab",
      gallery: [
        {
          src: "/projects/port_scanner/01_sentinel_console_home.png",
          label: "Dashboard",
          title: "Network Sentinel Command Console",
          desc: "Clean dark-mode reconnaissance UI with live target configuration and scan presets."
        },
        {
          src: "/projects/port_scanner/02_sentinel_console_scan_results.png",
          label: "Live Nmap Scan",
          title: "Live Nmap Scan & Service Fingerprinting",
          desc: "Real-time port inspection displaying open ports, service versions, and RPC endpoints."
        },
        {
          src: "/projects/port_scanner/03_flask_socket_scanner_results.png",
          label: "Raw Socket Engine",
          title: "Multi-Threaded Python Raw Socket Scanner",
          desc: "High-performance parallel socket engine with live ping and port status telemetry."
        },
        {
          src: "/projects/port_scanner/04_port_scanner_architecture.png",
          label: "Architecture",
          title: "5-Tier Production Network Recon Architecture",
          desc: "Complete architectural blueprint covering Client SPA, REST Gateway, Nmap Daemon, and Telemetry Engine."
        },
        {
          src: "/projects/port_scanner/05_fiverr_upwork_gig_cover.png",
          label: "Gig Showcase",
          title: "Fiverr & Upwork Freelance Delivery Asset",
          desc: "High-converting gig cover highlighting Python Network Recon and VAPT services."
        }
      ]
    },
    {
      id: "forever_ecommerce",
      title: "Forever Full-Stack MERN E-Commerce Store & Admin CMS",
      category: "FULL-STACK PRODUCTION WEB APP",
      borderColor: "#8b5cf6",
      coverImage: "/projects/forever_ecommerce/05_fiverr_upwork_gig_cover.png",
      description: "Modern, lightning-fast e-commerce storefront featuring dynamic multi-filtering, shopping cart drawers, Stripe & Razorpay payment gateways, and comprehensive Admin inventory CMS.",
      highlights: [
        "High-performance React 18 + Vite SPA with Tailwind CSS",
        "Role-based Admin CMS with real-time order lifecycle tracking",
        "Stripe, Razorpay & Cash-on-Delivery payment integrations"
      ],
      tags: ["React 18", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB Atlas", "Stripe", "Cloudinary"],
      liveUrl: "http://localhost:4173/",
      githubUrl: null, // Proprietary Code Secured & Private as requested
      gallery: [
        {
          src: "/projects/forever_ecommerce/01_ecommerce_storefront_home.png",
          label: "Storefront",
          title: "Responsive Modern Storefront Home",
          desc: "Hero banners, featured collections, latest arrivals, and best seller showcases."
        },
        {
          src: "/projects/forever_ecommerce/02_ecommerce_product_catalog.png",
          label: "Catalog & Filter",
          title: "Dynamic Product Catalog with Instant Search",
          desc: "Category, sub-category, price, and sorting multi-filters with instant client-side rendering."
        },
        {
          src: "/projects/forever_ecommerce/03_ecommerce_product_detail_cart.png",
          label: "Product & Cart",
          title: "Product Detail View & Interactive Cart Drawer",
          desc: "Multi-image gallery, size selector, instant cart drawer, and seamless checkout workflow."
        },
        {
          src: "/projects/forever_ecommerce/04_ecommerce_architecture.png",
          label: "Architecture",
          title: "Full MERN Production Cloud Architecture",
          desc: "4-tier architecture illustrating React SPA, Security/JWT Layer, REST Controllers, and MongoDB Atlas."
        },
        {
          src: "/projects/forever_ecommerce/05_fiverr_upwork_gig_cover.png",
          label: "Gig Showcase",
          title: "Upwork & Fiverr E-Commerce Gig Cover",
          desc: "Production-ready MERN e-commerce store gig cover tailored for fast international client delivery."
        }
      ]
    },
    {
      id: "phishing_threat_analyzer",
      title: "Enterprise Phishing Awareness & Security Auditing Suite",
      category: "RED TEAM & DEFENSIVE AUDITING",
      borderColor: "#f43f5e",
      coverImage: "/projects/phishing_threat_analyzer/05_fiverr_upwork_gig_cover.png",
      description: "Defensive email security auditing platform for simulating corporate phishing drills, testing mail headers, verifying SPF/DKIM/DMARC policies, and credential security awareness.",
      highlights: [
        "Interactive phishing simulation & campaign builder",
        "Verification of SPF records, DKIM signatures, and mail spoofing",
        "Webpage scraping & HTML cloned template simulation"
      ],
      tags: ["Python Flask", "SMTP Protocol", "SPF/DKIM/DMARC", "MIME Multi-Part", "Security Scoring"],
      liveUrl: "http://localhost:5050",
      githubUrl: "https://github.com/riyanshyadav09/riyanshyadav09",
      gallery: [
        {
          src: "/projects/phishing_threat_analyzer/01_phishing_simulator_dashboard.png",
          label: "Command Center",
          title: "Phishing Simulation Command Center",
          desc: "Clean tabbed interface supporting text, image, rich HTML, and website cloned payloads."
        },
        {
          src: "/projects/phishing_threat_analyzer/02_phishing_campaign_builder.png",
          label: "Campaign Builder",
          title: "Custom Security Awareness Campaign Builder",
          desc: "Configuring sender headers, recipient targets, and security awareness templates."
        },
        {
          src: "/projects/phishing_threat_analyzer/03_website_cloner_mode.png",
          label: "Cloner Mode",
          title: "Website Scraper & HTML Template Simulator",
          desc: "Simulating legitimate corporate login portals for employee defensive awareness training."
        },
        {
          src: "/projects/phishing_threat_analyzer/04_phishing_pipeline_architecture.png",
          label: "Architecture",
          title: "Security Auditing & SMTP Protocol Architecture",
          desc: "Defensive audit pipeline covering TLS sockets, MIME assemblers, SPF/DKIM verifiers, and telemetry."
        },
        {
          src: "/projects/phishing_threat_analyzer/05_fiverr_upwork_gig_cover.png",
          label: "Gig Showcase",
          title: "Cybersecurity Auditing Gig Cover",
          desc: "Professional freelance cover for email security, vulnerability auditing, and employee awareness."
        }
      ]
    },
    {
      id: "rhcs_dashboard",
      title: "Resilient Hybrid Network Telemetry & SOC Dashboard (RHCS)",
      category: "IOT MESH & MISSION-CRITICAL SOC",
      borderColor: "#10b981",
      coverImage: "/projects/rhcs_dashboard/05_fiverr_upwork_gig_cover.png",
      description: "Enterprise network operations and IoT telemetry console designed for black-spot mesh connectivity, real-time bandwidth graphing with Chart.js, and incident severity management.",
      highlights: [
        "Real-time network traffic & sensor telemetry with Chart.js",
        "P1–P4 severity threat & node failure alert matrix",
        "Mission-critical black-spot mesh connectivity failover tracking"
      ],
      tags: ["IoT Telemetry", "Mesh Network", "AngularJS", "Chart.js", "Air-Gapped SOC Shell"],
      liveUrl: "http://localhost:8085",
      githubUrl: null, // Proprietary Defense Research Code Secured
      gallery: [
        {
          src: "/projects/rhcs_dashboard/01_rhcs_operations_overview.png",
          label: "Operations Console",
          title: "Mission Command Center Overview",
          desc: "High-contrast dark-mode shell displaying live sensor health, node statuses, and activity timeline."
        },
        {
          src: "/projects/rhcs_dashboard/02_rhcs_network_telemetry.png",
          label: "Traffic Graph",
          title: "Real-Time Network Traffic & Sensor Telemetry",
          desc: "Interactive Chart.js visualizations tracking bandwidth usage, throughput, and packet transmission."
        },
        {
          src: "/projects/rhcs_dashboard/03_rhcs_threat_alerts.png",
          label: "Threat Alerts",
          title: "Threat & Incident Failure Alert Matrix",
          desc: "Tiered alert engine tracking high-priority network disconnects and packet drop anomalies."
        },
        {
          src: "/projects/rhcs_dashboard/04_rhcs_architecture_diagram.png",
          label: "Architecture",
          title: "Resilient Hybrid Communication Blueprint",
          desc: "Mission-critical blueprint covering Sensor Edge, Telemetry Gateways, Threat Alert Engine, and SOC Console."
        },
        {
          src: "/projects/rhcs_dashboard/05_fiverr_upwork_gig_cover.png",
          label: "Gig Showcase",
          title: "Network & SOC Telemetry Gig Cover",
          desc: "Verified freelance service cover for custom real-time dashboards and network monitoring."
        }
      ]
    }
  ];

  const handleOpenGallery = (project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  return (
    <div className="portfolio-container">
      {/* Sticky Top High-Conversion Social Bar */}
      <header className="top-conversion-bar">
        <div className="top-bar-inner">
          <div className="top-status-badge">
            <span className="live-pulse-dot"></span>
            <span className="top-status-text">AVAILABLE FOR HIRE & FREELANCE PROJECTS</span>
          </div>

          <div className="top-social-actions">
            <a 
              href="https://www.linkedin.com/in/rampravesh-yadav-89a142331/" 
              target="_blank" 
              rel="noreferrer" 
              className="top-social-btn top-btn-linkedin"
              title="Connect & Follow on LinkedIn"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              <span>Connect on LinkedIn</span>
            </a>

            <a 
              href="https://www.upwork.com/freelancers/~0134426549a0a03429" 
              target="_blank" 
              rel="noreferrer" 
              className="top-social-btn top-btn-upwork"
              title="Hire on Upwork"
            >
              <span className="dot-green"></span>
              <span>Hire on Upwork ($20/hr)</span>
            </a>

            <a 
              href="https://www.fiverr.com/riyansh_yadav" 
              target="_blank" 
              rel="noreferrer" 
              className="top-social-btn top-btn-fiverr"
              title="Order Gig on Fiverr"
            >
              <span>⚡ Fiverr Pro Gigs</span>
            </a>

            <a 
              href="https://github.com/riyanshyadav09" 
              target="_blank" 
              rel="noreferrer" 
              className="top-social-btn top-btn-github"
              title="GitHub Profile"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <Lightning />
      
      <nav className="main-navigation">
        <GooeyNav
          items={navItems}
          initialActiveIndex={0}
        />
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="profile-card-container">
            <ProfileCard
              name="Ram Pravesh Yadav"
              title="Cybersecurity Analyst & Full-Stack MERN Developer"
              handle="rampravesh"
              status="Available for Client Projects & Audits"
              contactText="Connect on LinkedIn"
              avatarUrl="/Rampravesh.jpeg"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open('https://www.linkedin.com/in/rampravesh-yadav-89a142331/', '_blank')}
            />
          </div>
          
          <div className="hero-text">
            <div className="verified-badge-row">
              <span className="verified-star">★</span>
              <span>100% VERIFIED FULL-STACK DEVELOPER & SECURITY RESEARCHER</span>
            </div>

            <GlitchText 
              className="glitch-title" 
              speed={0.8} 
              enableShadows={true} 
              enableOnHover={true}
            >
              Ram Pravesh Yadav
            </GlitchText>
            
            <SplitText
              text="Cybersecurity Analyst | Full-Stack MERN Developer | Infosys Maker Lab CAS Alumni"
              className="split-subtitle"
              tag="h2"
              textAlign="left"
            />

            <p className="hero-intro-text">
              Specialized in production-grade <strong>Full-Stack Web Applications (React/Node/MongoDB)</strong>, 
              <strong>Network Penetration Testing</strong>, <strong>Phishing Defensive Simulations</strong>, 
              and <strong>Real-Time Telemetry Dashboards</strong>. Dedicated to building secure, lightning-fast digital solutions.
            </p>
            
            <div className="hero-action-buttons">
              <StarBorder
                as="a"
                href="https://www.linkedin.com/in/rampravesh-yadav-89a142331/"
                target="_blank"
                rel="noreferrer"
                color="#38bdf8"
                trailColor="#0284c7"
                duration={3.5}
                direction="clockwise"
                stars={2}
                trailLength={0.35}
                thickness={1.5}
                radius={14}
                glow={0.8}
                hover="lap"
                sparkle={true}
                clickPulse
                theme="dark"
                className="star-cta-btn star-cta-linkedin"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                <span>Connect on LinkedIn</span>
              </StarBorder>

              <StarBorder
                as="a"
                href="https://www.upwork.com/freelancers/~0134426549a0a03429"
                target="_blank"
                rel="noreferrer"
                color="#22c55e"
                trailColor="#16a34a"
                duration={4}
                direction="clockwise"
                stars={1}
                trailLength={0.3}
                thickness={1.2}
                radius={14}
                glow={0.7}
                hover="lap"
                clickPulse
                theme="dark"
                className="star-cta-btn"
              >
                <span>💼 Hire on Upwork ($20/hr)</span>
              </StarBorder>

              <StarBorder
                as="a"
                href="https://www.fiverr.com/riyansh_yadav"
                target="_blank"
                rel="noreferrer"
                color="#10b981"
                trailColor="#059669"
                duration={4}
                direction="clockwise"
                stars={1}
                trailLength={0.3}
                thickness={1.2}
                radius={14}
                glow={0.7}
                hover="lap"
                clickPulse
                theme="dark"
                className="star-cta-btn"
              >
                <span>⚡ Order on Fiverr</span>
              </StarBorder>

              <StarBorder
                as="a"
                href="#projects"
                color="#a855f7"
                trailColor="#8b5cf6"
                duration={4.5}
                direction="clockwise"
                stars={1}
                trailLength={0.25}
                thickness={1.2}
                radius={14}
                glow={0.6}
                hover="lap"
                clickPulse
                theme="dark"
                className="star-cta-btn"
              >
                <span>Explore 4 Projects ↓</span>
              </StarBorder>
            </div>

            <div className="os-badges">
              <StarBorder
                as="div"
                color="#3b82f6"
                trailColor="#60a5fa"
                duration={4}
                direction="clockwise"
                stars={1}
                trailLength={0.3}
                thickness={1}
                radius={12}
                glow={0.6}
                hover="lap"
                clickPulse
                theme="dark"
                className="os-badge-star"
              >
                <div className="badge-content">
                  <div className="dot blue"></div>
                  <span>Windows Dev</span>
                </div>
              </StarBorder>

              <StarBorder
                as="div"
                color="#f97316"
                trailColor="#fb923c"
                duration={4.5}
                direction="clockwise"
                stars={1}
                trailLength={0.3}
                thickness={1}
                radius={12}
                glow={0.6}
                hover="lap"
                clickPulse
                theme="dark"
                className="os-badge-star"
              >
                <div className="badge-content">
                  <div className="dot orange"></div>
                  <span>Ubuntu Server</span>
                </div>
              </StarBorder>

              <StarBorder
                as="div"
                color="#ef4444"
                trailColor="#f87171"
                duration={3.8}
                direction="clockwise"
                stars={1}
                trailLength={0.3}
                thickness={1}
                radius={12}
                glow={0.6}
                hover="lap"
                clickPulse
                theme="dark"
                className="os-badge-star"
              >
                <div className="badge-content">
                  <div className="dot red"></div>
                  <span>Kali Linux Security</span>
                </div>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TECHNICAL SKILLS MATRIX */}
      <section id="skills" className="content-section">
        <div className="container">
          <div className="section-head-center">
            <TrueFocusText 
              sentence="Interactive Technical Skills & Production Arsenal"
              glowColor="#3b82f6"
            />
            <p className="section-subtitle-text">
              Categorized proficiency matrix validated across production builds, penetration testing drills, and cloud deployments.
            </p>
          </div>

          <SkillsSection />
        </div>
      </section>

      {/* SECTION 2: VERIFIED CERTIFICATIONS & ACADEMIC CREDENTIALS */}
      <section id="certifications" className="content-section">
        <div className="container">
          <div className="section-head-center">
            <TrueFocusText 
              sentence="Official Certifications & Academic Credentials"
              glowColor="#0ea5e9"
            />
            <p className="section-subtitle-text">
              Verified certifications from Infosys Maker Lab (CAS AKTU), Google Cybersecurity, TryHackMe, and B.Tech IT Degree.
            </p>
          </div>

          <CertificationsSection />
        </div>
      </section>

      {/* SECTION 3: LEARNING PATH & CAREER ROADMAP */}
      <section id="roadmap" className="content-section">
        <div className="container">
          <div className="section-head-center">
            <TrueFocusText 
              sentence="Structured Learning Path & Technical Roadmap"
              glowColor="#10b981"
            />
            <p className="section-subtitle-text">
              From Computer Science fundamentals to Full-Stack MERN engineering, offline Infosys residency, and Certified Ethical Hacker (CEH) preparation.
            </p>
          </div>

          <LearningPathSection />
        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTION PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-header">
            <Folder
              color="#3b82f6"
              size={1.5}
              items={['Network Recon', 'MERN Store', 'Phishing Suite', 'SOC Telemetry']}
              className="projects-folder"
            />
            <div className="projects-title-container">
              <TrueFocusText 
                sentence="Featured Production & Security Projects"
                glowColor="#8b5cf6"
              />
              <p className="projects-subtitle">
                Each project includes <strong>5 High-Resolution Screenshots</strong>, 
                <strong>Architecture Blueprints</strong>, and <strong>Live Demonstrations</strong>. 
                Proprietary core code is secured and private, while utility tools have public repositories.
              </p>
            </div>
          </div>

          <div className="projects-featured-grid">
            {projectsData.map((project) => (
              <ProjectBox
                key={project.id}
                project={project}
                onOpenGallery={handleOpenGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TEAM COLLABORATORS */}
      <section id="team" className="team-section">
        <div className="container">
          <SplitText
            text="Leadership & Technical Collaborators"
            className="section-title"
            tag="h2"
            delay={50}
            duration={0.6}
            ease="ease-out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <div className="team-grid">
            {[
              {
                name: "Ram Pravesh Yadav",
                role: "Lead Full Stack & Security Engineer",
                image: "/Rampravesh.jpeg",
                description: "Overseeing end-to-end architecture, secure API development, VAPT drills, and MERN deployment."
              },
              {
                name: "Tushar",
                role: "Frontend & UI/UX Specialist",
                image: "/Tushar.jpeg",
                description: "Crafting modern, accessible, and reactive user interfaces with modern CSS systems."
              },
              {
                name: "Yash Gupta",
                role: "Systems & Cloud Administrator",
                image: "/yash gupta.jpeg",
                description: "Managing server deployments, reverse proxies, containerization, and networking labs."
              },
              {
                name: "Pradeep Yadav",
                role: "Database & Backend Engineer",
                image: "/Pradeep yadav.jpeg",
                description: "Designing normalized MySQL schemas, query optimization, and REST integrations."
              },
              {
                name: "Omjee Shukla",
                role: "Quality Assurance & QA Automation",
                image: "/Omjee sukla.jpeg",
                description: "Executing automated testing, load benchmarks, and cross-browser reliability testing."
              },
              {
                name: "Divya Prakash",
                role: "Research & Documentation Analyst",
                image: "/Divya prakash.jpeg",
                description: "Compiling security documentation, compliance audit debriefs, and system manuals."
              },
              {
                name: "Abhishek",
                role: "Security & Penetration Testing Intern",
                image: "/Abhishek.jpeg",
                description: "Assisting in network reconnaissance, port scanning verification, and vulnerability analysis."
              }
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ABOUT ME */}
      <section id="about" className="about-section">
        <div className="container">
          <SplitText
            text="About Ram Pravesh Yadav"
            className="section-title"
            tag="h2"
            delay={60}
            duration={0.7}
            ease="ease-out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                Hello! I am <strong>Ram Pravesh Yadav</strong>, an experienced <strong>Cybersecurity Analyst and Full-Stack Software Engineer</strong>. 
                I hold a 100% commitment to high standards, reliable software delivery, and robust security architecture. 
                My development background spans modern reactive frontends, scalable Node/Express micro-services, and cloud-hosted databases.
              </p>
              <p className="about-paragraph">
                In Cybersecurity, I conduct <strong>Vulnerability Assessment & Penetration Testing (VAPT)</strong>, 
                OWASP Top 10 web security audits, network reconnaissance with Nmap and custom raw Python sockets, 
                and defensive email simulation for corporate security compliance. 
                I have completed a 4-week offline cybersecurity training with <strong>Infosys Maker Lab at CAS AKTU</strong>.
              </p>
              <p className="about-paragraph">
                On Upwork, Fiverr, and LinkedIn, I help founders, businesses, and development teams launch secure, bug-free applications 
                backed by clean code, interactive user interfaces, and verifiable architectural documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT & HIRE ME */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Ready to Collaborate or Hire?</h2>
          <p className="contact-subtitle">
            Whether you need a full-stack web application, a security vulnerability audit, or freelance contract delivery, 
            I am available for direct collaboration across your preferred platforms:
          </p>

          <div className="contact-cards-grid">
            {/* LinkedIn Card */}
            <div className="contact-platform-card card-linkedin">
              <div className="platform-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </div>
              <h3 className="platform-name">LinkedIn Professional Profile</h3>
              <p className="platform-desc">Connect directly for networking, full-time engineering roles, and security consulting.</p>
              <a 
                href="https://www.linkedin.com/in/rampravesh-yadav-89a142331/" 
                target="_blank" 
                rel="noreferrer" 
                className="platform-btn btn-linkedin-glow"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

            {/* Upwork Card */}
            <div className="contact-platform-card card-upwork">
              <div className="platform-icon">
                <span className="platform-symbol">💼</span>
              </div>
              <h3 className="platform-name">Upwork Freelance Contract</h3>
              <p className="platform-desc">Hire me with full escrow protection for custom MERN development, Python automation & audits.</p>
              <a 
                href="https://www.upwork.com/freelancers/~0134426549a0a03429" 
                target="_blank" 
                rel="noreferrer" 
                className="platform-btn btn-upwork-glow"
              >
                Hire on Upwork ($20/hr) ↗
              </a>
            </div>

            {/* Fiverr Card */}
            <div className="contact-platform-card card-fiverr">
              <div className="platform-icon">
                <span className="platform-symbol">⚡</span>
              </div>
              <h3 className="platform-name">Fiverr Verified Gigs</h3>
              <p className="platform-desc">Order structured gig packages for rapid bug fixing, landing pages, and security scans.</p>
              <a 
                href="https://www.fiverr.com/riyansh_yadav" 
                target="_blank" 
                rel="noreferrer" 
                className="platform-btn btn-fiverr-glow"
              >
                Order Gig on Fiverr ↗
              </a>
            </div>

            {/* Telegram & Direct Message */}
            <div className="contact-platform-card card-telegram">
              <div className="platform-icon">
                <span className="platform-symbol">✈️</span>
              </div>
              <h3 className="platform-name">Instant Chat (Telegram)</h3>
              <p className="platform-desc">Get in touch instantly for quick project questions, consultations, and live inquiries.</p>
              <a 
                href="https://t.me/Riyufreelance" 
                target="_blank" 
                rel="noreferrer" 
                className="platform-btn btn-telegram-glow"
              >
                Message @Riyufreelance ↗
              </a>
            </div>
          </div>

          <div className="resume-download-bar">
            <span className="resume-label">Need an official CV for hiring or compliance?</span>
            <StarBorder
              as="button"
              color="#818cf8"
              trailColor="#6366f1"
              duration={3.5}
              direction="clockwise"
              stars={2}
              trailLength={0.3}
              thickness={1.5}
              radius={12}
              glow={0.8}
              sparkle={true}
              clickPulse
              theme="dark"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Rampravesh-Full-Stack-Software-Engineer.pdf';
                link.download = 'Rampravesh-Yadav-Resume.pdf';
                link.click();
              }}
            >
              📄 Download Verified ATS Resume (PDF)
            </StarBorder>
          </div>
        </div>
      </section>

      {/* Screenshot Lightbox Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}

export default App;
