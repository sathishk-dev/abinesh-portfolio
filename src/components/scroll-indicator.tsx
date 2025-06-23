"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function ScrollIndicator() {
  return (
    <Link href="#about" aria-label="Scroll to about section">
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ArrowDown className="h-8 w-8 text-foreground" />
      </motion.div>
    </Link>
  );
}
