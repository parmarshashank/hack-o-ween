import { useState, useRef } from 'react';
import SectionTitle from './SectionTitle';

const faqs = [
  {
    question: "What is Hack-O-Ween?",
    answer: "Hack-O-Ween is a 48-hour virtual hackathon with a spooky twist! It's a chance for developers, designers, and creative minds to build innovative projects while embracing the Halloween spirit."
  },
  {
    question: "Do I need a team?",
    answer: "Teams can have up to 4 members. Don't have a team? No worries! We'll have team formation activities where you can meet other participants and form your coding coven."
  },
  {
    question: "What can I build?",
    answer: "Anything that aligns with our theme of 'Digital Nightmares & Tech Terrors'. This could be horror games, spooky AI applications, haunted websites, or any tech project with a Halloween twist!"
  },
  {
    question: "What's the tech stack?",
    answer: "You're free to use any programming languages, frameworks, or tools. The only limit is your imagination (and the rules of the mortal realm)."
  },
  {
    question: "Is it free?",
    answer: "Yes! Hack-O-Ween is completely free to attend. All you need is a computer, internet connection, and a brave soul ready to code."
  },
  {
    question: "How will projects be judged?",
    answer: "Projects will be evaluated based on creativity, technical complexity, presentation, and theme alignment. Our panel of tech necromancers will review all submissions."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle className="animate-glitch" data-text="Frequently Asked Questions">Frequently Asked Questions</SectionTitle>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-dark/50 rounded-lg border border-blood/30 hover:border-blood transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blood-light group-hover:animate-glitch" data-text={faq.question}>
                    {faq.question}
                  </h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                <div 
                  ref={el => answerRefs.current[index] = el}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? answerRefs.current[index]?.scrollHeight + 'px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                    transform: `translateY(${openIndex === index ? '0' : '-10px'})`,
                    marginTop: openIndex === index ? '1rem' : '0'
                  }}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
