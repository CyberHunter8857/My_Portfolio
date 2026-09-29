import React from 'react';
import { MoveDown } from 'lucide-react';

function AboutMeButton() {
  return (
    <div className="flex justify-center lg:justify-start mt-8">
      <button className="group relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[2px] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none transition-all duration-300 hover:scale-105 sm:h-14 sm:w-44 lg:h-14 lg:w-48">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900 sm:px-8 sm:text-base lg:px-10">
          About Me <MoveDown className="w-4 h-4 ml-2" />
        </span>
      </button>
    </div>
  );
}

export default AboutMeButton;
