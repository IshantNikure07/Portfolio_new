import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Mail, Send } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="pt-24 pb-12 bg-[#030303] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link to="/" className="text-3xl font-black tracking-tighter inline-block">
                            ISHANT<span className="text-[#ef4444]">NIKURE</span>
                        </Link>
                        <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                            Specializing in full-stack development with the MERN ecosystem.
                            Committed to delivering high-performance, accessible, and user-centric digital products.
                        </p>
                        <div className="flex gap-5">
                            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-zinc-400 hover:text-[#ef4444] hover:border-[#ef4444]/30 transition-all duration-300 group"
                                >
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3 grid grid-cols-2 gap-8 lg:block lg:space-y-8">
                        <div>
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Explore</h4>
                            <ul className="space-y-4">
                                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-zinc-500 hover:text-white transition-colors text-base font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Quick Connect</h4>
                        <div className="space-y-4">
                            <a href="mailto:hello@ishant.dev" className="flex items-center gap-4 glass p-4 rounded-2xl group hover:border-[#ef4444]/30 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 flex items-center justify-center text-[#ef4444]">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Email Me</p>
                                    <p className="text-white font-medium">hello@ishant.dev</p>
                                </div>
                            </a>
                            <button className="w-full glow-btn flex items-center justify-center gap-2 group py-4">
                                Let's Start a Project
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-zinc-600 text-sm">
                        <p>© {new Date().getFullYear()} Ishant Nikure. Built with React & Vite.</p>
                        <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-3 text-zinc-500 hover:text-white transition-all duration-300 text-sm font-semibold group"
                    >
                        <span className="w-8 h-[1px] bg-zinc-800 lg:w-12 transition-all group-hover:bg-[#ef4444] group-hover:w-16"></span>
                        BACK TO TOP
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
