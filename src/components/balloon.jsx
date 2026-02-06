import balloonImg from "../images/balloons.png";

const Balloon = ({ left, delay, duration }) => {
  return (
    <img
      src={balloonImg}
      alt="balloon"
      className="absolute w-16 animate-floatUp opacity-0"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

export default Balloon;
