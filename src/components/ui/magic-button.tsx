"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const MagicButton = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <motion.div
        className={cn(
            "relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background",
            className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--accent))_0%,hsl(var(--primary))_50%,hsl(var(--accent))_100%)]" />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-background px-6 py-2 text-base font-medium text-foreground backdrop-blur-3xl md:px-8 md:text-lg"
        >
          {children}
          <ArrowRight className="h-5 w-5" />
        </span>
      </motion.div>
    </Link>
  );
};
