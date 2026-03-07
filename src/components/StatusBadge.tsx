import { useEffect, useState } from "react";

const StatusBadge = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [time, setTime] = useState("");

    useEffect(() => {
        // 1. Simple Clock Logic
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
            }));
        };

        updateClock();
        const clockInterval = setInterval(updateClock, 1000);

        // 2. Simple Scroll Logic (Hide when near footer)
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.documentElement.scrollHeight - 100;

            // If we are within 100px of the bottom, hide the badge
            if (scrollPosition > threshold) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            clearInterval(clockInterval);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center bg-background border border-zinc-800 p-[1px] transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
        >
            <div className="flex items-center gap-3 px-3 py-1.5">
                {/* Pinging Status Indicator */}
                <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white">
                    System Active
                </span>

                <div className="w-[1px] h-3 bg-zinc-800" />

                <span className="text-[9px] text-zinc-500 tabular-nums">
                    {time} GMT
                </span>
            </div>
        </div>
    );
};

export default StatusBadge;