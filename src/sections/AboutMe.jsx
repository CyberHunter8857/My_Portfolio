import React from 'react';
import Technologies from '../components/Technologies';
import MoreAboutMe from '../components/MoreAboutMe';
import HobbiesComponent from '../components/HobbiesComponent';

const AboutMe = () => {
  return (
    <section id="about">
      <h1 className="pt-16 pb-2 text-center text-4xl font-bold text-slate-300">
        About Me
      </h1>
      <div className="mx-auto mb-8 h-0.5 w-20 bg-slate-400"></div>
      <p className="font-grotesk text-md mx-auto max-w-7xl px-4 pb-8 text-center leading-relaxed text-slate-400">
        I'm a dedicated software developer with strong skills in{' '}
        <span className="font-medium text-blue-400">Web Development</span>,{' '}
        <span className="font-medium text-emerald-400">IoT systems</span>, and{' '}
        <span className="font-medium text-purple-400">
          AI-powered applications
        </span>
        .
        <br />
        My journey began with a deep interest in how technology can simplify
        everyday challenges, which has grown into a passion for building
        scalable, user-friendly, and intelligent solutions. I love exploring
        modern frameworks, cloud platforms, and innovative tools while
        continuously sharpening my skills to deliver impactful software that
        bridges ideas with real-world needs.
      </p>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          🎯 Problem Solver
        </span>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
          🚀 Innovation Focused
        </span>
        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
          💡 Continuous Learner
        </span>
        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
          🔒 Security Conscious
        </span>
      </div>
      <Technologies />

      <HobbiesComponent />

      <MoreAboutMe />
    </section>
  );
};

export default AboutMe;
