import Bg from "../../images/val_bg.png";
import song from "../../audio/yellow.mp3";
import { useState, useRef } from "react";

const Valentine = () => {
    const [open, setOpen] = useState(false);
    const audioRef = useRef(null);

    const handleOpen = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(song);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.4;
            audioRef.current.play().catch(() => {});
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="relative min-h-screen text-accent">
            <img
                src={Bg}
                alt="background"
                className="absolute inset-0 w-fit h-fit object-cover pointer-events-none"
            />

            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <h1 className="twinkle text-4xl md:text-7xl font-bold text-accent text-center
               drop-shadow-lg [text-shadow:0_4px_14px_rgba(255,105,180,1)]">
    Happy Valentine’s Day 💗
</h1>



            </div>

            <button
                onClick={handleOpen}
                className="fixed bottom-6 right-6 z-20 bg-pink-500/40 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg shadow-black/20 animate-pulse"
            >
                tap me
            </button>

            {open && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-pink-300/60 backdrop-blur-sm px-4">
                    <div className="bg-pink-100 text-black max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-6 relative">

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-sm opacity-60 hover:opacity-100"
                        >
                            ✕
                        </button>

                        <div className="twinkle space-y-4 text-left text-lg leading-relaxed">
                            <p>
                                I was nearly 24 years old when i met you and of those i remember 16 quite nicely and among them i didn't understand what love was till i had spent 16 yrs on earth, I thought it would be all pure and filmy, the girl would fall for me while i am winning or doing something heroic or daring, I thought life would be good always, only ups no downs.
                            </p>

                            <p>
                                Then school finished lockdown happened and i realised i was alone, i went to college and again i had friends but no one to listen to what my heart said or wanted. It needed attention, someone who would just listen to my heart and connect to it like their own.
                            </p>

                            <p>
                                But they say time flies, so did my time and i completed college and by that time i was content and now i thought ok, maybe i'm not meant to find anyone.
                            </p>

                            <p>
                                Life's strange, isn't it, only when i stopped looking I found someone, someone who i found so randomly, She at first looked like she wouldn't even entertain me for a second but with each text that i received from her, I felt more at ease and less anxious.
                            </p>

                            <p>
                                She looked beautiful when i first saw her, my brain constantly yelled "She's way out of your league" but my heart wanted to take the risk, it was willing to endure a heartbreak to give me the chance to be with her.
                            </p>

                            <p>
                                With each passing day i would fall more for her, it was as if she was push me to the depth of my heart, A boy whose creativity would end at 2 sentences could write a whole paragraph explaining his feelings for her.
                            </p>

                            <p>
                                I changed, just like that, in a span of a few weeks she just changed me, i remember at first i was afraid of promising anything to her, i wasn't sure how far i could go for her but i loved her enough to not make empty promises.
                            </p>

                            <p>
                                But soon that changed, at some point i realised how much she meant to me and thats when i knew i would go as far as the path took me and then take a few steps more and carve the path further ahead till she was in sight.
                            </p>

                            <p>
                                The boy who thought he understood love at 16 now realised that liking someone and actually loving someone is different and this time he was in love.
                            </p>

                            <p>
                                It took me 23 years 11 months and 12 days to meet that someone. And now i finally know what joy of being in love is, my heart is content yet it wants more, Brain constantly surrenders to my heart these days, all because of a certain someone.
                            </p>

                            <p className="font-semibold">
                                I feel like yelling it to the world that I LOVE SOMEONE, and that someone is you ...... Happy Valentine's Day my love.
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Valentine;
