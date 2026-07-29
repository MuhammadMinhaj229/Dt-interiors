import React from "react";
import { MessageSquare, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Responsive Buttons (Bottom Right Corner) */}
      <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-40 flex flex-col gap-3 md:gap-4">
        
        {/* WhatsApp Chat Trigger */}
        <a
          href="https://wa.me/917893786186?text=Hi%20DT%20Interiors,%20I%20would%20like%20to%20schedule%20a%20free%20design%20consultation%20visit."
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 relative group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Label tooltip (Only shown on desktop hover) */}
          <span className="absolute right-14 md:right-16 bg-[#090909] text-white text-[10px] md:text-xs uppercase tracking-wider py-1.5 px-3 border border-white/10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg rounded pointer-events-none">
            WhatsApp Direct
          </span>
          <MessageSquare size={18} className="md:hidden" fill="currentColor" />
          <MessageSquare size={22} className="hidden md:block" fill="currentColor" />
        </a>

        {/* Call Trigger */}
        <a
          href="tel:+917893786186"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#D4AF37] text-[#090909] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 relative group cursor-pointer animate-bounce"
          aria-label="Call DT Interiors"
        >
          {/* Label tooltip (Only shown on desktop hover) */}
          <span className="absolute right-14 md:right-16 bg-[#090909] text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-wider py-1.5 px-3 border border-[#D4AF37]/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg rounded pointer-events-none">
            Call Consultant
          </span>
          <Phone size={18} className="md:hidden" fill="currentColor" />
          <Phone size={22} className="hidden md:block" fill="currentColor" />
        </a>

      </div>
    </>
  );
}
