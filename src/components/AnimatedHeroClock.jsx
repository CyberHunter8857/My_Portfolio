import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useCurrentTime } from '../hooks/useCurrentTime';
import { getClockAngles, getCurrentDayCycle } from '../lib/clockUtils';
import { timeBasedContent } from '../lib/DayCycle';
import ClockFace from './ClockFace';
import DayCycleGif from './DayCycleGif';
import MoodIndicator from './MoodIndicator';

const AnimatedHeroClock = ({
  sizeClass = 'h-60 w-60 sm:h-94 sm:w-94 lg:h-108 lg:w-108',
  className = '',
}) => {
  const currentTime = useCurrentTime();
  const [showGif, setShowGif] = useState(false);

  // Toggle between profile pic and GIF every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowGif((prev) => !prev);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const { hourAngle, minuteAngle } = useMemo(
    () => getClockAngles(currentTime),
    [currentTime]
  );

  // Get the cycle that matches the current time
  const displayCycle = useMemo(
    () => getCurrentDayCycle(timeBasedContent, currentTime),
    [currentTime]
  );

  return (
    <div className={`inline-block ${className}`}>
      <div className="group relative inline-block">
        {/* Outer glow effect */}
        <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-sm transition duration-1000 group-hover:opacity-100 group-hover:duration-200 sm:-inset-1 sm:blur-md" />

        {/* Main clock container */}
        <div className="relative rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5 sm:p-1">
          <div className="rounded-full bg-gray-900/90 p-1.5 backdrop-blur-sm sm:p-2 md:p-3">
            <div
              className={`relative overflow-hidden rounded-full ${sizeClass}`}
            >
              {/* Clock face (tick marks + hands) */}
              <ClockFace hourAngle={hourAngle} minuteAngle={minuteAngle} />

              {/* Inner circle with GIF or Profile Pic - no inset, fully filled */}
              <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-slate-700/60 bg-slate-900">
                <AnimatePresence mode="wait">
                  {showGif ? (
                    <DayCycleGif
                      key="gif"
                      gifUrl={displayCycle.gifUrl}
                      title={displayCycle.title}
                      description={displayCycle.description}
                      mood={displayCycle.mood}
                      currentTime={currentTime}
                    />
                  ) : (
                    <motion.img
                      key="profile"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      src="assets/profile/profilepic.jpg"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mood indicator badge below the clock - REMOVED */}
        {/* {showGif && (
          <AnimatePresence mode="wait">
            <MoodIndicator mood={displayCycle.mood} />
          </AnimatePresence>
        )} */}

        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75 sm:-top-2 sm:-right-2 sm:h-3 sm:w-3" />
        <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 animate-ping rounded-full bg-purple-400 opacity-75 delay-300 sm:-bottom-2 sm:-left-2 sm:h-2 sm:w-2" />
      </div>
    </div>
  );
};

export default AnimatedHeroClock;
