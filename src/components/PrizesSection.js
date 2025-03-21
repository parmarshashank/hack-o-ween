import SectionTitle from './SectionTitle';

const prizes = [
  {
    place: "1st Place",
    icon: "🏆",
    prize: "$3,000",
    color: "from-blood/80 to-blood-light/80",
    benefits: [
      "Cash Prize",
      "Premium Developer Licenses",
      "1-Year Cloud Credits",
      "Direct Mentorship Opportunities"
    ]
  },
  {
    place: "2nd Place",
    icon: "🥈",
    prize: "$2,000",
    color: "from-gray-600 to-gray-400",
    benefits: [
      "Cash Prize",
      "Developer Tools Bundle",
      "6-Month Cloud Credits",
      "Virtual Mentorship Session"
    ]
  },
  {
    place: "3rd Place",
    icon: "🥉",
    prize: "$1,000",
    color: "from-blood/40 to-blood/20",
    benefits: [
      "Cash Prize",
      "Developer Tools Starter Pack",
      "3-Month Cloud Credits",
      "Tech Conference Tickets"
    ]
  }
];

const categories = [
  "Most Innovative Use of AI",
  "Best Technical Achievement",
  "Best UI/UX Design",
  "Most Haunting Hack",
  "Community Choice Award"
];

export default function PrizesSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-glitch" data-text="Prizes & Judging">
          Prizes & Judging
        </h2>
        
        {/* Prize Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div 
              key={index}
              className="relative group perspective-1000"
            >
              <div className="relative transform transition-transform duration-500 group-hover:rotate-y-180">
                <div className="bg-dark/50 rounded-xl border border-blood/30 p-6 backdrop-blur-sm hover:border-blood transition-all duration-300">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${prize.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-2">{prize.icon}</div>
                    <h3 className="text-2xl font-bold text-blood-light mb-2">{prize.place}</h3>
                    <div className="text-3xl font-bold text-blood mb-4">{prize.prize}</div>
                    <ul className="space-y-2">
                      {prize.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="text-blood mr-2">✦</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Judging Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-blood animate-glitch" data-text="Special Categories">
            Special Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-dark/30 border border-blood/20 rounded-lg p-4 text-center hover:border-blood transition-all duration-300 group"
              >
                <span className="text-gray-300 group-hover:text-blood-light transition-colors duration-300">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="mt-16 bg-dark/50 rounded-xl border border-blood/30 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-blood animate-glitch" data-text="Judging Criteria">
            Judging Criteria
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="text-2xl mb-2 group-hover:animate-glitch">💡</div>
              <h4 className="text-blood-light font-bold mb-2">Innovation</h4>
              <p className="text-gray-300">Uniqueness and creativity of the solution</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl mb-2 group-hover:animate-glitch">⚡</div>
              <h4 className="text-blood-light font-bold mb-2">Technical</h4>
              <p className="text-gray-300">Complexity and technical implementation</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl mb-2 group-hover:animate-glitch">🎨</div>
              <h4 className="text-blood-light font-bold mb-2">Design</h4>
              <p className="text-gray-300">User experience and visual appeal</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl mb-2 group-hover:animate-glitch">🎯</div>
              <h4 className="text-blood-light font-bold mb-2">Impact</h4>
              <p className="text-gray-300">Potential impact and practicality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
