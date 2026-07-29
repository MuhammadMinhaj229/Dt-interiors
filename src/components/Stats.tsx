import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  key?: any;
}

function RollingNumber({ value, suffix, label, sublabel }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={elementRef} className="flex flex-col items-center md:items-start text-center md:text-left py-6 px-4">
      {/* Dynamic Count Title */}
      <h3 className="text-4xl md:text-5xl font-serif text-[#E6C878] font-normal leading-none tracking-tight mb-3">
        {count}
        {suffix}
      </h3>
      {/* Editorial Label */}
      <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/95 font-semibold mb-1">
        {label}
      </span>
      {/* Details Description */}
      <span className="text-xs sm:text-sm text-white/60 tracking-wide font-light max-w-xs">
        {sublabel}
      </span>
    </div>
  );
}

export default function Stats() {
  const statsData: StatItemProps[] = [
    { value: 120, suffix: "+", label: "Completed Projects", sublabel: "Beautiful apartments, comfortable homes, and smart kitchens." },
    { value: 5, suffix: "+", label: "Years of Craft", sublabel: "Designing and building beautiful spaces across Telangana." },
    { value: 100, suffix: "%", label: "Premium Materials", sublabel: "Using water-proof wood, long-lasting hinges, and top-quality finishes." },
    { value: 100, suffix: "%", label: "Client Satisfaction", sublabel: "On-time delivery and reliable, long-term guarantees." }
  ];

  return (
    <section id="stats" className="relative z-10 bg-[#090909] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {statsData.map((stat, i) => (
            <div key={i} className="md:border-r md:border-white/5 md:last:border-r-0">
              <RollingNumber
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
