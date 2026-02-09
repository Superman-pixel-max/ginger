import React from 'react';
import TedField from './tedfield';

function Teddy() {
    return (
        <div className="h-[91vh] absolute flex flex-col twinkle items-center justify-center bg-gradient-to-br from-primary via-secondary to-pink-400 relative overflow-hidden text-accent">
            <TedField/>
            <div className="animate-bounce text-9xl mb-8">
                🧸
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6  text-center">
                Happy Teddy Day Muffinnn 💗
            </h2>

            <p className="text-lg md:text-xl max-w-2xl text-center leading-relaxed px-6">
                Even though I’m absolutely jealous of your teddies
                because they get to be with you 24×7,
                I’ll still say Happy Teddy Day.
            </p>

            <p className="mt-6 text-md opacity-80 text-center px-6">
                But just remember… I’m the only teddy with lifetime cuddling rights.
            </p>

            <p className="mt-4 text-md opacity-80">
                    Pss… I absofreakinglutely love you.
                </p>

        </div>
    );
}

export default Teddy;
