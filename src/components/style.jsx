import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon,
  CoffeeIcon, MailIcon, BriefcaseIcon, LinkIcon,
  GlobeIcon, ExternalLinkIcon, SunIcon, MoonIcon,
  ArrowUpRight, Star, BookOpen, MessageSquare
} from 'lucide-react';

const NeoBiolink = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('profil');
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const socialLinks = [
    { icon: GithubIcon, url: 'https://github.com/kevinkenfack', label: 'GitHub', color: 'from-gray-600/20 to-gray-700/20' },
    { icon: LinkedinIcon, url: 'https://www.linkedin.com/in/kevinkenfackjoel', label: 'LinkedIn', color: 'from-blue-500/20 to-blue-600/20' },
    { icon: TwitterIcon, url: 'https://twitter.com/kenfackdev', label: 'X (Twitter)', color: 'from-blue-400/20 to-blue-500/20' },
    { icon: InstagramIcon, url: 'https://www.instagram.com/kevinkenfackjoel', label: 'Instagram', color: 'from-pink-500/20 to-purple-500/20' },
    { icon: MessageSquare, url: 'https://discord.com', label: 'Discord', color: 'from-indigo-500/20 to-purple-500/20' },
    { icon: CoffeeIcon, url: 'https://buymeacoffee.com/kevinkenfack', label: 'Buy Me a Coffee', color: 'from-yellow-500/20 to-orange-500/20' }
  ];

  const portfolioProjects = [
    {
      title: 'Coupy',
      description: 'Free open source tool to generate short links and QR codes',
      url: 'https://coupy-tech.vercel.app/',
      icon: GlobeIcon,
      isNew: true
    },
    {
      title: 'Analytics Rank',
      description: 'Simplified, intuitive analytics SaaS for tracking website traffic',
      url: 'https://kevin.tagueacademy.com/',
      icon: BriefcaseIcon
    },
    {
      title: 'Kmotion',
      description: 'Create animated GIFs and videos with a drag-and-drop editor',
      url: 'https://kmotion.kevinkenfack.com/',
      icon: LinkIcon
    }
  ];

  const renderHeader = () => (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5' : ''}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                  <img src="/api/placeholder/48/48" alt="Profile" className="w-10 h-10 rounded-xl" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse" />
            </div>
            <div className="block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Kevin Kenfack
              </h1>
              <p className="text-sm text-gray-400">Solutions web innovantes</p>
            </div>
          </div>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </div>
  );

  const renderCTA = () => (
    <div className="mb-12 group">
      <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl p-6 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-white/10">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/api/placeholder/80/80" alt="Featured Project" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-xs px-2 py-1 rounded-full">
              New
            </div>
          </div>
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Développeur Web Full Stack
            </h3>
            <p className="text-gray-400 mb-4">
              Spécialisé en React, Next.js et Node.js. Créons ensemble votre prochain projet web!
            </p>
            <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl hover:bg-blue-600 group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-white/10 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left flex items-center justify-between">
                Me Contacter
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSocialLinks = () => (
    <div className="grid gap-3 sm:grid-cols-2">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5"
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </motion.a>
      ))}
    </div>
  );

  const renderPortfolioProject = (project, index) => (
    <motion.a
      key={index}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
          <project.icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{project.title}</h3>
            {project.isNew && (
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-xs px-2 py-1 rounded-full">
                New
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />
        
        {renderHeader()}

        <div className="relative pt-24 px-4 sm:px-6 pb-12 max-w-4xl mx-auto">
          {renderCTA()}

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-400 tracking-wider">RÉSEAUX SOCIAUX</h4>
              {renderSocialLinks()}
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-400 tracking-wider">PROJETS RÉCENTS</h4>
              <div className="space-y-3">
                {portfolioProjects.map(renderPortfolioProject)}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-400 tracking-wider">RESSOURCES</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href="#" className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">Documentation</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
                <a href="#" className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium">Recommandations</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoBiolink;