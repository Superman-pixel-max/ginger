import React from 'react';

function Chocolate() {
    return (
        <div className="min-h-screen twinkle text-accent flex items-center justify-center bg-gradient-to-br from-secondary via-pink-500 to-primary text-white relative">

            <div className="absolute top-[-400px] inset-0 pointer-events-none animate-pulse opacity-100 text-6xl flex flex-wrap items-center justify-center gap-10">
                🍫 🍩 🍪 🍫 🍰 🍫
            </div>

            <div className="relative top-4 text-accent bg-brown/2 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-xl text-center border border-white/20">
                
                <h1 className="text-background text-4xl md:text-5xl font-bold mb-4">
                    Happy Chocolate Day BooBoo 🍫
                </h1>

                <p className="text-lg md:text-xl leading-relaxed">
                    You're my 5 star, soft and sweet. I promise you unlimited supply of chocolates, ice creams and cookies for the rest of our lives. 
                </p>

                <p className="mt-6 text-md opacity-80">
                    Maybe make me your Dark chocolate slightly bitter without you but perfectly balanced with you around.
                </p>

            </div>
        </div>
    );
}

export default Chocolate;
