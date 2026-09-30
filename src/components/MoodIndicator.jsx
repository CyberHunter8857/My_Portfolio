import React from 'react';
import { motion } from 'motion/react';

const moodColors = {
  energetic: 'from-orange-500 to-red-500',
  focused: 'from-blue-500 to-indigo-500',
  relaxed: 'from-green-500 to-teal-500',
  creative: 'from-purple-500 to-pink-500',
  energized: 'from-yellow-500 to-orange-500',
  chill: 'from-cyan-500 to-blue-500',
  content: 'from-emerald-500 to-green-500',
  curious: 'from-indigo-500 to-purple-500',
  excited: 'from-pink-500 to-rose-500',
  peaceful: 'from-slate-500 to-gray-500',
};

const MoodIndicator = ({ mood }) => {
  const gradient = moodColors[mood] || 'from-purple-500 to-blue-500';

  return (
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 sm:-bottom-10">
      <motion.div
        key={mood}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.3 }}
        className={`rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-xs font-semibold text-white shadow-lg sm:text-sm`}
      >
        {mood.charAt(0).toUpperCase() + mood.slice(1)}
      </motion.div>
    </div>
  );
};

export default React.memo(MoodIndicator);
