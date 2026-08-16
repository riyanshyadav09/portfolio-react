import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillsList = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Flask',
    'Python', 'JavaScript', 'TypeScript', 'C#', 'Unity3D',
    'OpenAI API', 'Razorpay', 'Stripe', 'Blockchain', 'Solidity',
    'Wireshark', 'Burp Suite', 'Raspberry Pi', 'ESP32', 'Blender'
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm Rampravesh, a BTech Engineer and freelance software developer aspiring to become a professional developer.
                I specialize in comprehensive tech services including full-stack web development, AI integration, cybersecurity,
                and emerging technologies like blockchain and IoT.
              </p>
              <p className="text-gray-300 text-lg">
                My journey in tech is driven by a passion for creating innovative solutions and pushing the boundaries of digital possibilities.
                From building modern web applications to developing secure systems and exploring cutting-edge technologies,
                I strive to deliver excellence in every project.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsList.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-3 text-center text-blue-400"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;