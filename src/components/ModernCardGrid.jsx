import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Brain, X, ExternalLink, Github } from 'lucide-react';

// --- DATA & CONFIGURATION ---
const Projects = [
  {
    id: 1,
    title: 'Smart Attendance System',
    description:
      'BLE beacon-based automated attendance tracking with geofencing and anti-spoofing security measures for campus environments.',
    fullDescription:
      'A comprehensive IoT solution that leverages BLE beacon technology for automated attendance tracking. The system incorporates advanced geofencing capabilities to ensure accurate location-based attendance marking, while implementing robust anti-spoofing security measures to prevent fraudulent check-ins.',
    technologies: ['React', 'Node.js', 'Express.js', 'BLE', 'IoT'],
    category: 'IoT & Security',
    status: 'In Development',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    domain: { name: 'IoT & Security', icon: Cpu },
    liveDemo: 'https://attendance-demo.example.com',
    githubLink: 'https://github.com/username/smart-attendance-system',
  },
  {
    id: 2,
    title: 'SmartDraw AI-powered Calculator',
    description:
      'A powerful AI-powered calculator that solves mathematical expressions, equations, and analyzes graphical problems through hand-drawn input.',
    fullDescription:
      'An innovative calculator application that harnesses the power of artificial intelligence to interpret and solve complex mathematical problems. Users can draw mathematical expressions, equations, and geometric problems directly on the interface, and the AI processes these hand-drawn inputs to provide accurate solutions.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Google Generative AI',
    ],
    category: 'AI & Web App',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    domain: { name: 'AI & Web App', icon: Brain },
    liveDemo: 'https://smartdraw-calculator.example.com',
    githubLink: 'https://github.com/username/smartdraw-ai-calculator',
  },
  {
    id: 3,
    title: 'VLSI Design Automation',
    description:
      'Advanced VHDL-based digital circuit design and verification system with automated testing and synthesis capabilities.',
    fullDescription:
      'A comprehensive VLSI design automation platform that streamlines the digital circuit design process. Features include automated VHDL code generation, circuit synthesis, timing analysis, and verification. The system supports complex digital designs from basic logic gates to advanced processor architectures.',
    technologies: ['VHDL', 'Verilog', 'FPGA', 'Synthesis Tools', 'Simulation'],
    category: 'Hardware Design',
    status: 'Planning',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    domain: { name: 'Hardware Design', icon: Cpu },
    liveDemo: null, // No live demo for planning stage
    githubLink: 'https://github.com/username/vlsi-design-automation',
  },
  {
    id: 4,
    title: 'Machine Learning Pipeline',
    description:
      'End-to-end ML pipeline with automated data processing, model training, and deployment capabilities for predictive analytics.',
    fullDescription:
      'A comprehensive machine learning platform that automates the entire ML workflow from data ingestion to model deployment. Features include automated feature engineering, hyperparameter tuning, model validation, and production deployment with monitoring capabilities.',
    technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'MLflow'],
    category: 'AI & ML',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    domain: { name: 'AI & ML', icon: Brain },
    liveDemo: 'https://ml-pipeline-demo.example.com',
    githubLink: 'https://github.com/username/ml-pipeline-automation',
  },
];

const statusColors = {
  Completed: 'bg-emerald-500',
  'In Development': 'bg-amber-500',
  Planning: 'bg-blue-500',
};

// --- ANIMATION VARIANTS ---
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.4,
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.02,
    y: -5,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
};

const buttonVariants = {
  shake: {
    x: [0, -1, 1, -1, 1, 0],
    y: [0, 1, -1, 1, -1, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
  hover: {
    scale: 1.05,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2, type: 'spring', stiffness: 150, damping: 15 },
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 10px 40px rgba(255,255,255,0.2)',
    transition: { duration: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.3 } },
};

const expandedCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

// --- SUB-COMPONENTS ---
const Card = ({ project, index, onSelect, isSelected }) => {
  const IconComponent = project.domain.icon;
  const isAIProject =
    project.category === 'AI & Web App' || project.category === 'AI & ML';

  const handleLiveDemo = (e) => {
    e.stopPropagation();
    if (project.liveDemo) {
      window.open(project.liveDemo, '_blank');
    }
  };

  const handleGithub = (e) => {
    e.stopPropagation();
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
  };

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      className={`relative flex w-full flex-col overflow-hidden rounded-[30px] border border-blue-500/20 bg-slate-900 shadow-[0px_0px_20px_rgba(255,255,255,0.1)] ${!isSelected ? 'cursor-pointer' : ''}`}
      variants={cardVariants}
      whileHover={!isSelected ? 'hover' : ''}
      custom={index}
      onClick={() => onSelect(project.id)}
      style={{
        opacity: isSelected ? 0 : 1,
        pointerEvents: isSelected ? 'none' : 'auto',
      }}
      aria-hidden={isSelected}
    >
      <motion.div
        layoutId={`image-${project.id}`}
        className="relative h-48 w-full"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: isAIProject
              ? 'linear-gradient(to top, rgba(102,126,234,0.8), rgba(118,75,162,0.4), transparent)'
              : 'linear-gradient(to top, rgba(240,147,251,0.8), rgba(245,87,108,0.4), transparent)',
          }}
        />
        <motion.div
          layoutId={`status-${project.id}`}
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColors[project.status]}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {project.status}
        </motion.div>
      </motion.div>

      <motion.div
        layoutId={`content-${project.id}`}
        className="flex flex-col gap-3 p-5"
      >
        <div className="flex items-center gap-3">
          <motion.div
            layoutId={`icon-${project.id}`}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-slate-800 shadow"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <IconComponent className="h-6 w-6 text-slate-200" />
          </motion.div>
          <motion.h3
            layoutId={`title-${project.id}`}
            className="text-lg font-bold text-slate-100"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {project.title}
          </motion.h3>
        </div>

        <motion.p
          className="line-clamp-3 text-sm text-slate-300"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {project.description}
        </motion.p>

        <motion.div
          layoutId={`tech-${project.id}`}
          className="flex flex-wrap gap-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-slate-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </motion.div>

        <div className="mt-2 flex gap-2">
          <motion.button
            className={`inline-flex items-center gap-1 rounded border px-3 py-2 text-sm font-medium ${
              project.liveDemo
                ? 'border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                : 'cursor-not-allowed border-gray-600 bg-gray-600/10 text-gray-500'
            }`}
            variants={buttonVariants}
            animate={project.liveDemo ? 'shake' : ''}
            whileHover={project.liveDemo ? 'hover' : ''}
            whileTap={project.liveDemo ? 'tap' : ''}
            onClick={handleLiveDemo}
            disabled={!project.liveDemo}
          >
            <ExternalLink size={14} />
            Live Demo
          </motion.button>
          <motion.button
            className="inline-flex items-center gap-1 rounded border border-slate-600 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700"
            variants={buttonVariants}
            animate="shake"
            whileHover="hover"
            whileTap="tap"
            onClick={handleGithub}
          >
            <Github size={14} />
            Source Code
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExpandedCard = ({ project, onClose }) => {
  const IconComponent = project.domain.icon;
  const isAIProject =
    project.category === 'AI & Web App' || project.category === 'AI & ML';

  const handleLiveDemo = () => {
    if (project.liveDemo) {
      window.open(project.liveDemo, '_blank');
    }
  };

  const handleGithub = () => {
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />

      <motion.div
        layoutId={`card-${project.id}`}
        className="fixed top-1/2 left-1/2 z-50 h-[80vh] w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 cursor-default overflow-hidden rounded-[30px] border border-blue-500/20 bg-slate-900 shadow-[0px_0px_40px_rgba(255,255,255,0.2)]"
        variants={expandedCardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          className="sticky top-0 right-0 z-10 mt-3 mr-3 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/90 text-slate-300 backdrop-blur-sm hover:bg-slate-700 hover:text-white"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Close project details"
        >
          <X size={16} />
        </motion.button>

        <motion.div
          layoutId={`image-${project.id}`}
          className="relative -mt-11 h-40 w-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: isAIProject
                ? 'linear-gradient(to top, rgba(102,126,234,0.8), rgba(118,75,162,0.4), transparent)'
                : 'linear-gradient(to top, rgba(240,147,251,0.8), rgba(245,87,108,0.4), transparent)',
            }}
          />
          <motion.div
            layoutId={`status-${project.id}`}
            className={`absolute top-2 left-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColors[project.status]}`}
          >
            {project.status}
          </motion.div>
        </motion.div>

        <motion.div
          layoutId={`content-${project.id}`}
          className="flex max-h-[calc(100%-160px)] flex-col gap-4 overflow-y-auto p-5"
        >
          <div className="flex items-center gap-3">
            <motion.div
              layoutId={`icon-${project.id}`}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-slate-800 shadow"
            >
              <IconComponent className="h-6 w-6 text-slate-200" />
            </motion.div>
            <div>
              <motion.h3
                layoutId={`title-${project.id}`}
                className="text-xl font-bold text-slate-200"
              >
                {project.title}
              </motion.h3>
              <p className="text-xs text-slate-400">{project.domain.name}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            <h4 className="mb-2 text-sm font-semibold text-slate-200">
              About This Project
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div
            layoutId={`tech-${project.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            <h4 className="mb-2 text-sm font-semibold text-slate-200">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-3 flex gap-2 pb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          >
            <motion.button
              className={`inline-flex items-center gap-2 rounded border px-4 py-2 text-sm font-medium ${
                project.liveDemo
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  : 'cursor-not-allowed border-gray-600 bg-gray-600/10 text-gray-500'
              }`}
              whileHover={project.liveDemo ? { scale: 1.02 } : {}}
              whileTap={project.liveDemo ? { scale: 0.98 } : {}}
              onClick={handleLiveDemo}
              disabled={!project.liveDemo}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.button>
            <motion.button
              className="inline-flex items-center gap-2 rounded border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGithub}
            >
              <Github size={16} />
              Source Code
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

// --- MAIN COMPONENT ---
const ModernCardDesign = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = selectedId
    ? Projects.find((p) => p.id === selectedId)
    : null;

  return (
    <div className="min-h-screen bg-transparent">
      <motion.div
        className="grid grid-cols-1 gap-6 px-4 pt-4 pb-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Projects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            index={index}
            isSelected={selectedId === project.id}
            onSelect={setSelectedId}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ExpandedCard
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernCardDesign;
