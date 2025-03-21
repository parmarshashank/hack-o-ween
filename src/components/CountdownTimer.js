import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
  const targetDate = new Date('2025-05-10T00:00:00+05:30');
  const now = new Date();
  const difference = targetDate - now;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div 
          key={unit}
          className="group relative w-20 md:w-24 p-3 bg-dark/50 rounded-lg border border-blood/30 
                     backdrop-blur-sm hover:border-blood transition-all duration-300"
        >
          <div className="text-2xl md:text-3xl font-bold text-blood-light group-hover:animate-glitch"
               data-text={value}>
            {value}
          </div>
          <div className="text-sm text-gray-400 capitalize">
            {unit}
          </div>
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blood/0 
                         group-hover:border-blood/30 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blood/0 
                         group-hover:border-blood/30 transition-all duration-300" />
        </div>
      ))}
    </div>
  );
}
