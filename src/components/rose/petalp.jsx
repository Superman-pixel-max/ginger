import pink from "../../images/pinkpet.png";
import red from "../../images/redpet.png";

const Petal = ({ left, delay, duration, rot }) => {
    return (

        <img
            src={pink}
            alt="petal"
            className="absolute w-16 animate-floatDown opacity-0"
            style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                // transform: `rotate(${rot}deg)`,
            }}
        />

    );
};

export default Petal;