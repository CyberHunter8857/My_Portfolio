import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA: Centralized navigation items (Unchanged) ---
const navItems = [
  // ... same as before
  {
    label: 'Resume',
    href: '/resume.pdf',
    isCta: true,
    mobileCtaClassName:
      'lg:hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/40',
  },
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// --- ANIMATION VARIANTS (Unchanged) ---
const ulVariants = {
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const liVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// --- CHILD COMPONENT: Navigation List (THIS IS WHERE THE FIX IS) ---
function Navigation({ navItems, onLinkClick, activeSection }) {
  // 1. Update state to hold all four dimensions
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const navRef = useRef(null);

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const activeLink = navElement.querySelector(`a[href="#${activeSection}"]`);

    if (activeLink) {
      // 2. Measure all four properties of the active link
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeLink;

      // 3. Update the state with the new dimensions
      setHighlightStyle({
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [activeSection, navItems]); // Rerun when activeSection or items change

  return (
    <motion.ul
      ref={navRef}
      className="relative flex flex-col space-y-2 px-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-1 lg:px-0"
      variants={ulVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* The Morphing Highlight Div */}
      <motion.div
        // 4. Removed top-0/bottom-0, as JS now controls vertical position
        className="absolute -z-10 rounded-md bg-white/5"
        initial={false}
        // 5. Animate to the full style object
        animate={highlightStyle}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        layout
      />

      {navItems.map(({ label, href, className = '' }) => {
        const isActive = href === `#${activeSection}`;
        return (
          <motion.li key={label} variants={liVariants}>
            <a
              href={href}
              onClick={onLinkClick}
              className={`block rounded-md px-4 py-3 text-center transition-all duration-300 ease-out lg:px-3 lg:py-2 lg:text-left ${className} ${
                isActive ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {label}
            </a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

// --- MAIN COMPONENT: Navbar (Unchanged from the last version) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const mainNavLinks = navItems.filter((item) => !item.isCta);
  const ctaLink = navItems.find((item) => item.isCta);

  useEffect(() => {
    const sections = navItems
      .filter((item) => item.href.startsWith('#'))
      .map((item) => document.getElementById(item.href.substring(1)));

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  const handleLinkClick = (e) => {
    const href = e.currentTarget.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 64;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-16 w-full border-b border-slate-800/50 bg-slate-900/60 shadow-lg shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
            <a href="#home" onClick={handleLinkClick} className="group">
              <img
                className="h-7 w-7 opacity-70 drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 sm:h-8 sm:w-8"
                src="/assets/icons/mylogo.png"
                alt="logo"
              />
            </a>
            <a
              className="font-sora truncate text-lg font-bold text-slate-200 drop-shadow-sm transition-colors duration-300 hover:text-white sm:text-xl"
              href="#home"
              onClick={handleLinkClick}
            >
              Mayur Tamanke
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 justify-center lg:flex">
            <Navigation
              navItems={mainNavLinks}
              onLinkClick={handleLinkClick}
              activeSection={activeSection}
            />
          </nav>

          {/* Desktop Resume Button */}
          {ctaLink && (
            <div className="hidden lg:flex">
              <a
                href={ctaLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-lg border border-purple-300/30 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/40 xl:px-5 xl:text-base"
              >
                {ctaLink.label}
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="flex-shrink-0 rounded-md p-2 transition-colors duration-300 hover:bg-white/5 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-slate-300" />
            ) : (
              <Menu className="h-6 w-6 text-slate-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-16 border-t border-slate-800/50 bg-slate-900/95 backdrop-blur-md lg:hidden"
          >
            <nav className="py-4">
              <Navigation
                navItems={navItems.map((item) => ({
                  ...item,
                  className: item.isCta ? item.mobileCtaClassName : '',
                }))}
                onLinkClick={handleLinkClick}
                activeSection={activeSection}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
