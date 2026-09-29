import React from 'react';

const Technologies = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Web Development */}
        <div className="group relative rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:transform hover:cursor-pointer hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10">
          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 transition-transform duration-300 group-hover:rotate-6">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-blue-400 transition-colors group-hover:text-blue-300">
              Web Development
            </h3>
          </div>
          <p className="font-grotesk leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
            Creating responsive and user-friendly web applications with modern
            frameworks and clean UI design that delivers exceptional user
            experiences.
          </p>
        </div>

        {/* IoT Systems */}
        <div className="group relative rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:transform hover:cursor-pointer hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/10">
          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 transition-transform duration-300 group-hover:rotate-6">
              <span className="text-2xl">📡</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-400 transition-colors group-hover:text-emerald-300">
              IoT Systems
            </h3>
          </div>
          <p className="font-grotesk leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
            Exploring smart systems and connected devices to build innovative
            real-world solutions that seamlessly integrate into daily life.
          </p>
        </div>

        {/* Cybersecurity */}
        <div className="group relative rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-red-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:transform hover:cursor-pointer hover:border-red-400/40 hover:shadow-xl hover:shadow-red-500/10">
          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 transition-transform duration-300 group-hover:rotate-6">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-xl font-bold text-red-400 transition-colors group-hover:text-red-300">
              Cybersecurity
            </h3>
          </div>
          <p className="font-grotesk leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
            Interested in secure system design and ensuring applications are
            reliable, safe, and protected against modern security threats.
          </p>
        </div>

        {/* Cloud Technologies */}
        <div className="group relative rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-indigo-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:transform hover:cursor-pointer hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/10">
          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 transition-transform duration-300 group-hover:rotate-6">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-400 transition-colors group-hover:text-indigo-300">
              Cloud Technologies
            </h3>
          </div>
          <p className="font-grotesk leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
            Leveraging cloud platforms to deploy scalable applications and
            improve performance in real-world projects with modern DevOps
            practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
