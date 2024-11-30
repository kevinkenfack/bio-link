import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  CoffeeIcon,
  MailIcon,
  BriefcaseIcon,
  LinkIcon,
  GlobeIcon,
  ExternalLinkIcon
} from 'lucide-react';

const NeoBiolink = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('profil');

  const socialLinks = [
    { icon: GithubIcon, url: '#', label: 'GitHub', color: 'from-green-400 to-green-600' },
    { icon: LinkedinIcon, url: '#', label: 'LinkedIn', color: 'from-blue-400 to-blue-600' },
    { icon: TwitterIcon, url: '#', label: 'Twitter', color: 'from-cyan-400 to-cyan-600' },
    { icon: InstagramIcon, url: '#', label: 'Instagram', color: 'from-pink-400 to-pink-600' },
    { icon: CoffeeIcon, url: '#', label: 'Buy Me a Coffee', color: 'from-yellow-400 to-orange-500' }
  ];

  const portfolioProjects = [
    {
      title: 'Application Web',
      description: 'Solution full-stack innovative',
      url: '#',
      icon: GlobeIcon
    },
    {
      title: 'Dashboard Data',
      description: 'Visualisation de données complexes',
      url: '#',
      icon: BriefcaseIcon
    },
    {
      title: 'Site Vitrine',
      description: 'Design moderne et réactif',
      url: '#',
      icon: LinkIcon
    }
  ];

  const contactOptions = [
    {
      icon: MailIcon,
      label: 'E-mail',
      url: 'mailto:kevinkenfackjoel@gmail.com',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const renderSocialLink = (link, index) => {
    return (
      <motion.a 
        key={index}
        href={link.url}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={`
          block w-full p-3
          rounded-xl 
          bg-gradient-to-r ${link.color}
          text-white font-semibold
          transition-all duration-300
          hover:scale-105 hover:shadow-xl
          flex items-center justify-center
          group
        `}
        onMouseEnter={() => setHoveredLink(index)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        <link.icon className={`
          mr-3 transition-transform duration-300
          ${hoveredLink === index ? 'rotate-12 scale-110' : ''}
        `} />
        {link.label}
      </motion.a>
    );
  };

  const renderPortfolioProject = (project, index) => {
    return (
      <motion.a 
        key={index}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className="
          block bg-gray-700/50 rounded-xl p-4 
          flex items-center 
          transition-all duration-300
          hover:bg-gray-700/70 hover:scale-105
          group
        "
      >
        <motion.div 
          className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg mr-4"
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <project.icon className="text-white" />
        </motion.div>
        <div className="flex-grow">
          <h3 className="text-white font-bold">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
        <ExternalLinkIcon className="text-gray-400 group-hover:text-white transition-colors" />
      </motion.a>
    );
  };

  const renderParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
      {[...Array(50)].map((_, i) => (
        <motion.div 
          key={i}
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            transition: { 
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              repeatType: 'loop'
            }
          }}
          className="absolute bg-white/10 rounded-full"
          style={{
            width: `${Math.random() * 5}px`,
            height: `${Math.random() * 5}px`
          }}
        />
      ))}
    </div>
  );

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      {renderParticles()}
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 relative z-10 overflow-hidden"
      >
        <motion.nav 
          className="flex border-b border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {['Profil', 'Portfolio', 'Contact'].map(section => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex-1 p-3 text-center transition-all duration-300
                ${activeSection === section.toLowerCase() 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-700'}
              `}
            >
              {section}
            </motion.button>
          ))}
        </motion.nav>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {activeSection === 'profil' && (
              <motion.div 
                key="profil"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-center"
              >
                <motion.img 
                  src="/profile.jpeg"
                  alt="Profile"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="mx-auto w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
                />
                <h1 className="text-3xl font-bold text-white mb-2">Kevin Kenfack</h1>
                <p className="text-gray-300 mb-6">Création de solutions web innovantes</p>
                <div className="space-y-4">
                  {socialLinks.map(renderSocialLink)}
                </div>
              </motion.div>
            )}

            {activeSection === 'portfolio' && (
              <motion.div
                key="portfolio"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Mes Projets</h2>
                <div className="space-y-4">
                  {portfolioProjects.map(renderPortfolioProject)}
                </div>
              </motion.div>
            )}

            {activeSection === 'contact' && (
              <motion.div
                key="contact"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Me Contacter</h2>
                <div className="space-y-4">
                  {contactOptions.map(renderSocialLink)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default NeoBiolink;
