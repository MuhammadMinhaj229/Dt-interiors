import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "./hooks/useLenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import all premium components
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import BeforeAfter from "./components/BeforeAfter";
import WhyDT from "./components/WhyDT";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="bg-[#090909] min-h-screen text-white font-sans overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col min-h-screen w-full"
          >
            {/* Nav Menu */}
            <Header />

            <main className="flex-grow w-full">
              {/* Sections list */}
              <Hero />
              <Stats />
              <Services />
              <Projects />
              <BeforeAfter />
              <WhyDT />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Contact quick links */}
            <FloatingButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
