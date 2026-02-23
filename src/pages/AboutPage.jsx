import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Palette, Terminal, Briefcase, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
    const skills = [
        { name: 'Frontend', icon: <Globe size={24} />, technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)'] },
        { name: 'Backend', icon: <Database size={24} />, technologies: ['Node.js', 'Express.js', 'REST APIs', 'Cloud Technologies'] },
        { name: 'Database', icon: <Terminal size={24} />, technologies: ['MongoDB', 'SQL', 'Data Modeling'] },
        { name: 'Tools & Design', icon: <Palette size={24} />, technologies: ['Git', 'GitHub', 'Vite', 'Clean Architecture'] },
    ];

    const experience = [
        {
            company: "Cluematrix Technologies",
            role: "MERN Stack Developer",
            period: "Dec 2025 – Present",
            description: "Working on full-stack development, building end-to-end web applications, designing RESTful APIs, and implementing scalable backend architectures."
        },
        {
            company: "Phanom Professionals",
            role: "React.js Developer",
            period: "June 2025 – Present",
            description: "Migrated projects from CRA to Vite, developed responsive web applications, integrated REST APIs, and optimized UI performance using component-based architecture."
        },
        {
            company: "Talentrise Technokrate",
            role: "React.js Developer",
            period: "Oct 2024 – April 2025",
            description: "Contributed to responsive application development and performance-focused API integrations."
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <section className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        I'm <span className="text-gradient">Ishant Nikure</span>, a MERN Stack Developer.
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                        Passionate and growth-driven developer based in Nagpur, Maharashtra.
                        I specialize in building scalable, responsive, and user-centric web applications
                        using the MERN stack. My focus is on writing clean code and implementing
                        innovative problem-solving approaches.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 mt-12">
                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            <Briefcase className="text-[#ef4444]" /> Experience
                        </h2>
                        <div className="space-y-8 border-l border-zinc-800 ml-3 pl-8">
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#ef4444] border-4 border-black"></div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-[#ef4444] text-sm font-medium flex items-center gap-1">
                                            <Calendar size={14} /> {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-zinc-300 font-medium mb-2">{exp.company}</p>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills & Bio */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                <MapPin className="text-[#ef4444]" /> Location
                            </h2>
                            <p className="text-zinc-400 leading-relaxed">
                                Currently operating from Nagpur, Maharashtra, contributing to impactful projects
                                worldwide through modern web technologies.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass p-6 rounded-2xl group hover:border-[#ef4444]/50 transition-colors"
                                >
                                    <div className="text-[#ef4444] mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.technologies.map((tech, j) => (
                                            <span key={j} className="text-[10px] text-zinc-400 bg-white/5 px-2 py-1 rounded uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
