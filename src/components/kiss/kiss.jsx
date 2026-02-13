const Kiss = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center 
         from-primary via-secondary to-pink-400 
        text-accent px-6 text-center relative overflow-hidden">

            <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-wrap items-center justify-center gap-12">
                <span className="text-7xl animate-pulse">💋</span>
                <span className="text-6xl animate-pulse">💗</span>
                <span className="text-7xl animate-pulse">💋</span>
                <span className="text-6xl animate-pulse">💗</span>
            </div>

            <h3 className="relative twinkle text-3xl md:text-4xl font-bold text-red-700 mb-8">
                Happy Kiss Day Puchchuuu 💗
            </h3>

            <p className="relative twinkle max-w-2xl text-lg md:text-xl leading-relaxed mb-6">
                I can’t describe what your kiss means to me —
                the joy, the excitement, the thrill.
                It’s unparalleled.
            </p>

            <p className="relative twinkle max-w-2xl text-lg md:text-xl leading-relaxed mb-6">
                You, my love, make my world go fast
                and my heartbeat slow.
            </p>

            <p className="relative twinkle max-w-2xl text-lg md:text-xl leading-relaxed">
                You are the one I’d choose,
                over and over again.
            </p>

        </div>
    );
};

export default Kiss;
