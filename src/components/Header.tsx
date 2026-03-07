import React from "react";

const navItems = [
    { label: "Home", href: "#" },
    { label: "Works", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-8 bg-background/80 backdrop-blur-sm">
            <nav className="flex items-center justify-between w-full max-w-[1800px] mx-auto">

                {/* LEFT: BRANDING */}
                <div className="flex items-center">
                    <a href="#" className="text-sm font-black tracking-tighter uppercase select-none">
                        Monolith©
                    </a>
                </div>

                {/* CENTER: NAVIGATION LINKS */}
                <ul className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* RIGHT: CONNECT BUTTON ONLY */}
                <div className="flex items-center">
                    <a
                        href="#contact"
                        className="text-[10px] uppercase tracking-widest border border-zinc-800 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Connect
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;