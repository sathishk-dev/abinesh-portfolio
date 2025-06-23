"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/typewriter";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { MagicButton } from "@/components/ui/magic-button";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ParticleBackground = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles only on the client-side to prevent hydration mismatch
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 15 + 5;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * duration;
        const startX = Math.random() * 100;
        const startY = 110; // Start below the viewport
        const endY = -10;   // End above the viewport
        const startRotation = Math.random() * 360;
        const endRotation = startRotation + (Math.random() - 0.5) * 180;

        return {
          id: i,
          size,
          duration,
          delay,
          startX,
          startY,
          endY,
          startRotation,
          endRotation
        };
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Return a placeholder on the server and before particles are generated
  if (!particles.length) {
    return <div className="absolute inset-0 -z-10 w-full h-full bg-background" />;
  }

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-background">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.startX}%`,
            top: `${p.startY}%`,
          }}
          animate={{
            y: `${p.endY - p.startY}vh`, // Use viewport height for consistent animation
            opacity: [0, 1, 1, 0],
            borderRadius: ["10%", "50%", "10%"],
            scale: [1, 1.5, 1],
            rotate: [p.startRotation, p.endRotation],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const leftSocials = [
    {
      icon: <Github size={24} />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
];
  
const rightSocials = [
    {
      icon: <Mail size={24} />,
      href: "mailto:developer@example.com",
      label: "Email",
    },
];

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      
      <ParticleBackground />

      <motion.div
        className="z-10 flex flex-col items-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground"
          variants={itemVariants}
        >
          Abinesh K
        </motion.h1>
        <motion.h2 className="mt-2 text-xl md:text-2xl font-medium text-muted-foreground" variants={itemVariants}>
          Java Full Stack Developer
        </motion.h2>
        <motion.div className="mt-6 text-lg md:text-xl text-accent" variants={itemVariants}>
          <Typewriter
            texts={[
              "Building robust back-ends.",
              "Crafting beautiful front-ends.",
              "Solving complex problems.",
              "Ready to innovate and learn.",
            ]}
          />
        </motion.div>
        <motion.div 
            variants={itemVariants} 
            className="mt-8"
        >
           <MagicButton href="#contact">
            Get In Touch
           </MagicButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:flex flex-col gap-6 absolute left-5 lg:left-10 top-1/2 -translate-y-1/2 z-20"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } },
        }}
      >
        {leftSocials.map((social) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-2 rounded-full text-foreground/70 hover:text-accent hover:bg-accent/10 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            variants={socialItemVariants}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="hidden md:flex flex-col gap-6 absolute right-5 lg:right-10 top-1/2 -translate-y-1/2 z-20"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } },
        }}
      >
        {rightSocials.map((social) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-2 rounded-full text-foreground/70 hover:text-accent hover:bg-accent/10 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            variants={{...socialItemVariants, hidden: { opacity: 0, x: 20 }}}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
