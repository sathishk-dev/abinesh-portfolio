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
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <div className="flex justify-center">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              {getIcon(item.type)}
            </div>
          </div>
          <div className={`mt-10 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
            <div className={`w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <p className="text-muted-foreground text-sm">{item.date}</p>
            </div>
          </div>
          <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
            <div className="w-1/2 p-4">
              <div className={`relative ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                 <div className={`absolute top-4 h-0 w-0 border-transparent border-solid ${index % 2 === 0 ? "right-6 border-l-card" : "left-6 border-r-card"}`} style={{ borderWidth: '8px' }}></div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm font-medium text-accent">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
