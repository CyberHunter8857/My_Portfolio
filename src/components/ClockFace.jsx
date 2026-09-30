import React from 'react';

const CLOCK_SIZE = 300;
const CENTER = CLOCK_SIZE / 2;

const toRad = (deg) => (deg * Math.PI) / 180;

const ClockFace = ({ hourAngle, minuteAngle }) => {
  // Clock hand lengths from center
  const hourHandLen = 55;
  const minuteHandLen = 75;

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${CLOCK_SIZE} ${CLOCK_SIZE}`}
      aria-hidden="true"
    >
      {/* Hour hand */}
      <line
        x1={CENTER}
        y1={CENTER}
        x2={CENTER + hourHandLen * Math.sin(toRad(hourAngle))}
        y2={CENTER - hourHandLen * Math.cos(toRad(hourAngle))}
        stroke="#A855F7"
        strokeWidth="4"
        strokeLinecap="round"
        className="drop-shadow-lg"
        style={{ transition: 'all 0.3s ease-out' }}
      />

      {/* Minute hand */}
      <line
        x1={CENTER}
        y1={CENTER}
        x2={CENTER + minuteHandLen * Math.sin(toRad(minuteAngle))}
        y2={CENTER - minuteHandLen * Math.cos(toRad(minuteAngle))}
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        className="drop-shadow-lg"
        style={{ transition: 'all 0.3s ease-out' }}
      />

      {/* Center dot */}
      <circle cx={CENTER} cy={CENTER} r="5" fill="#A855F7" />
      <circle cx={CENTER} cy={CENTER} r="2" fill="#1E293B" />
    </svg>
  );
};

export default React.memo(ClockFace);
