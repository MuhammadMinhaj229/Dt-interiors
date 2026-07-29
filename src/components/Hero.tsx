import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Calendar, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen w-full flex flex-col justify-between bg-[#090909] overflow-hidden select-none">
      {/* Background Cinematic Luxury Slideshow/Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
        />
        {/* Cinematic dark gradients & lighting sweeps */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-[#090909]/80" />
        <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, transparent 20%, #090909 95%)" />
      </div>

      {/* Floating ambient lighting particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-[25%] left-[20%] w-[150px] h-[150px] rounded-full bg-[#D4AF37]/10 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[200px] h-[200px] rounded-full bg-[#E6C878]/5 blur-[100px]" />
      </div>

      {/* Spacer to clear the fixed navigation header and prevent overlap */}
      <div className="h-24 sm:h-28 md:h-32 flex-shrink-0" />

      {/* Main Copy Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-4 sm:py-8 md:py-0 text-center flex flex-col items-center justify-center flex-grow w-full">
        {/* Cinematic Headline - Large Editorial Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-4 sm:mb-6 font-light leading-tight tracking-tight max-w-4xl"
        >
          Luxury Interiors <br />
          <span className="font-serif italic text-[#E6C878] font-normal">Designed Around Your Lifestyle</span>
        </motion.h1>

        {/* Refined Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed tracking-[0.05em] mb-6 sm:mb-10"
        >
          Bring your dream home to life with our simple, beautiful, and reliable interior designs. We create comfortable, spacious rooms across Warangal and Telangana using top-quality materials built to last.
        </motion.p>

        {/* Premium Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-white text-[#090909] px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-500 rounded-none shadow-xl w-full sm:w-auto"
          >
            <Calendar size={14} />
            Book Free Consultation
          </a>
          <a
            href="#projects"
            className="group flex items-center justify-center gap-3 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-500 rounded-none backdrop-blur-sm w-full sm:w-auto"
          >
            <Compass size={14} className="text-[#D4AF37] group-hover:rotate-45 transition-transform duration-500" />
            Explore Portfolio
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator & Status */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-8 sm:pb-10 flex justify-between items-end gap-4">
        {/* Studio Location Stat */}
        <div className="hidden md:flex flex-col gap-1 text-left border-l border-[#D4AF37]/30 pl-4">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">Warangal Studio</span>
          <span className="text-sm text-white/50 tracking-wider">JPN Road, Warangal</span>
        </div>

        {/* Central Scroll Indicator */}
        <a href="#stats" className="flex flex-col items-center gap-3 group mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover:text-[#D4AF37] transition-colors">Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[#D4AF37]" />
          </motion.div>
        </a>

        {/* Performance Promise Stamp */}
        <div className="hidden md:flex flex-col gap-1 text-right border-r border-[#D4AF37]/30 pr-4">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">Our Promise</span>
          <span className="text-sm text-white/50 tracking-wider">Durable Materials & Quality Fittings</span>
        </div>
      </div>
    </section>
  );
}
