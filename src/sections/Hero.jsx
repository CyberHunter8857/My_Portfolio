import React from 'react';
import { BackgroundBeams } from '../components/background-beams';
import { BackgroundRippleEffect } from '../components/background-ripple-effect';
import HeroText from '../components/HeroText';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import AboutMeButton from '../components/AboutMeButton';
import AnimatedHeroClock from '../components/AnimatedHeroClock';

function Hero() {
  return (
    <>
      <BackgroundRippleEffect />
      <section id="home" className="relative flex min-h-screen items-center">
        <div className="relative z-19 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-y-8 py-12 sm:gap-y-10 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-20">
            {/* Left side - Profile Image */}
            <div className="flex items-center justify-center lg:mb-0">
              <AnimatedHeroClock
                sizeClass="h-60 w-60 sm:h-94 sm:w-94 lg:h-108 lg:w-108"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-4 sm:space-y-4">
              <HeroText />

              {/* Social Media Links */}
              <div className="flex justify-center gap-4 text-slate-400 lg:justify-start lg:gap-5">
                <a
                  href="https://www.linkedin.com/in/mayur-tamanke-8726a7283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on LinkedIn"
                  className="group relative flex h-10 w-10 transform items-center justify-center rounded-full border-2 border-slate-400 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:h-12 lg:w-12"
                >
                  <FaLinkedin className="text-lg transition-all duration-300 group-hover:scale-110 lg:text-xl" />
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                </a>

                <a
                  href="https://github.com/CyberHunter8857"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on GitHub"
                  className="group relative flex h-10 w-10 transform items-center justify-center rounded-full border-2 border-slate-400 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none lg:h-12 lg:w-12"
                >
                  <FaGithub className="text-lg transition-all duration-300 group-hover:scale-110 lg:text-xl" />
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                </a>

                <a
                  href="https://x.com/mayurtamanke"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Twitter"
                  className="group relative flex h-10 w-10 transform items-center justify-center rounded-full border-2 border-slate-400 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:h-12 lg:w-12"
                >
                  <FaXTwitter className="text-lg transition-all duration-300 group-hover:scale-110 lg:text-xl" />
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                </a>

                <a
                  href="https://www.instagram.com/mayurtamanke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="group relative flex h-10 w-10 transform items-center justify-center rounded-full border-2 border-slate-400 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none lg:h-12 lg:w-12"
                >
                  <FaInstagram className="text-lg transition-all duration-300 group-hover:scale-110 lg:text-xl" />
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                </a>
              </div>

              {/* About Me Button */}
              <a className="pt-2" href="#about">
                <AboutMeButton />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <BackgroundBeams /> */}
    </>
  );
}

export default Hero;
