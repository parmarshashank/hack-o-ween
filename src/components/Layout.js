import { useState, useEffect } from 'react';
import SpookyHands from './SpookyHands';

export default function Layout({ children }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark">
      <SpookyHands />
      <div 
        className="pointer-events-none fixed w-8 h-8 rounded-full bg-blood/20 blur-xl transition-all duration-100"
        style={{ 
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          boxShadow: '0 0 20px 10px rgba(178, 34, 34, 0.2)'
        }}
      />
      <div className="fog-overlay fixed inset-0 pointer-events-none" />
      {children}
    </div>
  );
}
