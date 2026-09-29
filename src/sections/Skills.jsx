import React from 'react';
import ScrollVelocity from '../components/ScrollVelocity';
import { FaJava, FaPython, FaJs, FaCuttlefish } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const languages = [
  { icon: <FaJava className="text-red-500" />, label: 'Java' },
  { icon: <FaPython className="text-yellow-400" />, label: 'Python' },
  { icon: <FaCuttlefish className="text-blue-400" />, label: 'C' },
  { icon: <SiCplusplus className="text-indigo-400" />, label: 'C++' },
  { icon: <FaJs className="text-yellow-300" />, label: 'JavaScript' },
];
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'blue',
      skills: [
        { name: 'React (with Vite)', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Netlify / Vercel', level: 85 },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: '⚙️',
      color: 'green',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Linux / Windows', level: 80 },
      ],
    },
    {
      title: 'IoT & Hardware',
      icon: '🔌',
      color: 'orange',
      skills: [
        { name: 'ESP32 / ESP8266', level: 80 },
        { name: 'Arduino', level: 75 },
        { name: 'Raspberry Pi', level: 70 },
        { name: 'Sensors & Relays', level: 85 },
      ],
    },
    {
      title: 'Agentic AI & ML',
      icon: '🤖',
      color: 'purple',
      skills: [
        { name: 'OpenAI API', level: 75 },
        { name: 'Gemini API', level: 70 },
        { name: 'Anthropic (Claude) API', level: 70 },
        { name: 'LangChain', level: 75 },
        { name: 'RAG Architecture', level: 65 },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        border: 'border-blue-500/20',
        bg: 'from-blue-500/5 to-blue-600/10',
        text: 'text-blue-400',
        icon: 'from-blue-500 to-blue-600',
        progress: 'bg-blue-500',
        hover: 'hover:border-blue-400/40 hover:shadow-blue-500/10',
      },
      green: {
        border: 'border-emerald-500/20',
        bg: 'from-emerald-500/5 to-emerald-600/10',
        text: 'text-emerald-400',
        icon: 'from-emerald-500 to-emerald-600',
        progress: 'bg-emerald-500',
        hover: 'hover:border-emerald-400/40 hover:shadow-emerald-500/10',
      },
      purple: {
        border: 'border-purple-500/20',
        bg: 'from-purple-500/5 to-purple-600/10',
        text: 'text-purple-400',
        icon: 'from-purple-500 to-purple-600',
        progress: 'bg-purple-500',
        hover: 'hover:border-purple-400/40 hover:shadow-purple-500/10',
      },
      indigo: {
        border: 'border-indigo-500/20',
        bg: 'from-indigo-500/5 to-indigo-600/10',
        text: 'text-indigo-400',
        icon: 'from-indigo-500 to-indigo-600',
        progress: 'bg-indigo-500',
        hover: 'hover:border-indigo-400/40 hover:shadow-indigo-500/10',
      },
      orange: {
        border: 'border-orange-500/20',
        bg: 'from-orange-500/5 to-orange-600/10',
        text: 'text-orange-400',
        icon: 'from-orange-500 to-orange-600',
        progress: 'bg-orange-500',
        hover: 'hover:border-orange-400/40 hover:shadow-orange-500/10',
      },
      teal: {
        border: 'border-teal-500/20',
        bg: 'from-teal-500/5 to-teal-600/10',
        text: 'text-teal-400',
        icon: 'from-teal-500 to-teal-600',
        progress: 'bg-teal-500',
        hover: 'hover:border-teal-400/40 hover:shadow-teal-500/10',
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-300">
            Skills & Technologies
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-slate-400"></div>
          <p className="font-grotesk text-md mx-auto max-w-2xl text-slate-400">
            A showcase of my technical expertise across software development,
            IoT, and system design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${colors.hover} hover:shadow-xl`}
              >
                <div className="mb-6 flex items-center">
                  <div
                    className={`mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.icon} transition-transform duration-300 group-hover:rotate-6`}
                  >
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <h3 className={`text-lg font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-neutral-700">
                        <div
                          className={`${colors.progress} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Programming Languages */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-300">
            Programming Languages
          </h3>

          <div className="relative mx-auto max-w-4xl">
            <ScrollVelocity velocity={50} className="custom-scroll-text">
              <div className="flex flex-nowrap gap-4 pr-4">
                {languages.map((skill, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm whitespace-nowrap text-slate-300 transition-all duration-300 hover:border-slate-600 hover:bg-slate-700/50"
                  >
                    {skill.icon}
                    {skill.label}
                  </span>
                ))}
              </div>
            </ScrollVelocity>
            <br />
            <ScrollVelocity velocity={-50} className="custom-scroll-text">
              <div className="flex flex-nowrap gap-4 pr-4">
                {languages.map((skill, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm whitespace-nowrap text-slate-300 transition-all duration-300 hover:border-slate-600 hover:bg-slate-700/50"
                  >
                    {skill.icon}
                    {skill.label}
                  </span>
                ))}
              </div>
            </ScrollVelocity>
            <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#030412] to-transparent"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#030412] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
