"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/typewriter";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { MagicButton } from "@/components/ui/magic-button";

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

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background" />
        <div className="absolute inset-0 filter blur-3xl">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent rounded-full opacity-10"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full opacity-10"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

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
          Abinesh
        </motion.h1>
        <motion.h2 className="mt-2 text-xl md:text-2xl font-medium text-muted-foreground" variants={itemVariants}>
          Java Full Stack Developer | Fresher
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
