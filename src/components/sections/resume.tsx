"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { Timeline } from "@/components/timeline";
import { Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const timelineData = [
    {
      type: "Education",
      title: "Bachelor of Technology in Computer Science",
      institution: "University of Example Tech",
      date: "2020 - 2024",
      description: "Graduated with a focus on software development, database management, and web technologies. Completed several projects demonstrating proficiency in Java and related frameworks.",
    },
    {
      type: "Internship",
      title: "Software Developer Intern",
      institution: "Innovate Solutions Inc.",
      date: "Summer 2023",
      description: "Contributed to a live project by developing REST APIs using Spring Boot and assisting the front-end team with React components. Gained practical experience in an Agile environment.",
    },
    {
      type: "Education",
      title: "High School Diploma",
      institution: "Example High School",
      date: "2018 - 2020",
      description: "Focused on Science and Mathematics, laying a strong analytical foundation for my engineering studies.",
    },
];

const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function ResumeSection() {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionWrapper variants={slideInVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Journey
          </h2>
        </MotionWrapper>

        <MotionWrapper variants={slideInVariants}>
          <Timeline items={timelineData} />
        </MotionWrapper>

        <MotionWrapper variants={slideInVariants}>
            <div className="mt-12 text-center">
                <Link href="/resume.pdf" target="_blank" download passHref>
                    <motion.div
                        className="relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        variants={{
                            hover: { scale: 1.05 },
                            tap: { scale: 0.95 },
                        }}
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--accent))_0%,hsl(var(--primary))_50%,hsl(var(--accent))_100%)]" />
                        
                        <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-2 text-base md:px-8 md:text-lg font-medium text-foreground backdrop-blur-3xl">
                            <motion.span
                                className="inline-block"
                                variants={{
                                    hover: {
                                        y: [0, 4, 0],
                                        transition: {
                                            duration: 1.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                    },
                                }}
                            >
                                <Download className="h-5 w-5" />
                            </motion.span>
                            
                            Download Resume
                        </span>
                    </motion.div>
                </Link>
            </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
