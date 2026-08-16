import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import ProjectBox from './components/ProjectBox'
import SplitText from './components/SplitText'
import GlitchText from './components/GlitchText'
import Lightning from './components/Lightning'
import ElectricBorder from './components/ElectricBorder'
import Folder from './components/Folder'
import GooeyNav from './components/GooeyNav'
import AnimatedList from './components/AnimatedList'
import StarBorder from './components/StarBorder'
import './App.css'

function App() {
  const projectCategories = [
    {
      title: "Full Stack Web Development",
      items: ["Web Development", "App Development", "API Integration", "Payment Integration (Razorpay, Crypto)"]
    },
    {
      title: "Animation & 3D", 
      items: ["Blender + Python + AI", "Game Development (C#, Python, Unity 3D)"]
    },
    {
      title: "Marketing & Automation",
      items: ["Telegram Bot", "Bulk Messaging", "Email Marketing", "Social Media (Facebook/Meta Ads)", "SEO Marketing"]
    },
    {
      title: "Content & Documentation",
      items: ["Content Writing", "Blogs, PDFs, Excel, Word", "Notepad Tools"]
    },
    {
      title: "E-commerce & Business",
      items: ["Dropshipping Website", "Ecommerce Platform API", "Branding Management"]
    },
    {
      title: "Security & Testing",
      items: ["VAPT Penetration Testing", "XSS, CSRF, SQL Injection", "Firewall Analytics", "Burp Suite, Wireshark"]
    },
    {
      title: "DevOps & Hosting",
      items: ["VPS Server Hosting", "SSH Root Access", "Hostinger Setup", "GitHub, Copilot"]
    },
    {
      title: "Blockchain & Crypto",
      items: ["NFT Coin Projects", "Cryptocurrency", "Data Breaches Analysis"]
    },
    {
      title: "IoT & Hardware",
      items: ["IoT Sensors", "Robotics & Mechanical", "NVIDIA SuperComputer H100"]
    },
    {
      title: "Database & Analytics",
      items: ["Database Administration", "SDAD/DBA Projects", "Data Flow Management"]
    },
    {
      title: "Coming Soon",
      items: ["Import Export Business", "License Guidelines", "World Trade Tourism"]
    }
  ]

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="portfolio-container">
      <Lightning
        hue={240}
        xOffset={0}
        speed={0.5}
        intensity={0.8}
        size={1.2}
      />
      
      {/* Navigation */}
      <nav className="main-navigation">
        <GooeyNav
          items={navItems}
          particleCount={12}
          particleDistances={[60, 8]}
          particleR={80}
          initialActiveIndex={0}
          animationTime={500}
          timeVariance={200}
          colors={[1, 2, 3, 4]}
        />
      </nav>
      {/* Hero Section with ProfileCard */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="profile-card-container">
            <ProfileCard
              name="Ram Pravesh Yadav"
              title="Software Development Engineer & Entrepreneur"
              handle="rampravesh"
              status="Available for Projects"
              contactText="Hire Me"
              avatarUrl="/Rampravesh.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('http://t.me/Riyufreelance')}
            />
          </div>
          
          <div className="hero-text">
            <GlitchText 
              className="glitch-title" 
              speed={0.8} 
              enableShadows={true} 
              enableOnHover={true}
            >
              Ram Pravesh Yadav
            </GlitchText>
            
            <SplitText
              text="Software Development Engineer & Entrepreneur"
              className="split-subtitle"
              tag="h2"
              delay={50}
              duration={0.8}
              ease="ease-out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            
            <div className="os-badges">
              <StarBorder
                color="#3b82f6"
                speed="6s"
                className="os-badge-star"
                as="div"
              >
                <div className="badge-content">
                  <div className="dot blue"></div>
                  <span>Windows</span>
                </div>
              </StarBorder>
              <StarBorder
                color="#f97316"
                speed="7s"
                className="os-badge-star"
                as="div"
              >
                <div className="badge-content">
                  <div className="dot orange"></div>
                  <span>Ubuntu</span>
                </div>
              </StarBorder>
              <StarBorder
                color="#ef4444"
                speed="5s"
                className="os-badge-star"
                as="div"
              >
                <div className="badge-content">
                  <div className="dot red"></div>
                  <span>Kali Linux</span>
                </div>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-header">
            <Folder
              color="#667eea"
              size={1.5}
              items={['Web Dev', 'Security', 'AI/ML']}
              className="projects-folder"
            />
            <SplitText
              text="My Projects"
              className="section-title"
              tag="h2"
              delay={80}
              duration={0.6}
              ease="ease-out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </div>
          
          <div className="projects-grid">
            {projectCategories.map((category, index) => (
              <ProjectBox
                key={index}
                title={category.title}
                items={category.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Workspace Section */}
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">Team Workspace</h2>

          <div className="team-grid">
            {[
              { name: "Yash Gupta", role: "Frontend Developer", image: "yash gupta.jpeg" },
              { name: "Tushar Rajput", role: "Backend Developer", image: "Tushar.jpeg" },
              { name: "Divya Prakash", role: "UI/UX Designer", image: "Divya prakash.jpeg" },
              { name: "Pradeep Yadav", role: "DevOps Engineer", image: "Pradeep yadav.jpeg" },
              { name: "Om Jee Shukla", role: "Full Stack Developer", image: "Omjee sukla.jpeg" },
              { name: "Ram Pravesh", role: "Project Lead & Architect", image: "Rampravesh.jpeg" }
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <img src={`/${member.image}`} alt={member.name} className="member-image" />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <div className="education-card">
            <h2 className="section-title">Education & Certification</h2>
            
            <div className="education-content">
              <h3 className="education-title">B.Tech Engineering</h3>
              <p className="education-institute">AIMT Engineering College</p>
              <p className="education-note">With Professional Certificates</p>
              
              <div className="education-details">
                <div className="detail-item">
                  <h4>Specialization</h4>
                  <p>Software Development & Engineering</p>
                </div>
                <div className="detail-item">
                  <h4>Technical Skills</h4>
                  <AnimatedList
                    items={[
                      'Full Stack Web Development',
                      'Cybersecurity & Penetration Testing',
                      'AI/ML & Data Science',
                      'Cloud Computing & DevOps',
                      'Mobile App Development',
                      'Blockchain & Cryptocurrency',
                      'IoT & Hardware Programming',
                      'Database Administration',
                      'API Development & Integration',
                      'Digital Marketing & SEO'
                    ]}
                    onItemSelect={(item, index) => console.log('Selected:', item)}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={false}
                    className="skills-list"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          
          <div className="contact-card">
            <p className="contact-text">
              Ready to collaborate on your next project? Let's build something amazing together!
            </p>
            
            <div className="contact-buttons">
              <StarBorder
                color="#667eea"
                speed="4s"
                className="contact-btn-star"
                onClick={() => window.open('http://t.me/Riyufreelance', '_blank')}
              >
                Get In Touch
              </StarBorder>
              <StarBorder
                color="#f093fb"
                speed="5s"
                className="contact-btn-star"
                onClick={() => console.log('Resume clicked')}
              >
                Download Resume
              </StarBorder>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App