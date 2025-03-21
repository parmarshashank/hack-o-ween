import React, { useEffect } from 'react';

const SpookyHands = () => {
  useEffect(() => {
    const createHand = () => {
      const hand = document.createElement('div');
      hand.className = 'absolute w-16 h-16 bg-contain bg-no-repeat opacity-0 cursor-pointer';
      hand.style.backgroundImage = "url('/images/hand-silhouette.png')";
      
      // Random position and size
      hand.style.left = `${Math.random() * 100}vw`;
      hand.style.top = `${Math.random() * 100}vh`;
      const scale = 0.8 + Math.random() * 0.8; // Random size between 0.8x and 1.6x
      
      // Add to DOM
      document.body.appendChild(hand);
      
      // Animate in
      hand.style.transition = 'opacity 1s, transform 1s';
      setTimeout(() => {
        hand.style.opacity = '0.7';
        hand.style.transform = `scale(${scale})`;
      }, 100);
      
      // Remove after animation
      setTimeout(() => {
        hand.style.opacity = '0';
        setTimeout(() => hand.remove(), 1000);
      }, 2000);
    };

    const createHandBurst = () => {
      // Create 3-6 hands at once
      const numHands = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < numHands; i++) {
        setTimeout(() => createHand(), i * 200); // Stagger the creation
      }
    };

    // Create hand bursts periodically
    const interval = setInterval(createHandBurst, 4000);
    
    // Initial burst
    createHandBurst();
    
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default SpookyHands;
