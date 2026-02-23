import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-20">
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h1>
                        <p className="text-zinc-400 text-lg mb-12">
                            Have a project in mind or just want to chat? I'm always open to discussing new
                            opportunities and creative ideas.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail />, label: "Email", value: "ishant@example.com" },
                                { icon: <Phone />, label: "Phone", value: "+91 00000 00000" },
                                { icon: <MapPin />, label: "Location", value: "Nagpur, Maharashtra" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-center">
                                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-[#ef4444]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-sm uppercase tracking-widest">{item.label}</p>
                                        <p className="text-xl font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass p-8 md:p-12 rounded-3xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] outline-none transition-all placeholder:text-zinc-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] outline-none transition-all placeholder:text-zinc-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Inquiry about project"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] outline-none transition-all placeholder:text-zinc-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] outline-none transition-all placeholder:text-zinc-600 resize-none"
                                ></textarea>
                            </div>
                            <button className="glow-btn w-full flex items-center justify-center gap-2 group">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
