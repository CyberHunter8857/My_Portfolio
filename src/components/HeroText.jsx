import React from 'react';
import { ContainerTextFlip } from './container-text-flip';

function HeroText() {
  return (
    <div className="font-sora text-center leading-tight lg:text-left">
      <h3 className="text-lg text-neutral-300">Hi, My Name is</h3>

      <h1
        className="text-4xl leading-tight font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.6)] transition-all duration-300 sm:text-5xl lg:text-6xl xl:text-7xl mb-2"
        style={{
          background: 'linear-gradient(90deg, #a855f7, #7c3aed, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Mayur Tamanke
      </h1>

      <div className="font-grotesk text-xl font-bold text-neutral-300 sm:text-2xl mb-2">
        I turn ideas into reality with{' '}
        <span className="block sm:inline">
          <ContainerTextFlip
            words={[
              'AI.',
              'IoT.',
              'Automation.',
              'Web-Magic.',
              'Innovation.',
              'Smart-Tech.',
            ]}
          />
        </span>
      </div>

      <p className="font-code md:lead mx-auto max-w-xl pt-2 px-6 sm:px-0 text-md text-neutral-300 sm:text-base lg:mx-0 lg:leading-normal lg:tracking-normal">
        As a full-stack developer, I love building powerful digital experiences
        blending code, creativity, and problem-solving. From sleek web apps to
        smart IoT systems and AI-powered solutions, I’m passionate about
        crafting tech that makes an impact.
      </p>
    </div>
  );
}

export default HeroText;
