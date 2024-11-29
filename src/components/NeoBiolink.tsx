import React, { useState } from 'react';
import { 
  Github, Linkedin, Twitter, Instagram, Coffee, 
  Mail, WhatsApp, Briefcase, Link as LinkIcon, 
  Globe, ExternalLink 
} from 'lucide-react';

const NeoBiolink: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('profile');

  const socialLinks = [
    { 
      icon: Github, 
      url: '#', 
      label: 'GitHub',
      color: 'from-green-400 to-green-600'
    },
    { 
      icon: Linkedin, 
      url: '#', 
      label: 'LinkedIn',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      icon: Twitter, 
      url: '#', 
      label: 'Twitter',
      color: 'from-cyan-400 to-cyan-600'
    },
    { 
      icon: Instagram, 
      url: '#', 
      label: 'Instagram',
      color: 'from-pink-400 to-pink-600'
    },
    { 
      icon: Coffee, 
      url: '#', 
      label: 'Buy Me a Coffee',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Application Web',
      description: 'Solution full-stack innovative',
      url: '#',
      icon: Globe
    },
    {
      title: 'Dashboard Data',
      description: 'Visualisation de données complexes',
      url: '#',
      icon: Briefcase
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
      icon: Mail,
      label: 'E-mail',
      url: 'mailto:votre.email@example.com',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: WhatsApp,
      label: 'WhatsApp',
      url: 'https://wa.me/VOTRENUMÉRO',
      color: 'from-green-400 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 overflow-hidden relative">
      {/* Particules animées */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              width: `${Math.random() * 5}px`,
              height: `${Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 30}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden relative z-10">
        {/* Navigation */}
        <div className="flex border-b border-gray-700">
          {['Profil', 'Portfolio', 'Contact'].map((section) => (
            <button
              key={section}
              className={`
                flex-1 p-3 text-center 
                transition-all duration-300
                ${activeSection === section.toLowerCase() 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-700'}
              `}
              onClick={() => setActiveSection(section.toLowerCase())}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Contenu dynamique */}
        <div className="p-6">
          {activeSection === 'profil' && (
            <div className="text-center">
              <img 
                src="/api/placeholder/150/150" 
                alt="Profile" 
                className="mx-auto w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-6"
              />
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                Développeur Pro
              </h1>
              <p className="text-gray-300 mt-2">
                Création de solutions web innovantes
              </p>

              <div className="mt-6 space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={index}
                      href={link.url}
                      className={`
                        block w-full p-3 text-center 
                        rounded-xl 
                        bg-gradient-to-r ${link.color}
                        text-white
                        font-semibold
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-xl
                        flex items-center justify-center
                        relative overflow-hidden
                        group
                      `}
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <Icon className={`mr-3 transition-transform duration-300 
                        ${hoveredLink === index ? 'rotate-12 scale-110' : ''}
                      `} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {activeSection === 'portfolio' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Mes Projets
              </h2>
              <div className="space-y-4">
                {portfolioProjects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <a 
                      key={index} 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block bg-gray-700/50 rounded-xl p-4 
                        flex items-center 
                        transform transition-all duration-300
                        hover:bg-gray-700/70 hover:scale-105
                        group
                      "
                    >
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg mr-4">
                        <Icon className="text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-white font-bold">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                      </div>
                      <ExternalLink className="text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Me Contacter
              </h2>
              <div className="space-y-4">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <a 
                      key={index}
                      href={option.url}
                      className={`
                        block w-full p-3 text-center 
                        rounded-xl 
                        bg-gradient-to-r ${option.color}
                        text-white
                        font-semibold
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-xl
                        flex items-center justify-center
                        relative overflow-hidden
                        group
                      `}
                    >
                      <Icon className="mr-3 transition-transform duration-300 group-hover:rotate-12" />
                      {option.label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeoBiolink;