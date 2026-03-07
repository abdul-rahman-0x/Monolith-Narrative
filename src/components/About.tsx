import React from "react";

const About = () => {
    return (
        <section id="about" className="px-6 md:px-16 py-32 md:py-48 bg-background border-t border-zinc-900">
            <div className="max-w-[1800px] mx-auto">

                {/* TOP LABEL */}
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 block mb-12">
                    01 / Identity & Purpose
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* LEFT: MAIN STATEMENT */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] uppercase">
                            Creating Digital <br />
                            <span className="text-zinc-500 italic font-light">Architecture</span> <br />
                            For Modern Brands.
                        </h2>
                    </div>

                    {/* RIGHT: DETAILED NARRATIVE */}
                    <div className="lg:col-span-5 flex flex-col justify-end">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest mb-4 font-bold">The Purpose</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                    Monolith was built to bridge the gap between structural brutalism and digital fluidity.
                                    We believe that a website should be more than a tool—it should be a high-fidelity
                                    experience that communicates authority and precision.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest mb-4 font-bold">Why it matters</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    In a world of cluttered interfaces, we focus on clarity. By using calculated
                                    typography and minimalist layouts, we help your project stand out by being
                                    boldly simple. This approach ensures your narrative is never lost in the noise.
                                </p>
                            </div>

                            {/* CLEAN SERVICE LIST (No Animations) */}
                            <div className="pt-8 border-t border-zinc-900">
                                <div className="grid grid-cols-2 gap-4">
                                    <ul className="text-[10px] uppercase tracking-widest text-zinc-600 space-y-2">
                                        <li>• Visual Identity</li>
                                        <li>• Motion Systems</li>
                                    </ul>
                                    <ul className="text-[10px] uppercase tracking-widest text-zinc-600 space-y-2">
                                        <li>• Digital Strategy</li>
                                        <li>• Creative Direction</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;