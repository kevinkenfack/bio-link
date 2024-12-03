import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon,
  CoffeeIcon, MailIcon, BriefcaseIcon, LinkIcon,
  GlobeIcon, ExternalLinkIcon, SunIcon, MoonIcon
} from 'lucide-react';

const NeoBiolink = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('profil');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const socialLinks = [
    { icon: GithubIcon, url: 'https://github.com/kevinkenfack', label: 'GitHub', color: 'from-green-400 to-green-600' },
    { icon: LinkedinIcon, url: 'https://www.linkedin.com/in/kevinkenfackjoel', label: 'LinkedIn', color: 'from-blue-400 to-blue-600' },
    { icon: TwitterIcon, url: 'https://twitter.com/kenfackdev', label: 'X (Twitter)', color: 'from-cyan-400 to-cyan-600' },
    { icon: InstagramIcon, url: 'https://www.instagram.com/kevinkenfackjoel', label: 'Instagram', color: 'from-pink-400 to-pink-600' },
    { icon: CoffeeIcon, url: 'https://buymeacoffee.com/kevinkenfack', label: 'Buy Me a Coffee', color: 'from-cyan-500 to-indigo-500' },
    { icon: GlobeIcon, url: 'https://www.kevinkenfack.com/', label: 'My Bento', color: 'from-yellow-400 to-orange-500' }
  ];

  const portfolioProjects = [
    {
      title: 'Coupy',
      description: 'Coupy is a free open source tool to generate short links and QR codes',
      url: 'https://coupy-tech.vercel.app/',
      icon: GlobeIcon
    },
    {
      title: 'Analytics Rank',
      description: 'A simplified, intuitive analytics SaaS for tracking website traffic and user insights no complex setup required.',
      url: 'https://kevin.tagueacademy.com/',
      icon: BriefcaseIcon
    },
    {
      title: 'Kmotion',
      description: 'Create animated GIFs and videos with a drag-and-drop editor, perfect for social media and ads!',
      url: 'https://kmotion.kevinkenfack.com/',
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
        target="_blank"
        rel="noopener noreferrer"
        className={`
          block w-full p-4
          rounded-2xl
          bg-gradient-to-r ${link.color}
          text-white font-semibold
          transition-all duration-300
          hover:scale-102 hover:shadow-lg hover:shadow-${link.color.split('-')[2]}/20
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
        className={`
          block rounded-2xl p-6
          flex items-center
          transition-all duration-300
          hover:scale-102
          group
          ${theme === 'dark' 
            ? 'bg-gray-800/80 hover:bg-gray-700/90 hover:shadow-xl hover:shadow-blue-500/10' 
            : 'bg-gray-100/80 hover:bg-gray-200/90 hover:shadow-xl hover:shadow-gray-300/50'}
        `}
      >
        <motion.div 
          className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl mr-6"
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <project.icon className="text-white w-6 h-6" />
        </motion.div>
        <div className="flex-grow">
          <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
          <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
        </div>
        <ExternalLinkIcon className={`ml-4 transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}`} />
      </motion.a>
    );
  };

  const renderParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
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
          className={`absolute rounded-full ${theme === 'dark' ? 'bg-blue-400/30' : 'bg-gray-400/20'}`}
          style={{
            width: `${Math.random() * 6}px`,
            height: `${Math.random() * 6}px`
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div 
      className={`
        min-h-screen flex items-center justify-center p-4 md:p-8
        transition-colors duration-500
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-gray-100 to-white text-gray-900'}
      `}
    >
      {renderParticles()}
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          w-full max-w-md rounded-3xl shadow-2xl relative z-10 overflow-hidden
          transition-all duration-500
          ${theme === 'dark' 
            ? 'bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 shadow-black/50' 
            : 'bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl shadow-gray-200/50'}
        `}
      >
        {/* Header with integrated theme toggle */}
        <div className={`
          flex items-center justify-between p-6 pb-4
          ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'}
        `}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Kevin Kenfack
            </h1>
          </motion.div>
          
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              p-2 rounded-xl
              transition-all duration-300
              ${theme === 'dark' 
                ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}
            `}
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </motion.button>
        </div>

        <motion.nav 
          className={`
            flex px-6
            ${theme === 'dark' 
              ? 'border-b border-gray-800' 
              : 'border-b border-gray-200'}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {['Profil', 'Portfolio', 'Contact'].map(section => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex-1 py-3 px-4 text-center rounded-t-xl
                transition-all duration-300 relative
                ${activeSection === section.toLowerCase()
                  ? `
                    ${theme === 'dark'
                      ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'text-gray-900 bg-gradient-to-r from-blue-500 to-cyan-400 text-white'}
                  `
                  : `
                    ${theme === 'dark'
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}
                  `}
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
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="mx-auto w-32 h-32 rounded-2xl border-4 border-white/10 shadow-2xl mb-6"
                />
                <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Création de solutions web innovantes
                </p>
                <div className="space-y-3">
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
                <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Mes Projets
                </h2>
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
                <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Me Contacter
                </h2>
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
