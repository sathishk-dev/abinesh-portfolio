"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    icon: <Github />,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: <Linkedin />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <Mail />,
    href: "mailto:developer@example.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Animatefolio. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full bg-primary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
