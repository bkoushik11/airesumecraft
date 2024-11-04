import React from 'react';

export default function EngineerSvg() {
  return (
    <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 opacity-80 pointer-events-none">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        {/* Add the engineer SVG path data here */}
        <path
          d="M250 450c-82.8 0-150-67.2-150-150s67.2-150 150-150 150 67.2 150 150-67.2 150-150 150z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-300 dark:text-blue-600"
        />
        {/* Add more SVG paths for the engineer character */}
      </svg>
    </div>
  );
}