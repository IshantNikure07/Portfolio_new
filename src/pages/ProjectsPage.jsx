import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsPage = () => {
    const projects = [
        {
            title: "Lumina AI Dashboard",
            description: "Advanced data visualization platform powered by machine learning for real-time analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
            tags: ["React", "Python", "D3.js"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Vortex E-commerce",
            description: "A high-performance luxury watch retailer with immersive 3D product previews.",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
            tags: ["Next.js", "Three.js", "Stripe"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Nexus Social",
            description: "Privacy-focused social networking platform with end-to-end encrypted messaging.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
            tags: ["React native", "WebRTC", "Firebase"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Crystal Weather",
            description: "Hyper-local weather forecasting application with stunning glassmorphism UI.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000&auto=format&fit=crop",
            tags: ["React", "Weather API", "GSAP"],
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <section className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h1>
                    <p className="text-zinc-400">A selection of my recent works and personal experiments that showcase my skills and passion for development.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass rounded-3xl overflow-hidden"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.links.github} className="p-3 glass rounded-full hover:bg-white hover:text-black transition-all">
                                        <Github size={24} />
                                    </a>
                                    <a href={project.links.demo} className="p-3 glass rounded-full hover:bg-white hover:text-black transition-all">
                                        <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-[10px] uppercase tracking-widest text-[#ef4444] border border-[#ef4444]/30 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ef4444] transition-colors">{project.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
