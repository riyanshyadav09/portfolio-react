import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';
import LiquidEther from './LiquidEther';

const Hero = () => {
  useEffect(() => {
    gsap.from('.hero-text', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
      stagger: 0.2
    });
      // Add glowing effect to code elements
      const glowElements = document.querySelectorAll('.glow-effect');
      glowElements.forEach(element => {
        gsap.to(element, {
          filter: 'drop-shadow(0 0 15px #4f46e5)',
          duration: 2,
          repeat: -1,
          yoyo: true
        });
      });
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Liquid ether animated background */}
        <LiquidEther />
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
      
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)] opacity-20"></div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="glow-effect inline-block mb-6 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-sm font-medium text-white"
            >
              Full-Stack Developer & Digital Solutions Expert
            </motion.div>

            <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Rampravesh
              <span className="block mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                BTech Engineer
              </span>
            </h1>

            <p className="hero-text text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Aspiring to become a professional developer, specializing in cutting-edge development, security, and comprehensive digital solutions
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Hire Me
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Rampravesh-Full-Stack-Software-Engineer.pdf"
                download
                className="px-8 py-4 bg-white/10 rounded-xl text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-4"
            >
              {['Full-Stack Web', 'AI Integration', 'Cybersecurity', 'Blockchain', 'IoT', 'Game Dev'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </section>
  );
};

export default Hero;