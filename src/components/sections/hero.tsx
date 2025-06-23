"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/typewriter";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { MagicButton } from "@/components/ui/magic-button";
import React, { useState, useEffect } from "react";

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

const ParticleBackground = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles only on the client-side
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 15 + 5;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * duration;
        const startX = Math.random() * 100;
        const startY = 110; // Start below the viewport
        const endY = -10;   // End above the viewport

        return {
          id: i,
          size,
          duration,
          delay,
          startX,
          startY,
          endY,
        };
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  if (!particles.length) {
    return <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-background" />;
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
            y: [`0%`, `${p.endY - p.startY}%`],
            opacity: [0, 1, 1, 0],
            borderRadius: ["10%", "50%", "10%"],
            scale: [1, 1.5, 1],
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

      <ScrollIndicator />
    </section>
  );
}
