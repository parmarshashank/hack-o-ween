export default function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-glitch">
      {children}
    </h2>
  );
}
