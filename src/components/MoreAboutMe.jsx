import React from 'react';
import { Timeline } from '../components/timeline';

const data = [
  {
    title: '2022 - Present',
    content: (
      <div className="font-grotesk space-y-6">
        <div className="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-600/10 p-6 backdrop-blur-sm">
          <h4 className="mb-3 text-lg font-semibold text-blue-400 dark:text-blue-300">
            Bachelor's of Engineering (B.E.) - Final Year
          </h4>
          <p className="mb-4 leading-relaxed font-normal text-slate-700 dark:text-slate-300">
            Currently pursuing Final Year Bachelor's of Engineering at Sinhgad
            Institute of Technology and Science Narhe under SPPU. Focusing on
            advanced engineering concepts, project development, and
            industry-ready skills.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">🏛️</span>
              <span>Sinhgad Institute of Technology and Science, Narhe</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">📋</span>
              <span>Affiliated to SPPU (Savitribai Phule Pune University)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">🎯</span>
              <span>Final Year - Graduating 2025</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'March 2022',
    content: (
      <div className="font-grotesk space-y-6">
        <div className="rounded-lg border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 p-6 backdrop-blur-sm">
          <h4 className="mb-3 text-lg font-semibold text-emerald-400 dark:text-emerald-300">
            Higher Secondary Certificate (HSC) - Science
          </h4>
          <p className="mb-4 leading-relaxed font-normal text-slate-700 dark:text-slate-300">
            Completed Higher Secondary Certificate in Science stream with
            excellent performance of 84.83%. Built strong foundation in Physics,
            Chemistry, Mathematics, and Biology, preparing for engineering
            studies.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">📊</span>
              <span className="font-medium text-emerald-500">Grade: 84.83%</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">🔬</span>
              <span>Science Stream (PCM + Biology)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">📍</span>
              <span>
                Chhatrapati Sambhajiraje Uchhha Madhyamik Vidyalay, Akhegaon
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'March 2020',
    content: (
      <div className="font-grotesk space-y-6">
        <div className="rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-purple-600/10 p-6 backdrop-blur-sm">
          <h4 className="mb-3 text-lg font-semibold text-purple-400 dark:text-purple-300">
            Secondary School Certificate (SSC)
          </h4>
          <p className="mb-4 leading-relaxed font-normal text-slate-700 dark:text-slate-300">
            Completed Secondary School Certificate with outstanding results of
            93%. Demonstrated excellence in academics while actively
            participating in sports activities. This achievement laid the
            foundation for my academic journey.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">🏆</span>
              <span className="font-medium text-purple-500">
                Grade: 93% (Excellent Performance)
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">🏠</span>
              <span>Residential Highschool and Jr College, Shevgaon</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">🪢</span>
              <span>
                Rope Skipping Nationalist (Odisha) - Sports Excellence
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-lg">⭐</span>
              <span>
                Strong foundation in academics and extracurricular activities
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const MoreAboutMe = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 py-12">
        {/* Big wide card */}
        <div className="col-span-4 mx-4 rounded-xl border border-white/30 p-4">
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
};

export default MoreAboutMe;
