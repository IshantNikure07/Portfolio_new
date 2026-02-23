import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const MagicBento = ({
    children,
    textAutoHide = true,
    enableStars = false,
    enableSpotlight = false,
    enableBorderGlow = true,
    enableTilt = false,
    enableMagnetism = false,
    clickEffect = false,
    spotlightRadius = 400,
    particleCount = 12,
    glowColor = "239, 68, 68", // Default to Red (RGB)
    disableAnimations = false,
    className = ""
}) => {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative group overflow-hidden rounded-3xl glass border-2 border-white/5 bg-black/20 ${className}`}
        >
            {/* Spotlight Effect */}
            {enableSpotlight && (
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                        background: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.15), transparent 80%)`
                    }}
                />
            )}

            {/* Border Glow */}
            {enableBorderGlow && (
                <div
                    className="pointer-events-none absolute inset-px rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    style={{
                        boxShadow: `0 0 1px 1px rgba(${glowColor}, 0.2) inset`,
                        background: `radial-gradient(${spotlightRadius / 2}px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.2), transparent 80%)`
                    }}
                />
            )}

            {/* Star Particles */}
            {enableStars && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {[...Array(particleCount)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * 100 + "%",
                                y: Math.random() * 100 + "%",
                                opacity: Math.random(),
                                scale: Math.random()
                            }}
                            animate={{
                                y: ["0%", "100%", "0%"],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                        />
                    ))}
                </div>
            )}

            <div className="relative z-20 h-full w-full p-8 flex flex-col justify-end">
                {children}
            </div>
        </div>
    );
};

export default MagicBento;
