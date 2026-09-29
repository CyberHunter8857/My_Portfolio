import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import LoadingScreen from './components/LoadingScreen';
import gsap from 'gsap';
import { ReactLenis, useLenis } from 'lenis/react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Fade out loader
      gsap.to('.loading-page', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          setLoading(false);
        },
      });
    }, 3000); // loader visible for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* --- Loader overlay --- */}
      {loading && <LoadingScreen />}

      {/* --- Your original layout, untouched --- */}
      <div className="container mx-auto max-w-7xl">
        <ReactLenis root />
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
