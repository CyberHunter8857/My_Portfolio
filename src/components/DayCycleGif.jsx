import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DayCycleGif = ({ gifUrl, title, description, mood, currentTime }) => {
  const [hasError, setHasError] = useState(false);

  // Format time as HH:MM AM/PM
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={gifUrl}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {!hasError ? (
            <img
              src={gifUrl}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              <span className="text-sm text-slate-400">{title}</span>
            </div>
          )}

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Current Time, Description & Mood */}
          <div className="absolute bottom-3 left-0 right-0 px-4 text-center sm:bottom-5">
            {/* Current Time Display */}
            <p className="mb-1 text-sm font-bold text-purple-300 sm:text-base">
              {formatTime(currentTime)}
            </p>

            <p className="mb-1 text-xs font-medium text-slate-200 sm:text-sm">
              {description}
            </p>
            <span className="inline-block rounded-full border border-purple-400/30 bg-purple-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-purple-200 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
              {mood}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default React.memo(DayCycleGif);
