import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProjects, setSelectedProjects] = useState(new Set());

  const toggleProjectSelection = (index) => {
    const newSelected = new Set(selectedProjects);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedProjects(newSelected);
  };

  const skillsLists = {
    'Full-Stack Web Development': [
      'React', 'Vue.js', 'Angular', 'Node.js', 'Express.js', 'Django', 'Flask', 'MongoDB', 'PostgreSQL', 'RESTful APIs'
    ],
    'AI API Integration': [
      'OpenAI API', 'Claude', 'GPT-4', 'Image Processing', 'URL APIs', 'Machine Learning', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'
    ],
    'Payment Gateways & Crypto': [
      'Razorpay', 'Stripe', 'PayPal', 'Cryptomus', 'Bitcoin', 'Ethereum', 'Blockchain', 'Web3.js', 'Smart Contracts', 'Crypto Wallets'
    ],
    'Cybersecurity & Penetration Testing': [
      'Wireshark', 'Burp Suite', 'Metasploit', 'Nmap', 'XSS', 'CSRF', 'SQL Injection', 'OWASP', 'Firewall', 'Encryption'
    ],
    'Blockchain & NFT Development': [
      'Solidity', 'Ethereum', 'Web3.js', 'NFT', 'Smart Contracts', 'DeFi', 'IPFS', 'Truffle', 'Hardhat', 'ERC-721'
    ],
    'IoT & Game Development': [
      'Unity3D', 'C#', 'Blender', 'Python', 'Raspberry Pi', 'ESP32', 'Arduino', 'MQTT', 'Sensors', 'Game Physics'
    ]
  };

  const projects = [
    {
      title: 'Full-Stack Web Development',
      description: 'Complete web development solutions from frontend to backend implementation. React, Vue.js, Angular, Node.js, Django, Flask, RESTful APIs.',
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      technologies: skillsLists['Full-Stack Web Development'],
      pricing: 'Starting from $500',
      link: '#contact'
    },
    {
      title: 'AI API Integration',
      description: 'Seamless integration of AI services, image processing APIs, and URL management systems. OpenAI, Claude, image generation APIs.',
      icon: (
        <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      technologies: skillsLists['AI API Integration'],
      pricing: 'Starting from $300',
      link: '#contact'
    },
    {
      title: 'Payment Gateways & Crypto',
      description: 'Global payment solutions with Razorpay, Stripe, PayPal integration. Cryptomus for anonymous cryptocurrency transactions.',
      icon: (
        <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      technologies: skillsLists['Payment Gateways & Crypto'],
      pricing: 'Starting from $200',
      link: '#contact'
    },
    {
      title: 'Cybersecurity & Penetration Testing',
      description: 'Comprehensive vulnerability assessments including XSS, CSRF, SQL injection detection. Wireshark and Burp Suite expertise.',
      icon: (
        <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      technologies: skillsLists['Cybersecurity & Penetration Testing'],
      pricing: 'Starting from $400',
      link: '#contact'
    },
    {
      title: 'Blockchain & NFT Development',
      description: 'Distributed ledger solutions, smart contract development, NFT platform creation, and cryptocurrency solutions.',
      icon: (
        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      technologies: skillsLists['Blockchain & NFT Development'],
      pricing: 'Starting from $1000',
      link: '#contact'
    },
    {
      title: 'IoT & Game Development',
      description: 'Raspberry Pi projects, ESP32 automation, Unity3D game development with C#, Blender 3D animation with Python scripting.',
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      technologies: skillsLists['IoT & Game Development'],
      pricing: 'Starting from $600',
      link: '#contact'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">My Services</h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Select the services you're interested in hiring me for. Each service includes detailed technical skills and pricing.
        </p>
        {selectedProjects.size > 0 && (
          <div className="mb-8 text-center">
            <p className="text-blue-400 font-semibold">
              {selectedProjects.size} service{selectedProjects.size > 1 ? 's' : ''} selected for hiring
            </p>
          </div>
        )}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border-2 ${
                selectedProjects.has(index) ? 'border-blue-500 bg-gray-800' : 'border-gray-700'
              }`}
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {project.icon}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <button
                    onClick={() => toggleProjectSelection(index)}
                    className={`w-6 h-6 rounded-full border-2 transition-colors ${
                      selectedProjects.has(index)
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-500 hover:border-blue-400'
                    }`}
                  >
                    {selectedProjects.has(index) && (
                      <svg className="w-4 h-4 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Technical Skills:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.technologies.slice(0, 10).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs text-center"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-400 font-semibold text-sm">{project.pricing}</span>
                  <span className="text-gray-400 text-xs">Available Now</span>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleProjectSelection(index)}
                    className={`flex-1 py-2 rounded-lg transition-colors text-sm font-medium ${
                      selectedProjects.has(index)
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {selectedProjects.has(index) ? 'Selected' : 'Select for Hire'}
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-center text-sm font-medium"
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;