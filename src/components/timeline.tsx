"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

type TimelineItem = {
  type: "Education" | "Internship";
  title: string;
  institution: string;
  date: string;
  description: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getIcon = (type: TimelineItem["type"]) => {
  switch (type) {
    case "Education":
      return <GraduationCap className="h-5 w-5 text-accent-foreground" />;
    case "Internship":
      return <Briefcase className="h-5 w-5 text-accent-foreground" />;
    default:
      return null;
  }
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative max-w-2xl mx-auto md:max-w-4xl">
      <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <div
            className={`flex items-center w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              {getIcon(item.type)}
            </div>
            
            <div className="w-full md:w-[calc(50%-2.5rem)] ml-14 md:ml-0">
              <div
                className={`p-4 rounded-lg shadow-md bg-card relative ${
                  index % 2 === 0 ? "md:mr-14" : "md:ml-14"
                }`}
              >
                <div
                  className={`absolute top-4 h-0 w-0 border-transparent border-solid ${
                    index % 2 === 0
                      ? "md:border-l-card md:-right-4"
                      : "md:border-r-card md:-left-4"
                  } -left-4 border-r-card`}
                  style={{ borderWidth: "8px" }}
                ></div>
                <p className="text-muted-foreground text-sm mb-1">{item.date}</p>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm font-medium text-accent">{item.institution}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
