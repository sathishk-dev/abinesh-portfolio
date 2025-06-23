import { MotionWrapper } from "@/components/motion-wrapper";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
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
            <div className="text-center mt-12">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                <Button size="lg" asChild>
                    <Link href="/resume.pdf" target="_blank" download>
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                    </Link>
                </Button>
                </motion.div>
            </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
