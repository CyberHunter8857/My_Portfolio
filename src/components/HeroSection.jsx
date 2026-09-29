import { useState, useEffect, useCallback } from 'react';
import { BackgroundBeams } from './background-beams';

const timeBasedContent = [
  {
    timeRange: '06:00-09:00',
    title: 'Starting the day',
    description: 'Fresh coffee and morning motivation',
    gifUrl: '/developer-coffee-routine.png',
    mood: 'energetic'
  },
  {
    timeRange: '09:00-12:00',
    title: 'Deep in code',
    description: 'Peak productivity hours in full flow',
    gifUrl: '/developer-focused-typing.png',
    mood: 'focused'
  },
  {
    timeRange: '12:00-14:00',
    title: 'Lunch break',
    description: 'Recharging with good food and fresh air',
    gifUrl: '/relaxing-lunch-break.png',
    mood: 'relaxed'
  },
  {
    timeRange: '14:00-18:00',
    title: 'Building amazing things',
    description: 'Afternoon creativity and problem solving',
    gifUrl: '/creative-developer-workspace.png',
    mood: 'creative'
  },
  {
    timeRange: '18:00-21:00',
    title: 'Wrapping up',
    description: 'Completing tasks and planning ahead',
    gifUrl: '/placeholder-lmx5c.png',
    mood: 'accomplished'
  },
  {
    timeRange: '21:00-23:00',
    title: 'Learning & exploring',
    description: 'Diving into new technologies and ideas',
    gifUrl: '/reading-studying-learning-technology.png',
    mood: 'curious'
  },
  {
    timeRange: '23:00-06:00',
    title: 'Recharging',
    description: 'Rest and recovery for tomorrow\'s challenges',
    gifUrl: '/peaceful-night-sleep.png',
    mood: 'peaceful'
  }
];

const HeroSection = () => {
  const [currentContent, setCurrentContent] = useState(timeBasedContent[0]);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  const name = "Mayur Tamanke";
  const tagline = "Full Stack Developer & Digital Innovator";
  const description = "Crafting digital experiences that bridge imagination and reality. Specialized in modern web technologies with a passion for creating scalable, user-centric solutions.";

  // Get current time-based content
  const getCurrentContent = useCallback(() => {
    const now = new Date();
    const hours = now.getHours();
    
    if (hours >= 6 && hours < 9) return timeBasedContent[0];
    if (hours >= 9 && hours < 12) return timeBasedContent[1];
    if (hours >= 12 && hours < 14) return timeBasedContent[2];
    if (hours >= 14 && hours < 18) return timeBasedContent[3];
    if (hours >= 18 && hours < 21) return timeBasedContent[4];
    if (hours >= 21 && hours < 23) return timeBasedContent[5];
    return timeBasedContent[6]; // 23:00-06:00
  }, []);

  // Typewriter effect for name
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < name.length) {
        setDisplayedText(name.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [name]);

  // Update content based on time
  useEffect(() => {
    const updateContent = () => {
      setCurrentContent(getCurrentContent());
    };
    
    updateContent();
    const interval = setInterval(updateContent, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, [getCurrentContent]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const handleProjectsClick = () => {
    // Scroll to projects section or navigate
    const projectsElement = document.querySelector('#projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // Scroll to contact section or navigate
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
        }

        /* Button styles */
        .btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
          border: none;
          color: white;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
          background: linear-gradient(90deg, #7c3aed, #2563eb);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid #8b5cf6;
          color: #a78bfa;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
        }

        .btn-secondary:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: #a78bfa;
          color: #c4b5fd;
          transform: scale(1.05);
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <section 
        className="relative min-h-screen overflow-hidden flex items-center"
        style={{ 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
        }}
      >
        {/* Background Beams Component */}
        

        {/* Floating particles overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
                animation: `float 6s ease-in-out infinite ${particle.id * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Floating code snippets */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div 
            className="absolute text-purple-400 font-mono text-sm animate-bounce"
            style={{ 
              top: '25%', 
              left: '16.666667%',
              opacity: 0.2 
            }}
          >
            {'<Component />'}
          </div>
          <div 
            className="absolute text-blue-400 font-mono text-sm animate-pulse"
            style={{ 
              top: '75%', 
              right: '25%',
              opacity: 0.2 
            }}
          >
            {'{...props}'}
          </div>
          <div 
            className="absolute text-purple-300 font-mono text-xs animate-bounce"
            style={{ 
              top: '50%', 
              left: '8.333333%',
              opacity: 0.2,
              animationDelay: '1s'
            }}
          >
            useState()
          </div>
        </div>

        {/* Main content grid */}
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            
            {/* Left side - Hero text */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Name with typewriter effect */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span 
                    style={{
                      background: 'linear-gradient(90deg, #a78bfa, #8b5cf6, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {displayedText}
                  </span>
                  {isTyping && (
                    <span className="animate-pulse text-purple-400">|</span>
                  )}
                </h1>
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{ 
                    background: 'linear-gradient(90deg, #8b5cf6, #a855f7, #c084fc)',
                    filter: 'blur(20px)',
                    zIndex: -1 
                  }}
                />
              </div>

              {/* Tagline */}
              <div className="space-y-4">
                <h2 
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light opacity-0 animate-fade-in-up"
                  style={{ 
                    animationDelay: '2s', 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {tagline}
                </h2>

                {/* Description */}
                <p 
                  className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
                  style={{ 
                    animationDelay: '2.5s', 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: '3s', 
                  animationFillMode: 'forwards' 
                }}
              >
                <button
                  onClick={handleProjectsClick}
                  className="btn-primary"
                >
                  View Projects
                </button>
                
                <button
                  onClick={handleContactClick}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right side - Dynamic time-based content */}
            <div className="relative">
              <div 
                className="relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-500 group"
                style={{ 
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(192, 132, 252, 0.1) 100%)',
                  borderColor: 'rgba(139, 92, 246, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                }}
              >
                {/* Animated border overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6)',
                    padding: '2px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude'
                  }}
                >
                  <div 
                    className="h-full w-full rounded-2xl"
                    style={{ background: 'rgba(17, 24, 39, 0.9)' }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-6">
                  {/* Time indicator */}
                  <div 
                    className="inline-block px-4 py-2 rounded-full border"
                    style={{
                      background: 'rgba(139, 92, 246, 0.2)',
                      borderColor: 'rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    <span className="text-purple-300 text-sm font-medium">
                      Right now ({new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})
                    </span>
                  </div>

                  {/* Dynamic image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={currentContent.gifUrl || "/placeholder.svg"}
                      alt={currentContent.title}
                      className="w-full h-64 object-cover transition-all duration-1000 hover:scale-105"
                      style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                      onError={(e) => {
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(139, 92, 246, 0.5), transparent)'
                      }}
                    />
                  </div>

                  {/* Dynamic text content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">
                      {currentContent.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {currentContent.description}
                    </p>
                    
                    {/* Mood indicator */}
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-purple-300 text-sm capitalize">
                        {currentContent.mood} mode
                      </span>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Time range display */}
                  <div className="text-gray-400 text-sm opacity-70">
                    Active: {currentContent.timeRange}
                  </div>
                </div>

                {/* Pulsing glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-20 animate-pulse"
                  style={{ 
                    background: 'linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                    filter: 'blur(10px)'
                  }}
                />
              </div>

              {/* Floating geometric shapes */}
              <div 
                className="absolute w-8 h-8 border-2 animate-spin-slow"
                style={{ 
                  top: '-1rem',
                  right: '-1rem',
                  borderColor: 'rgba(139, 92, 246, 0.3)',
                  transform: 'rotate(45deg)'
                }}
              />
              <div 
                className="absolute w-6 h-6 animate-bounce"
                style={{ 
                  bottom: '-1rem',
                  left: '-1rem',
                  background: 'rgba(59, 130, 246, 0.2)',
                  transform: 'rotate(12deg)'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <BackgroundBeams />
    </>
  );
};

export default HeroSection;