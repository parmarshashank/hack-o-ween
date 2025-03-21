import CountdownTimer from '../components/CountdownTimer';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';
import ScheduleSection from '../components/ScheduleSection';
import PrizesSection from '../components/PrizesSection';
import FaqSection from '../components/FaqSection';
import SpookyButton from '../components/SpookyButton';
import TracksSection from '../components/TracksSection';
import CollaborateSection from '../components/CollaborateSection';

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-dark-red via-dark to-dark-red">
        {/* Hero Section */}
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/haunted-house.svg')] bg-cover bg-center opacity-30">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-red/50 to-dark/90"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center py-10">
              <span className="animate-glitch inline-block" data-text="Hack-O-Ween">Hack-O-Ween</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-blood-light">
                Code Beyond the Grave
              </span>
            </h1>
            <CountdownTimer />
            <a 
              href="https://devfolio.co"
              className="mt-12"
            >
              <SpookyButton className="px-8 py-4 transform hover:scale-105">
                Register Now
              </SpookyButton>
            </a>
          </div>
        </div>

        {/* Sponsor Section */}
        <section className="py-16 relative bg-gradient-to-b from-dark via-dark-red to-dark">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-blood animate-glitch" data-text="Our Haunted Sponsors">
              Our Haunted Sponsors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-[3/2] bg-dark/30 rounded-lg border border-blood/20 flex items-center justify-center group hover:border-blood transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="text-2xl text-gray-600 group-hover:text-blood-light transition-colors duration-300">
                    Sponsor {i}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Sections */}
        <div className="bg-gradient-to-b from-dark-red via-dark to-dark-red">
          <AboutSection />
          <ScheduleSection />
          <PrizesSection />
          <TracksSection />
          <CollaborateSection />
          <FaqSection />
        </div>


        {/* Footer */}
        <footer className="py-8 border-t border-blood/30 bg-dark-red">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400"> 2025 Hack-O-Ween. All rights reserved. Enter at your own risk! </p>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
