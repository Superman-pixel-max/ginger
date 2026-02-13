import hg from "../../images/hg.jpeg";

const Hug = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-pink-400 text-accent px-6 text-center">

            <h3 className="twinkle text-3xl md:text-4xl font-bold mb-8">
                Happy Hug Day Love 🫂💗
            </h3>

            <img 
                src={hg} 
                alt="hug" 
                className="w-56 md:w-56 rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            />

        </div>
    );
};

export default Hug;
