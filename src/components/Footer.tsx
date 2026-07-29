import React from "react";
import { ArrowUp, Instagram, MessageSquare, Phone, MapPin, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-28 md:pb-12 select-none relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Upper Column Director */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 pb-16 border-b border-white/5">
          
          {/* Col 1: Corporate Branding */}
          <div className="lg:col-span-2 flex flex-col gap-6 text-left">
            <a href="#" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img src="/favicon.svg" alt="DT Interiors Emblem" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif tracking-[0.2em] text-lg font-semibold leading-none transition-all duration-300">DT INTERIORS</span>
                <span className="text-[10px] text-[#D4AF37] tracking-[0.35em] uppercase mt-1 leading-none font-semibold font-sans">DESIGN STUDIO</span>
              </div>
            </a>
            
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-sans font-light">
              DT Interiors is an award-winning full-service interior design firm crafting premium residences, modular kitchens, and corporate styling across Telangana.
            </p>

            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dtinteriors01" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/55 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all bg-white/5"
                aria-label="Instagram Profile"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="https://wa.me/917893786186" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/55 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all bg-white/5"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-6 font-semibold">Services</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/75 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Luxury Home Interiors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Premium Modular Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bespoke Walk-in Closets</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Entertainment TV Backdrops</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">False Ceilings & Lighting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial & Office Styling</a></li>
            </ul>
          </div>

          {/* Col 3: Company Sitemap */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-6 font-semibold">Sitemap</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/75 font-light">
              <li><a href="#projects" className="hover:text-white transition-colors">Our Portfolio</a></li>
              <li><a href="#why-dt" className="hover:text-white transition-colors">Why DT Interiors</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          {/* Col 4: Showroom info */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-6 font-semibold">HQ Showroom</h4>
            <div className="flex flex-col gap-4 text-sm text-white/75 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={12} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <span className="leading-relaxed">Shop No. 14-5-38, Madrasi Masjid Complex, JPN Road, Mandi Bazar, Warangal 506002</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={12} className="text-[#D4AF37]" />
                <a href="tel:+917893786186" className="hover:text-white transition-colors">+91 7893786186</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={12} className="text-[#D4AF37]" />
                <a href="mailto:dtinteriors01@gmail.com" className="hover:text-white transition-colors">dtinteriors01@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 uppercase tracking-widest font-sans font-medium text-center sm:text-left">
            © {new Date().getFullYear()} DT Interiors. All rights reserved.
          </p>

          <button
            onClick={scrolltoTop}
            className="flex items-center gap-2 border border-white/10 px-5 py-3 hover:border-[#D4AF37] text-white/60 hover:text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
