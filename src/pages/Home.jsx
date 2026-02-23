import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Robot from '../components/Robot';
import MagicBento from '../components/MagicBento';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#ef4444] font-semibold tracking-wider uppercase text-sm mb-4 block"
                        >
                            MERN Stack Developer
                        </motion.span>
                        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 tracking-tighter">
                            Hi, I'm <span className="text-gradient">Ishant Nikure</span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                            Crafting scalable, responsive, and user-centric web applications.
                            Specializing in the MERN stack to transform complex ideas
                            into seamless digital realities.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/projects" className="glow-btn flex items-center gap-2 group">
                                Explore Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-4 ml-2">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-[#ef4444] transition-colors"><Github size={20} /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-[#ef4444] transition-colors"><Linkedin size={20} /></a>
                                <a href="#" className="p-3 glass rounded-full hover:text-[#ef4444] transition-colors"><Download size={20} /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="relative h-[500px] md:h-[600px] w-full"
                    >
                        <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                            <Robot />
                        </div>
                        {/* Red Glow Decorations */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ef4444] rounded-full blur-[140px] opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-600 rounded-full blur-[140px] opacity-10"></div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <MagicBento
                            className="md:col-span-2 min-h-[300px]"
                            textAutoHide={true}
                            enableStars
                            enableSpotlight
                            enableBorderGlow={true}
                            enableTilt={false}
                            enableMagnetism={false}
                            clickEffect
                            spotlightRadius={400}
                            particleCount={12}
                            glowColor="239, 68, 68"
                            disableAnimations={false}
                        >
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold">Innovation First</h3>
                                <p className="text-zinc-400 max-w-md">Pushing boundaries with cutting-edge technologies to deliver high-performance solutions.</p>
                            </div>
                        </MagicBento>

                        <MagicBento
                            className="min-h-[300px]"
                            enableBorderGlow={true}
                            glowColor="239, 68, 68"
                        >
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-[#ef4444]">Clean Code</h3>
                                <p className="text-zinc-400 text-sm">Following best practices and architectural patterns for maintainable software.</p>
                            </div>
                        </MagicBento>

                        <MagicBento
                            className="min-h-[300px]"
                            enableBorderGlow={true}
                            glowColor="239, 68, 68"
                        >
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Rapid Scaling</h3>
                                <p className="text-zinc-400 text-sm">Building systems that grow with your business needs effortlessly.</p>
                            </div>
                        </MagicBento>

                        <MagicBento
                            className="md:col-span-2 min-h-[300px]"
                            enableStars
                            glowColor="239, 68, 68"
                        >
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold italic">2026 Vision</h3>
                                <p className="text-zinc-400">Leading the next generation of web experience with AI-enhanced development.</p>
                            </div>
                        </MagicBento>
                    </div>
                </div>
            </section>

            {/* Quick Stats Section */}
            <section className="bg-zinc-950 py-24 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "Experience", value: "2+ Yrs" },
                            { label: "Projects Developed", value: "15+" },
                            { label: "Tech Stack", value: "MERN" },
                            { label: "Location", value: "Nagpur" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h3 className="text-4xl md:text-5xl font-black text-[#ef4444] mb-3">{stat.value}</h3>
                                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
