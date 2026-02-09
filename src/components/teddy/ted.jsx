const Ted = ({ left, delay, duration, rot }) => {
    return (

        <p
            className="absolute text-5xl animate-floatDown opacity-0"
            style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                // transform: `rotate(${rot}deg)`,
            }}
        >🧸</p>


    );
};

export default Ted;