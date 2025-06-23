"use client";

import { motion, type Variants } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  [key: string]: any;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function MotionWrapper({
  children,
  className,
  variants = defaultVariants,
  ...rest
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
