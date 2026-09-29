import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-cyan-500/20 bg-slate-900/20 backdrop-blur-xl">
      {/* Background SVGs (same as before) */}
      <div className="absolute inset-0 opacity-30">
        {/* Keep your futuristic SVG background here */}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <p className="mb-2 text-sm text-slate-400">
              © {currentYear} Mayur Tamanke. Made with{' '}
              <Heart
                className="inline h-4 w-4 text-red-500"
                fill="currentColor"
              />{' '}
              and lots of coffee
            </p>
            <p className="text-xs text-slate-500">
              Designed & Built with cutting-edge technologies
            </p>
          </div>

          {/* Right Side - Back to Top */}
          <button
            onClick={scrollToTop}
            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-slate-300 backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <ArrowUp className="relative z-10 h-4 w-4 transition-colors group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;
