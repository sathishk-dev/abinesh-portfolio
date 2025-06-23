"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // This check runs only once on the client
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);
    
    if (touchCheck) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Don't render cursor on touch devices. Also hide for mobile via CSS for simplicity.
  if (isTouchDevice) {
    return null;
  }

  const cursorRingVariants = {
    default: {
      height: 32,
      width: 32,
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: 'transparent',
      mixBlendMode: 'normal',
    },
    hover: {
        height: 48,
        width: 48,
        x: position.x - 24,
        y: position.y - 24,
        backgroundColor: 'hsl(var(--accent))',
        mixBlendMode: 'difference'
    }
  };
  
  const dotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      scale: 1,
      opacity: 1
    },
    hover: {
      scale: 0,
      opacity: 0,
      x: position.x - 4,
      y: position.y - 4,
    }
  }

  return (
    <div className='hidden md:block'>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-2 border-accent"
        variants={cursorRingVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
