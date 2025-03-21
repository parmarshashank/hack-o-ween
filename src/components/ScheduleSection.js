import SectionTitle from './SectionTitle';

const scheduleItems = [
  {
    time: "Oct 30, 10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome to the haunted mansion! Meet your fellow hackers and learn about the challenges ahead.",
    room: "Grand Hall"
  },
  {
    time: "Oct 30, 11:00 AM",
    title: "Team Formation",
    description: "Find your coding coven and register your team.",
    room: "Witch's Den"
  },
  {
    time: "Oct 30, 12:00 PM",
    title: "Hacking Begins",
    description: "The clock strikes midnight (somewhere) and the coding frenzy begins!",
    room: "All Rooms"
  },
  {
    time: "Oct 30, 3:00 PM",
    title: "Workshop: API Dark Arts",
    description: "Learn to summon and control powerful APIs.",
    room: "Library"
  },
  {
    time: "Oct 31, 12:00 PM",
    title: "Final Submissions",
    description: "Present your creations to our panel of tech necromancers.",
    room: "Dungeon"
  },
  {
    time: "Oct 31, 3:00 PM",
    title: "Awards Ceremony",
    description: "The best projects will be raised from the dead!",
    room: "Grand Hall"
  }
];

export default function ScheduleSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-glitch" data-text="Schedule">
          Schedule
        </h2>
        <div className="relative">
          {scheduleItems.map((item, index) => (
            <div 
              key={index}
              className="mb-8 relative group"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blood rounded-full group-hover:animate-pulse">
                <div className="absolute inset-0 bg-blood rounded-full animate-ping opacity-25"></div>
              </div>
              <div className="ml-8 p-6 bg-dark/50 rounded-lg border border-blood/30 hover:border-blood transition-all duration-300 backdrop-blur-sm group-hover:translate-x-2">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-blood-light group-hover:animate-glitch" data-text={item.title}>
                    {item.title}
                  </h3>
                  <span className="text-blood text-sm md:text-base">
                    {item.time}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{item.description}</p>
                <div className="text-sm text-blood/80">
                  Location: {item.room}
                </div>
              </div>
            </div>
          ))}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blood via-blood/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
