import React from 'react'
import ProfileCard from './components/ProfileCard'
import GlitchText from './components/GlitchText'
import Lightning from './components/Lightning'
import SplitText from './components/SplitText'
import StarBorder from './components/StarBorder'
import ProjectBox from './components/ProjectBox'
import Folder from './components/Folder'
import GooeyNav from './components/GooeyNav'
import './App.css'

function App() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="portfolio-container">
      <Lightning />
      
      <nav className="main-navigation">
        <GooeyNav
          items={navItems}
          initialActiveIndex={0}
        />
      </nav>
      
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
              onContactClick={() => window.open('http://t.me/Riyufreelance', '_blank')}
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
              textAlign="left"
            />
            
            <div className="os-badges">
              <StarBorder color="#3b82f6" speed="6s" className="os-badge-star" as="div">
                <div className="badge-content">
                  <div className="dot blue"></div>
                  <span>Windows</span>
                </div>
              </StarBorder>
              <StarBorder color="#f97316" speed="7s" className="os-badge-star" as="div">
                <div className="badge-content">
                  <div className="dot orange"></div>
                  <span>Ubuntu</span>
                </div>
              </StarBorder>
              <StarBorder color="#ef4444" speed="5s" className="os-badge-star" as="div">
                <div className="badge-content">
                  <div className="dot red"></div>
                  <span>Kali Linux</span>
                </div>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>

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
              textAlign="center"
            />
          </div>
          <div className="projects-grid">
            {[
              {
                title: "Full Stack Web Development",
                items: ["React.js Applications", "Node.js Backend", "Laravel PHP Framework", "MySQL Database Design", "RESTful API Development", "Responsive Web Design"],
                image: "/icons/web-dev.svg"
              },
              {
                title: "Python Development",
                items: ["Django Web Framework", "Flask Applications", "Data Analysis", "Machine Learning", "Automation Scripts", "API Integration"],
                image: "/icons/python.svg"
              },
              {
                title: "Java Enterprise Solutions",
                items: ["Spring Boot Applications", "Enterprise Java", "Microservices Architecture", "Database Integration", "RESTful Web Services", "Maven Projects"],
                image: "/icons/java.svg"
              },
              {
                title: "Frontend Technologies",
                items: ["HTML5 & CSS3", "JavaScript ES6+", "React.js Components", "Bootstrap Framework", "Responsive Design", "Cross-browser Compatibility"],
                image: "/icons/frontend.svg"
              },
              {
                title: "Database Management",
                items: ["MySQL Administration", "Database Design", "Query Optimization", "Data Migration", "Backup & Recovery", "Performance Tuning"],
                image: "/icons/database.svg"
              },
              {
                title: "PHP & Laravel Development",
                items: ["Laravel Framework", "MVC Architecture", "Eloquent ORM", "Blade Templates", "Authentication Systems", "E-commerce Solutions"],
                image: "/icons/php.svg"
              },
              {
                title: "Mobile App Development",
                items: ["React Native Apps", "Cross-platform Development", "Mobile UI/UX", "App Store Deployment", "Push Notifications", "Offline Functionality"],
                image: "/icons/mobile.svg"
              },
              {
                title: "DevOps & Cloud Services",
                items: ["AWS Cloud Services", "Docker Containers", "CI/CD Pipelines", "Server Management", "Load Balancing", "Monitoring Solutions"],
                image: "/icons/devops.svg"
              },
              {
                title: "E-commerce Solutions",
                items: ["Online Store Development", "Payment Gateway Integration", "Inventory Management", "Order Processing", "Customer Management", "Analytics Dashboard"],
                image: "/icons/ecommerce.svg"
              },
              {
                title: "API Development & Integration",
                items: ["RESTful API Design", "Third-party Integrations", "Authentication Systems", "Rate Limiting", "Documentation", "Testing Frameworks"],
                image: "/icons/api.svg"
              },
              {
                title: "Security & Testing",
                items: ["Penetration Testing", "Security Audits", "XSS Prevention", "SQL Injection Protection", "Vulnerability Assessment", "Security Best Practices"],
                image: "/icons/security.svg"
              },
              {
                title: "Data Analytics & Visualization",
                items: ["Data Processing", "Statistical Analysis", "Dashboard Creation", "Report Generation", "Data Mining", "Business Intelligence"],
                image: "/icons/analytics.svg"
              }
            ].map((project, index) => (
              <ProjectBox
                key={index}
                title={project.title}
                items={project.items}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

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
              <SplitText
                text="Hello! I am Ram Pravesh Yadav, a dedicated and passionate Full Stack Software Engineer with extensive experience in modern web development technologies. As a 100% trusted freelancer, I have built a reputation for delivering high-quality, reliable, and innovative solutions to clients worldwide. My journey in software development spans multiple years, during which I have mastered various programming languages and frameworks that enable me to create robust, scalable, and user-friendly applications."
                className="about-paragraph"
                tag="p"
                delay={20}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="My technical expertise encompasses a comprehensive range of technologies including Python, Java, HTML5, CSS3, PHP, Database Management Systems (DBMS), MySQL, Laravel, React.js, and Node.js. This diverse skill set allows me to handle projects from conception to deployment, ensuring seamless integration between frontend and backend systems. I pride myself on staying current with the latest industry trends and continuously expanding my knowledge to provide cutting-edge solutions."
                className="about-paragraph"
                tag="p"
                delay={25}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="In Python development, I specialize in creating powerful web applications using Django and Flask frameworks. My Python projects include data analysis tools, machine learning implementations, automation scripts, and API integrations. I have successfully delivered numerous Python-based solutions that have helped businesses streamline their operations and improve efficiency. My expertise in Python extends to working with libraries such as NumPy, Pandas, and Scikit-learn for data science applications."
                className="about-paragraph"
                tag="p"
                delay={30}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="Java development is another area where I excel, particularly in enterprise-level applications. I have extensive experience with Spring Boot, creating microservices architectures, and developing robust backend systems. My Java projects demonstrate proficiency in object-oriented programming principles, design patterns, and best practices for maintainable code. I have successfully implemented complex business logic and integrated various third-party services using Java technologies."
                className="about-paragraph"
                tag="p"
                delay={35}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="Frontend development is where my creativity truly shines. With deep knowledge of HTML5, CSS3, and modern JavaScript (ES6+), I create responsive, interactive, and visually appealing user interfaces. My React.js expertise allows me to build dynamic single-page applications with excellent user experience. I understand the importance of cross-browser compatibility, accessibility standards, and performance optimization in frontend development."
                className="about-paragraph"
                tag="p"
                delay={40}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="PHP and Laravel development form a significant part of my portfolio. I have created numerous web applications using Laravel's elegant syntax and powerful features. My PHP projects include e-commerce platforms, content management systems, and custom web applications. I am proficient in Laravel's Eloquent ORM, Blade templating engine, and various Laravel packages that enhance development efficiency."
                className="about-paragraph"
                tag="p"
                delay={45}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="Database design and management are crucial aspects of my development process. With extensive MySQL experience, I design efficient database schemas, optimize queries for performance, and ensure data integrity. My DBMS knowledge includes normalization, indexing, stored procedures, and database security best practices. I have worked with both relational and NoSQL databases depending on project requirements."
                className="about-paragraph"
                tag="p"
                delay={50}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="Node.js development enables me to create fast, scalable server-side applications. I have built RESTful APIs, real-time applications using Socket.io, and microservices architectures with Node.js. My understanding of asynchronous programming and event-driven architecture allows me to create efficient backend systems that can handle high concurrent loads."
                className="about-paragraph"
                tag="p"
                delay={55}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="As a freelancer, I understand the importance of clear communication, meeting deadlines, and exceeding client expectations. My project management approach involves regular updates, transparent progress reporting, and collaborative problem-solving. I believe in building long-term relationships with clients based on trust, reliability, and consistent delivery of exceptional results."
                className="about-paragraph"
                tag="p"
                delay={60}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="My commitment to quality extends beyond just writing code. I follow industry best practices including version control with Git, automated testing, code documentation, and deployment strategies. I am experienced with various development tools and methodologies including Agile development, continuous integration, and DevOps practices."
                className="about-paragraph"
                tag="p"
                delay={65}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
              <SplitText
                text="Whether you need a simple website, a complex web application, or a complete digital solution, I am equipped with the skills and experience to bring your vision to life. My goal is to not just meet your requirements but to exceed them, providing solutions that drive your business forward and deliver measurable results."
                className="about-paragraph"
                tag="p"
                delay={70}
                duration={0.5}
                splitType="words"
                textAlign="justify"
              />
            </div>
          </div>
        </div>
      </section>

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
              { name: "Abhishek Yadav", role: "Communication Handler", image: "Abhishek.jpeg" },
              { name: "Evil Corp", role: "USA Foreigner", image: "evil-corp.jpeg" },
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
                onClick={() => window.open('https://t.me/Riyufreelance', '_blank')}
              >
                <span className="contact-icon">📱</span>
                Message on Telegram
              </StarBorder>
              <StarBorder
                color="#f093fb"
                speed="5s"
                className="contact-btn-star"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Rampravesh-Full-Stack-Software-Engineer.pdf';
                  link.download = 'Rampravesh-Full-Stack-Software-Engineer.pdf';
                  link.click();
                }}
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