import Balloon from "./balloon";

const BalloonField = () => {
  const balloons = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {balloons.map((_, i) => (
        <Balloon
          key={i}
          left={Math.random() * 100}
          delay={Math.random() * 5}
          duration={5 + Math.random() * 5}
        />
      ))}
    </div>
  );
};

export default BalloonField;
