import React from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, Award, TrendingUp, Users, Clock, ThumbsUp } from "lucide-react";
import { WHY_DT_INTERIORS } from "../data";

export default function WhyDT() {
  // Mapping beautiful, matching gold icons to why items
  const iconList = [
    <Sparkles className="text-[#D4AF37]" size={24} />,
    <Award className="text-[#D4AF37]" size={24} />,
    <Shield className="text-[#D4AF37]" size={24} />,
    <TrendingUp className="text-[#D4AF37]" size={24} />,
    <Users className="text-[#D4AF37]" size={24} />,
    <Clock className="text-[#D4AF37]" size={24} />,
    <ThumbsUp className="text-[#D4AF37]" size={24} />
  ];

  return (
    <section id="why-dt" className="py-24 bg-[#090909] relative border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Headers */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3 block">Why DT Interiors</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-tight mb-6">
            A Better Way to <br />
            <span className="font-serif italic text-[#E6C878] font-normal">Design Your Home</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed tracking-wide">
            We believe that designing your home should be exciting, not stressful. We create beautiful, practical spaces tailored to your daily needs and family life.
          </p>
        </div>

        {/* Bento Grid Design Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_DT_INTERIORS.map((feature, i) => {
            // Balanced column spans: index 2 spans 2 columns, others span 1 to fill exactly 8 blocks (4 cols x 2 rows) with 7 items
            const isWide = i === 2;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                key={feature.title}
                className={`group border border-white/5 bg-[#121212]/40 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#D4AF37]/30 hover:bg-[#121212]/80 relative ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Visual Top Highlight Accent Lines */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-700 group-hover:w-full" />
                <div className="absolute top-0 left-0 w-[1px] h-0 bg-[#D4AF37] transition-all duration-700 group-hover:h-full" />

                <div className="flex flex-col gap-6 text-left">
                  {/* Icon Area */}
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors">
                    {iconList[i % iconList.length]}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-serif font-light mb-3 tracking-wide group-hover:text-[#E6C878] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-light tracking-wide">
                      {feature.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
