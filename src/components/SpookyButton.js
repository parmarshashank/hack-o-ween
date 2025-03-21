import React from 'react';

const SpookyButton = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`hanging-button px-6 py-3 bg-blood text-white rounded-lg shadow-lg hover:bg-blood/90 ${className}`}
    >
      {children}
    </button>
  );
};

export default SpookyButton;
