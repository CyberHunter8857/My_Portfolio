import React from 'react';

const MoreProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Attendance System',
      description:
        'BLE beacon-based automated attendance tracking with geofencing and anti-spoofing security measures for campus environments.',
      technologies: ['React', 'Node.js', 'Express.js', 'BLE', 'IoT'],
      category: 'IoT & Security',
      status: 'In Development',
    },
    {
      id: 2,
      title: 'Portfolio Dashboard',
      description:
        'Modern React-based portfolio website with responsive design and interactive UI components showcasing technical projects.',
      technologies: [
        'React',
        'Tailwind CSS',
        'JavaScript',
        'Responsive Design',
      ],
      category: 'Web Development',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'VLSI Design Project',
      description:
        'VHDL-based full adder implementation with behavioral modeling and comprehensive VLSI design flow implementation.',
      technologies: ['VHDL', 'VLSI', 'Digital Design', 'Hardware Description'],
      category: 'Hardware Design',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Cloud Computing Platform',
      description:
        'Full-stack cloud application demonstrating SaaS model implementation with hybrid cloud architecture and scalable services.',
      technologies: [
        'Node.js',
        'Express.js',
        'Cloud Services',
        'API Development',
      ],
      category: 'Cloud Computing',
      status: 'In Progress',
    },
    {
      id: 5,
      title: 'IoT Attack Analysis Tool',
      description:
        'Security analysis framework for IoT systems with attack tree modeling and vulnerability assessment capabilities.',
      technologies: [
        'JavaScript',
        'Security Analysis',
        'IoT',
        'Data Visualization',
      ],
      category: 'Security Research',
      status: 'Research Phase',
    },
    {
      id: 6,
      title: 'AI-Powered Web App',
      description:
        'Integration of Google Gemini AI models for intelligent web applications with advanced data processing capabilities.',
      technologies: ['React', 'AI/ML', 'Google Gemini', 'API Integration'],
      category: 'AI & Machine Learning',
      status: 'Planning',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Research Phase':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30';
    }
  };

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-300">Projects</h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-neutral-400"></div>
          <p className="font-grotesk mx-auto max-w-2xl text-lg text-slate-400">
            A collection of my work showcasing web, IoT, and full-stack
            solutions built to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800/50 p-6 transition-all duration-300 hover:scale-105 hover:transform hover:border-neutral-600 hover:bg-neutral-800/70"
            >
              {/* Status Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-400">
                  {project.category}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="mb-3 text-xl font-bold text-neutral-200 group-hover:text-white">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-neutral-700/50 px-2 py-1 text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links/Actions */}
              <div className="flex space-x-3 pt-2">
                <button className="flex-1 rounded-md bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-600 hover:text-white">
                  View Details
                </button>
                <button className="rounded-md border border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white">
                  Demo
                </button>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:transform hover:from-blue-700 hover:to-purple-700">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
