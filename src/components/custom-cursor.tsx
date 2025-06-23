"use client";

import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Spring for the ring for a smooth trailing effect
  const springConfig = { stiffness: 400, damping: 30 };
  const ringX = useSpring(-100, springConfig);
  const ringY = useSpring(-100, springConfig);
  
  // State for the dot's position for instant movement
  const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 });
  
  useEffect(() => {
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);
    
    if (touchCheck) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update state for the dot instantly
      setDotPosition({ x: clientX, y: clientY });

      // Update spring values for the ring
      ringX.set(clientX);
      ringY.set(clientY);

      const target = e.target as HTMLElement;
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
  }, [ringX, ringY]);

  if (isTouchDevice) {
    return null;
  }

  const ringVariants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'transparent',
      mixBlendMode: 'normal',
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: 'hsl(var(--accent))',
      mixBlendMode: 'difference',
    }
  };
  
  const dotVariants = {
    default: {
      scale: 1,
      opacity: 1
    },
    hover: {
      scale: 0,
      opacity: 0,
    }
  };

  return (
    <div className='hidden md:block'>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-2 border-accent"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={ringVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
      
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999]"
        style={{
          x: dotPosition.x,
          y: dotPosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={dotVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
