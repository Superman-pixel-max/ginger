import Ted from "./ted";

const TedField = () => {
  const petals = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {petals.map((_, i) => (
        <Ted
          key={i}
          left={Math.random() * 100}
          delay={Math.random() * 5}
          duration={5 + Math.random() * 5}
          rot={Math.random() * 360}
        />
      ))}
    </div>
  );
};

export default TedField;