"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/typewriter";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

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
      <div className="absolute inset-0 bg-background -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary to-background opacity-50"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
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
          Your Name
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
        <motion.div variants={itemVariants} className="mt-8">
           <Button asChild size="lg">
              <Link href="#contact">
                Get In Touch
              </Link>
            </Button>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
