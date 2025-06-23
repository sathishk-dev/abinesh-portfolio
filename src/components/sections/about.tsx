"use client";

import Image from "next/image";
import profilePic from '@/assets/profile.jpg';
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/motion-wrapper";
import { AnimatedStat } from "@/components/animated-stat";
import { Separator } from "@/components/ui/separator";

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <MotionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
        </MotionWrapper>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <MotionWrapper className="md:col-span-2" variants={itemVariants}>
            <div
              className="relative aspect-square w-4/5 md:w-full mx-auto animate-blob overflow-hidden drop-shadow-accent transition-all ease-in-out hover:scale-105 hover:drop-shadow-accent-hover"
            >
              <Image
                src={profilePic}
                alt="Developer Portrait"
                fill
                className="object-cover grayscale"
                data-ai-hint="developer portrait"
              />
            </div>
          </MotionWrapper>

          <MotionWrapper className="md:col-span-3" variants={staggerVariants}>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-4">
              I am a passionate and dedicated Java Full Stack Developer with a strong foundation in both front-end and back-end technologies. As a recent graduate, I am eager to apply my skills and knowledge to real-world projects and contribute to a dynamic team.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              My journey into programming started with a fascination for building things, and it has grown into a career aspiration. I thrive on solving complex problems and am constantly learning to keep up with the latest industry trends. I am proficient in technologies like Java, Spring Boot, React, and SQL, and I am excited to build innovative and efficient web applications.
            </motion.p>
          </MotionWrapper>
        </div>

        <Separator className="my-16 bg-border" />
        
        <MotionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedStat value={3} label="Years of Learning" />
              <AnimatedStat value={10} label="Projects Completed" />
              <AnimatedStat value={5} label="Core Technologies" />
              <AnimatedStat value={2} label="Certifications" />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
