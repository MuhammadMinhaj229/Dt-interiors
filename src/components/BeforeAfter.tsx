import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeftRight, Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });
    
    resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", updateWidth);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 bg-[#090909] relative border-t border-white/5 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3 block">Real Transformations</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-tight mb-6">
            Before & After <br />
            <span className="font-serif italic text-[#E6C878] font-normal">See the Difference</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed tracking-wide">
            Slide the golden bar left and right to see how we transform dark, cluttered rooms into bright, comfortable, and beautiful spaces.
          </p>
        </div>

        {/* Comparison Slider Area */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden border border-white/10 shadow-2xl cursor-ew-resize select-none touch-none"
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop" 
              alt="Bespoke luxury modular kitchen redesign after" 
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Fine overlay */}
            <div className="absolute bottom-6 left-6 z-10 bg-[#090909]/80 backdrop-blur-sm px-4 py-2.5 border border-[#D4AF37]/30 text-[12px] sm:text-sm uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-2">
              <Sparkles size={14} />
              <span>Our New Design</span>
            </div>
          </div>
 
          {/* BEFORE Image (Clipped Overlay) */}
          <div 
            className="absolute inset-y-0 left-0 right-0 z-10 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop" 
              alt="Cluttered kitchen before" 
              className="absolute inset-y-0 left-0 h-full object-cover max-w-none pointer-events-none"
              style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
            />
            {/* Fine label */}
            <div className="absolute bottom-6 right-6 z-10 bg-black/80 backdrop-blur-sm px-4 py-2.5 border border-white/10 text-[12px] sm:text-sm uppercase tracking-[0.2em] text-white/60">
              Original Old Layout
            </div>
          </div>

          {/* GOLD SLIDER LINE SEPARATOR */}
          <div 
            className="absolute inset-y-0 z-20 w-[1px] bg-[#D4AF37] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Drag Handle Monogram Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#090909] border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-xl hover:bg-[#D4AF37] hover:text-[#090909] transition-colors pointer-events-auto cursor-ew-resize">
              <ArrowLeftRight size={14} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
