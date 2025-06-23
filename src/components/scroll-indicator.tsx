"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ScrollIndicator() {
  return (
    <Link href="#about" aria-label="Scroll to about section">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-8 h-14 rounded-full border-2 border-foreground flex justify-center items-start p-2"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="w-1 h-3 rounded-full bg-foreground"
            animate={{
              y: [0, 24, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </Link>
  );
}
