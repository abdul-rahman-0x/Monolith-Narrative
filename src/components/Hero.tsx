import React from "react";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-between px-6 md:px-16 py-12 bg-background">
            {/* MAIN TITLE SECTION */}
            <div className="flex-1 flex flex-col justify-center items-center w-full">

                {/* Simplified Header: Big, Bold, and Static */}
                <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none uppercase select-none">
                    Monolith
                </h1>

                {/* Simplified Narrative Label */}
                <div className="w-full max-w-6xl flex justify-end mt-4">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-zinc-800" />
                        <span className="text-2xl md:text-4xl italic font-light text-zinc-500">
                            Design Narrative
                        </span>
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="flex justify-between items-end w-full">
                {/* Left: Simple Description */}
                <p className="hidden md:block max-w-sm text-zinc-500 text-sm uppercase tracking-wider leading-relaxed">
                    Bridging structural brutalism <br />
                    and digital fluidity.
                </p>

                {/* Right: Static Scroll Indicator */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        Scroll
                    </span>
                    <div className="h-10 w-px bg-zinc-800" />
                </div>
            </div>
        </section>
    );
};

export default Hero;