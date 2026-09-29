import React from 'react';
import ModernCardGrid from '../components/ModernCardGrid';
const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-300">Projects</h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-slate-400"></div>
          <p className="font-grotesk text-md mx-auto max-w-2xl text-slate-400">
            A collection of my work showcasing web, IoT, and full-stack
            solutions built to solve real-world problems.
          </p>
        </div>
        <ModernCardGrid />
      </div>
    </section>
  );
};

export default Projects;
