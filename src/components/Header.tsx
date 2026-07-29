import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#projects" },
    { name: "Why DT", href: "#why-dt" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? "py-3 bg-[#090909]/85 backdrop-blur-md border-b border-white/5" 
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo - Editorial & Timeless */}
          <a href="#" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <img src="/favicon.svg" alt="DT Interiors Emblem" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif tracking-[0.22em] text-sm sm:text-lg md:text-xl font-semibold leading-none transition-all duration-300">DT INTERIORS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex gap-10 items-center text-white/90 text-sm uppercase tracking-[0.25em] font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#D4AF37] relative py-2 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Consultation CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="relative overflow-hidden group bg-transparent border border-[#D4AF37]/30 text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-all"
            >
              <span className="absolute inset-0 w-full h-full bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#090909] transition-colors duration-300">
                Book Consultation
                <ArrowUpRight size={12} />
              </span>
            </a>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-[#090909] flex flex-col justify-between p-10 pt-32"
          >
            {/* Background luxury graphics */}
            <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-8">
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">Navigation Menu</span>
              <nav className="flex flex-col gap-6 text-3xl font-serif text-white">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-[#D4AF37] transition-colors tracking-wide flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 text-[#D4AF37] transition-all" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/5 pt-10">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">Warangal Studio</span>
                <span className="text-sm sm:text-base text-white/70">JPN Road, Warangal, Telangana</span>
              </div>
              
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#D4AF37] text-[#090909] text-center py-4 text-sm uppercase tracking-[0.2em] font-bold"
              >
                Schedule Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
