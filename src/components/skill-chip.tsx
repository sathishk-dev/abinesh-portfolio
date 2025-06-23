"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

export function SkillChip({ name }: { name: string }) {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -4 }}>
      <Badge className="text-md px-4 py-2 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors">
        {name}
      </Badge>
    </motion.div>
  );
}
