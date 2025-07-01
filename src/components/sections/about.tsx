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

           Creative and detail-oriented Video Editor with a passion for storytelling through visual media. Skilled in assembling raw footage into engaging content, enhancing video quality, and creating compelling narratives using editing software such as Adobe Premiere Pro, After Effects, and Experienced in editing for social media, YouTube, promotional videos, corporate content, and short films. Adept at color correction, sound design, motion graphics, and adapting videos to various formats and platforms. Strong ability to meet deadlines, collaborate with production teams, and respond to feedback with professionalism and creativity.

            </motion.p>
            {/* <motion.p variants={itemVariants} className="text-muted-foreground">

          What sets me apart is my creative thinking—I don’t just edit clips together; I shape a narrative. I thrive on turning raw footage into visually engaging stories that leave a lasting impact.

I’m currently open to video editing opportunities where I can bring my creativity and editing expertise to the table—whether it’s freelance, contract, or full-time work. Let’s make something amazing together
            </motion.p> */}
          </MotionWrapper>
        </div>

        <Separator className="my-16 bg-border" />
        
        <MotionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedStat value={1} label="Years of Learning" />
              <AnimatedStat value={3} label="Projects Completed" />
              <AnimatedStat value={3} label="Core Technologies" />
              <AnimatedStat value={2} label="Certifications" />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
