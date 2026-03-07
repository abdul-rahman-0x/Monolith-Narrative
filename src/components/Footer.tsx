import React, { useState } from "react";

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "abdulrahman161004@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const links = {
        index: [
            { label: "Home", href: "#" },
            { label: "Works", href: "#work" },
            { label: "About", href: "#about" },
        ],
        social: [
            { label: "Instagram", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
        ],
        expertise: ["Visual Identity", "Product Design", "Motion Systems"]
    };

    return (
        <footer id="contact" className="px-6 md:px-16 pt-32 pb-12 bg-background border-t border-zinc-900">
            <div className="max-w-[1800px] mx-auto">

                {/* TOP LABEL */}
                <div className="flex justify-between items-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                        02 / Connect
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                        Available for Projects 2024
                    </span>
                </div>

                {/* MASSIVE CALL TO ACTION */}
                <div className="mb-24">
                    <h2 className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[0.8] uppercase select-none italic text-zinc-800/20">
                        Get In Touch
                    </h2>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-zinc-900">

                    {/* EMAIL SECTION (6 Cols) */}
                    <div className="lg:col-span-6">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-6">
                            Start a Conversation
                        </span>
                        <button
                            onClick={handleCopyEmail}
                            className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight hover:text-zinc-500 transition-colors duration-500 text-left"
                        >
                            {email}
                        </button>
                        <p className="mt-4 text-[10px] uppercase tracking-widest text-zinc-700">
                            {copied ? "✓ Copied to Clipboard" : "Click to copy email"}
                        </p>
                    </div>

                    {/* LINKS GRID (6 Cols) */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-6">Index</span>
                            <ul className="space-y-3">
                                {links.index.map(link => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-6">Social</span>
                            <ul className="space-y-3">
                                {links.social.map(link => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-6">Expertise</span>
                            <ul className="space-y-3">
                                {links.expertise.map(item => (
                                    <li key={item} className="text-sm text-zinc-500">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SIGNATURE BAR */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-600">
                        <span>© 2024 Monolith</span>
                        <div className="h-px w-8 bg-zinc-900" />
                        <span>All Rights Reserved</span>
                    </div>

                    {/* PERSONAL BRANDING */}
                    <div className="flex items-center gap-4 group cursor-default">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600">Constructed by</span>
                        <span className="text-xl font-black tracking-tighter uppercase group-hover:underline group-hover:underline-offset-4 group-hover:decoration-zinc-900 transition-all duration-300">
                            Abdul Rahman
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;