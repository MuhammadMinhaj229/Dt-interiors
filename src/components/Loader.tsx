import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        // Smooth logarithmic speed up to make it feel organic
        const increment = Math.max(1, Math.floor((100 - prev) * 0.15));
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600); // Small pause for dramatic effect
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090909] text-white select-none overflow-hidden"
    >
      {/* Dynamic atmospheric light bloom behind the monogram */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] rounded-full bg-[#D4AF37] blur-[150px] pointer-events-none"
      />

      <div className="relative flex flex-col items-center z-10">
        {/* Editorial Brand Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg tracking-[0.4em] uppercase font-serif text-white mb-2"
        >
          DT Interiors
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[10px] tracking-[0.2em] uppercase font-sans text-white/50 mb-8"
        >
          Crafting Luxury Beyond Imagination
        </motion.p>

        {/* Minimal percentage progress display */}
        <div className="relative flex flex-col items-center justify-center">
          <span className="font-serif italic text-4xl text-[#E6C878] font-light">
            {progress}%
          </span>
          {/* Micro fine timeline bar */}
          <div className="w-32 h-[1px] bg-white/10 mt-3 relative overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-[#D4AF37]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
