import React from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

import project1 from "@/assets/img-1.png";
import project2 from "@/assets/img-2.png";
import project3 from "@/assets/img-3.png";
import project4 from "@/assets/img-4.png";
import project5 from "@/assets/img-5.png";
import project6 from "@/assets/img-6.png";

const projects: Project[] = [
    {
        title: "NOPAL",
        description: "Designing the future of sustainable agriculture",
        image: project1,
        tags: ["Architecture", "2024"],
    },
    {
        title: "TIERRA VIVA",
        description: "Breathing new life into an organic market",
        image: project2,
        tags: ["Branding", "2024"],
    },
    {
        title: "CASA NOMAD",
        description: "Weaving artisan stories into a global brand",
        image: project3,
        tags: ["Interior", "2023"],
    },
    {
        title: "ALBA",
        description: "Crafting a sanctuary of minimalism and nature",
        image: project4,
        tags: ["Digital", "2023"],
    },
    {
        title: "OBSIDIAN",
        description: "Creative direction for modern brands",
        image: project5,
        tags: ["Creative", "2023"],
    },
    {
        title: "SYNTIX",
        description: "Interface for next-gen SaaS platforms",
        image: project6,
        tags: ["Product", "2022"],
    },
];

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
        >
            {/* Image Container - Natural colors, no grayscale, no scale effect */}
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Project Info */}
            <div className="flex flex-col space-y-1">
                <h3 className="text-sm font-bold tracking-widest uppercase">
                    {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

const WorkGrid = () => {
    return (
        <section id="work" className="px-6 md:px-12 py-24 bg-background">
            <div className="max-w-[1400px] mx-auto">

                {/* Header Section */}
                <div className="flex justify-between items-end border-b border-zinc-900 pb-8 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
                        Selected Works
                    </h2>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                        See all works
                    </span>
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkGrid;