import SectionTitle from './SectionTitle';

export default function AboutSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-glitch" data-text="About The Haunted Hackathon">
          About The Haunted Hackathon
        </h2>
        <div className="relative bg-gradient-to-br from-dark-red via-dark to-dark-red p-8 rounded-lg border-2 border-blood shadow-[0_0_15px_rgba(178,34,34,0.3)] backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/parchment-texture.svg')] opacity-5"></div>
          <div className="relative z-10 space-y-6 text-lg">
            <p className="text-gray-300">
              Welcome to Hack-O-Ween, where coding meets the supernatural! Join us for a 24-hour hackathon that will push your creativity beyond the mortal realm.
            </p>
            <p className="text-gray-300">
              <span className="text-blood-light">🎃 When:</span> May 10-11, 2025<br />
              <span className="text-blood-light">👻 Where:</span> GL Bajaj Institute of Technology and Management<br />
              <span className="text-blood-light">💀 Who:</span> Open to all developers, designers, and creative minds
            </p>
            <p className="text-gray-300">
              This year's theme: <span className="text-blood-light font-semibold group-hover:animate-glitch" data-text="Digital Nightmares & Tech Terrors">Digital Nightmares & Tech Terrors</span>
            </p>
            <div className="mt-8 p-4 bg-gradient-to-br from-dark via-dark-red to-dark rounded border border-blood/50 group">
              <h3 className="text-xl font-bold mb-4 text-blood animate-glitch" data-text="Why Join?">Why Join?</h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <span className="text-blood-light mr-2 group-hover:animate-glitch">☠️</span>
                  Network with fellow tech enthusiasts
                </li>
                <li className="flex items-center">
                  <span className="text-blood-light mr-2 group-hover:animate-glitch">🧟</span>
                  Win spooktacular prizes
                </li>
                <li className="flex items-center">
                  <span className="text-blood-light mr-2 group-hover:animate-glitch">🦇</span>
                  Learn from industry experts
                </li>
                <li className="flex items-center">
                  <span className="text-blood-light mr-2 group-hover:animate-glitch">🎃</span>
                  Build something terrifyingly awesome
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
