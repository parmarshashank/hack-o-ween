import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const tracks = [
  {
    name: "Open Innovation",
    description: "Unleash your creativity with no bounds! Build anything that sends shivers down the spine of innovation. From haunted social platforms to spine-chilling productivity tools.",
    icon: "🎯"
  },
  {
    name: "Web3",
    description: "Summon the power of blockchain and decentralization. Create dApps, smart contracts, or NFT experiences that bridge the gap between the mortal realm and the crypto universe.",
    icon: "🌐"
  },
  {
    name: "AI/ML",
    description: "Conjure intelligent systems that blur the line between human and machine. From spooky prediction models to AI-powered horror story generators.",
    icon: "🤖"
  }
];

export default function TracksSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="animate-glitch" data-text="Haunted Tracks">
          Haunted Tracks
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-dark/50 rounded-lg border border-blood/30 
                       transition-all duration-500 backdrop-blur-sm hover:transform 
                       hover:-translate-y-2 overflow-hidden ${hoveredIndex === index ? 'track-card-hover' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-blood/5 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-blood-light transition-transform duration-300
                              transform group-hover:scale-110">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold text-blood-light mb-3 group-hover:animate-glitch"
                    data-text={track.name}>
                  {track.name}
                </h3>
                <p className="text-gray-300 transition-all duration-300 
                            group-hover:text-white group-hover:translate-x-1">
                  {track.description}
                </p>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-blood/0 group-hover:border-blood/30 
                            transition-all duration-500 rounded-lg" 
                   style={{
                     clipPath: hoveredIndex === index ? 
                       'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 
                       'polygon(0 0, 0 0, 0 100%, 0 100%)'
                   }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
