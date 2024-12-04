import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon,
  CoffeeIcon, MailIcon, BriefcaseIcon, LinkIcon,
  GlobeIcon, ExternalLinkIcon, SunIcon, MoonIcon, 
  ArrowUpRight, MessageSquare, Star, BookOpen
} from 'lucide-react';

const NeoBiolink = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('profil');
  const [theme, setTheme] = useState('dark');

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
    { icon: CoffeeIcon, url: 'https://buymeacoffee.com/kevinkenfack', label: 'Buy Me a Coffee', color: 'from-cyan-500/20 to-indigo-500/20' },
    { icon: GlobeIcon, url: 'https://www.kevinkenfack.com/', label: 'My Bento', color: 'from-yellow-500/20 to-orange-500/20' }
  ];

  const portfolioProjects = [
    {
      title: 'Coupy',
      description: 'Coupy is a free open source tool to generate short links and QR codes',
      url: 'https://coupy-tech.vercel.app/',
      icon: LinkIcon,
      image: '/coupy.png'
    },
    {
      title: 'Analytics Rank',
      description: 'A simplified, intuitive analytics SaaS for tracking website traffic',
      url: 'https://kevin.tagueacademy.com/',
      icon: BriefcaseIcon,
      image: '/analytics.png'
    },
    {
      title: 'Kmotion',
      description: 'Create animated GIFs and videos with a drag-and-drop editor',
      url: 'https://kmotion.kevinkenfack.com/',
      icon: GlobeIcon,
      image: '/kmotion.png'
    }
  ];

  const resourceLinks = [
    {
      name: 'Newsletter',
      icon: <MailIcon className="w-5 h-5 text-orange-400" />,
      color: 'from-orange-500/10 to-pink-500/10',
      url: '#'
    },
    {
      name: 'Free Roadmaps',
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/10 to-purple-500/10',
      url: '#'
    }
  ];

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

  return (
    <div 
      className={`
        min-h-screen bg-gray-950 text-white
        relative
      `}
    >
      {renderParticles()}
      
      {/* Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5' : ''}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                      <img src="/profile.jpeg" alt="Profile" className="w-10 h-10 rounded-xl" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse" />
                </div>
                <div className="block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Kevin Kenfack
                  </h1>
                  <p className="text-sm text-gray-400">Création de solutions web innovantes</p>
                </div>
              </div>
            </div>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative pt-24 px-4 sm:px-6 pb-12 max-w-4xl mx-auto">
        {/* Achievement Section with Image */}
        <div className="mb-8 group">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-purple-900/50 p-[1px] transition-all duration-300 hover:from-purple-600/50 hover:via-blue-600/50 hover:to-purple-600/50">
            <div className="relative bg-gray-950/95 rounded-3xl p-6 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 -left-4 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-0 -right-4 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-24 h-24 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
              </div>

              <div className="relative group">
                <img 
                  src="/achievement.png" 
                  alt="Web Development Achievement" 
                  className="w-full rounded-2xl mb-4 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent rounded-2xl opacity-60" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 text-red-500 px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-red-500/10">
                    New Achievement
                  </div>
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                </div>

                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Web Development Mastery
                </h2>
                <p className="text-gray-400 mb-4">
                  Celebrating my journey in creating innovative web solutions and helping developers grow.
                </p>
                <button className="bg-white/90 hover:bg-white text-gray-950 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-purple-500/20">
                  View My Journey
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Projects Section */}
        <div className="space-y-6 mb-8">
          <h4 className="text-sm font-medium text-gray-400 tracking-wider">MY PROJECTS</h4>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-white/20"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                </div>
                <div className="p-4 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <project.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project 
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Promo Card */}
        <div className="mb-12 group">
          <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl p-6 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-white/10">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img src="/course.png" alt="Course" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-xs px-2 py-1 rounded-full">
                  New
                </div>
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Become a Web Development Master
                </h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive course to elevate your web development skills
                </p>
                <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl hover:bg-blue-600 group">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-white/10 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left flex items-center justify-between">
                    View Course
                    <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-400 tracking-wider">SOCIAL MEDIA HANDLES</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-4 pb-8">
            <h4 className="text-sm font-medium text-gray-400 tracking-wider">FREEBIES AND MORE</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {resourceLinks.map(renderResourceLink)}
              <a 
                href="#" 
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium">Rate My Work</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

export default NeoBiolink;