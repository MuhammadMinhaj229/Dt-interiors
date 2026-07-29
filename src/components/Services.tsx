import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { LUXURY_SERVICES } from "../data";

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-tight">
              Beautiful Designs <br />
              <span className="font-serif italic text-[#E6C878] font-normal">& Professional Setup</span>
            </h2>
          </div>
          <p className="text-white/85 text-base sm:text-lg max-w-xl font-light leading-relaxed tracking-wide">
            We provide complete home interior styling, custom modular kitchens, wardrobe installations, and full home renovations with top-quality materials.
          </p>
        </div>

        {/* Large Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LUXURY_SERVICES.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              key={service.id}
              onClick={() => setSelectedService(selectedService === i ? null : i)}
              className="group relative aspect-[4/5] bg-[#121212] overflow-hidden border border-white/5 flex flex-col justify-end p-8 cursor-pointer select-none"
            >
              {/* Service background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                {/* Dark premium gradient covers */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/80 to-[#090909]/20" />
              </div>

              {/* Gold borders on hover or select */}
              <div className={`absolute inset-0 border transition-colors duration-500 z-10 pointer-events-none ${
                selectedService === i ? "border-[#D4AF37]/40" : "border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20"
              }`} />

              {/* Floating Content Area */}
              <div className="relative z-10 flex flex-col justify-end h-full">

                <h3 className="text-xl sm:text-2xl font-serif text-white font-light mb-3 group-hover:text-[#E6C878] transition-colors flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight size={16} className={`transition-all duration-300 text-[#D4AF37] ${
                    selectedService === i ? "opacity-100 translate-x-1 -translate-y-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                  }`} />
                </h3>

                <p className="text-white/70 text-sm leading-relaxed font-light mb-4">
                  {service.description}
                </p>

                {/* Expanded Detailed Specifications overlay on hover or tap */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out border-t ${
                  selectedService === i 
                    ? "max-h-48 border-white/10 pt-4" 
                    : "max-h-0 md:group-hover:max-h-48 border-white/0 md:group-hover:border-white/10 pt-0 md:group-hover:pt-4"
                }`}>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block mb-2 font-semibold">Key Details:</span>
                  <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-white/60 text-left">
                    {service.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
