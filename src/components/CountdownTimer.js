import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--'
  });

  useEffect(() => {
    function calculateTimeLeft() {
      const targetDate = new Date('2025-10-31T23:59:59');
      const now = new Date();
      const difference = targetDate - now;

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-8">
      <div className="text-center">
        <span className="text-4xl font-bold text-neon">{timeLeft.days}</span>
        <span className="block text-sm text-blood">Days</span>
      </div>
      <div className="text-center">
        <span className="text-4xl font-bold text-neon">{timeLeft.hours}</span>
        <span className="block text-sm text-blood">Hours</span>
      </div>
      <div className="text-center">
        <span className="text-4xl font-bold text-neon">{timeLeft.minutes}</span>
        <span className="block text-sm text-blood">Minutes</span>
      </div>
      <div className="text-center">
        <span className="text-4xl font-bold text-neon">{timeLeft.seconds}</span>
        <span className="block text-sm text-blood">Seconds</span>
      </div>
    </div>
  );
}
