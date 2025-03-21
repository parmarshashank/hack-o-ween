import React from 'react';
import SectionTitle from './SectionTitle';
import SpookyButton from './SpookyButton';

const collaborationTypes = [
  {
    title: "Become a Sponsor",
    description: "Join our coven of sponsors and help fuel the next generation of tech innovators. Your support will help create an unforgettable haunted hackathon experience.",
    cta: "Sponsor Us",
    link: "mailto:sponsor@hack-o-ween.com"
  },
  {
    title: "Community Partner",
    description: "Partner with us to expand our reach and build a stronger tech community. Let's create supernatural connections and empower more developers together.",
    cta: "Partner With Us",
    link: "mailto:partner@hack-o-ween.com"
  }
];

export default function CollaborateSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="animate-glitch" data-text="Join Our Coven">
          Join Our Coven
        </SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {collaborationTypes.map((collab, index) => (
            <div 
              key={index}
              className="relative group p-8 bg-dark/50 rounded-lg border border-blood/30 
                         backdrop-blur-sm transition-all duration-500 hover:border-blood"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blood/5 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-blood-light mb-4 group-hover:animate-glitch"
                    data-text={collab.title}>
                  {collab.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  {collab.description}
                </p>
                <a href={collab.link} className="inline-block">
                  <SpookyButton>
                    {collab.cta}
                  </SpookyButton>
                </a>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blood/0 
                            group-hover:border-blood/30 transition-all duration-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blood/0 
                            group-hover:border-blood/30 transition-all duration-500 rounded-bl-lg" />
            </div>
          ))}
        </div>

        {/* Event details banner */}
        <div className="mt-16 p-6 bg-blood/10 rounded-lg border border-blood/30 text-center">
          <p className="text-xl text-blood-light">
            <span className="font-bold">🕯️ 24-Hour Virtual Hackathon 🕯️</span>
            <br />
            <span className="text-gray-300">
              Join us online on May 10-11th, 2025 for a day of spooky coding!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
