import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setForm] = useState({
    name: "",
    phone: "",
    propertyType: "Villa",
    budget: "₹10L - ₹15L",
    message: ""
  });

  const getWhatsAppUrl = () => {
    const phoneNumber = "917893786186";
    const messageText = `Hi DT Interiors, I'd like to book a free design consultation. Here are my details:

• Name: ${formData.name}
• Phone: ${formData.phone}
• Property: ${formData.propertyType}
• Budget: ${formData.budget}
${formData.message.trim() ? `• Vision: ${formData.message}` : ""}

Looking forward to connecting with the designer!`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger majestic luxury golden-themed canvas-confetti firework bursts
    const colors = ["#D4AF37", "#E6C878", "#FFFFFF", "#121212"];
    
    // Left-side burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { x: 0.1, y: 0.6 },
      colors: colors
    });

    // Right-side burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { x: 0.9, y: 0.6 },
      colors: colors
    });

    // Center burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: colors
      });
    }, 300);

    // Open WhatsApp URL
    const url = getWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");

    setFormSubmitted(true);
  };

  const triggerReset = () => {
    setForm({
      name: "",
      phone: "",
      propertyType: "Villa",
      budget: "₹10L - ₹15L",
      message: ""
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#090909] relative border-t border-white/5">
      {/* Background soft glow rings */}
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Premium Studio details (5 columns) */}
          <div className="lg:col-span-5 text-left flex flex-col gap-10">
            <div>
              <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3 block">Showroom & Headquarters</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-tight">
                Secure Your <br />
                <span className="font-serif italic text-[#E6C878] font-normal">Design Consultation</span>
              </h2>
            </div>
            
            <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed tracking-wide">
              Schedule a physical walkthrough at our material studio in Mandi Bazar, Warangal. Let's touch physical polymer samples and align your spatial preferences.
            </p>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 bg-white/5">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-1">Warangal Showroom</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    Shop No. 14-5-38, Madrasi Masjid Complex, JPN Road, Mandi Bazar, Warangal, Telangana 506002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 bg-white/5">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-1">Direct Tele-Line</h4>
                  <a href="tel:+917893786186" className="text-sm text-white/60 hover:text-[#D4AF37] leading-none transition-colors">
                    +91 7893786186
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 bg-white/5">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-1">Electronic Mail</h4>
                  <a href="mailto:dtinteriors01@gmail.com" className="text-sm text-white/60 hover:text-[#D4AF37] leading-none transition-colors">
                    dtinteriors01@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Embed Google Map in custom luxury border */}
            <div className="w-full aspect-[16/10] border border-white/10 bg-[#121212] relative overflow-hidden group">
              <iframe
                title="DT Interiors Showroom Map location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6190779261073!2d79.5847423!3d18.000055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f5da6321cb5%3A0xe54ef02eb0f32997!2sDT%20Interiors%20(Design%20Terminal%20Interiors)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* RIGHT: Floating Glassmorphic Consultation Form (7 columns) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#121212]/50 border border-white/5 p-8 sm:p-12 relative overflow-hidden glass-panel text-left">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-6"
                  >
                    {/* Form Group 1: Name */}
                    <div>
                      <label className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 block mb-2 font-semibold">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setForm({...formData, name: e.target.value})}
                        placeholder="e.g. Anand Reddy"
                        className="w-full bg-white/5 border border-white/10 text-white/95 text-sm px-4 py-4 rounded-none focus:outline-none focus:border-[#D4AF37] placeholder:text-white/30"
                      />
                    </div>

                    {/* Form Group 2: Phone */}
                    <div>
                      <label className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 block mb-2 font-semibold">Phone Contact *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setForm({...formData, phone: e.target.value})}
                        placeholder="e.g. +91 78937 86186"
                        className="w-full bg-white/5 border border-white/10 text-white/95 text-sm px-4 py-4 rounded-none focus:outline-none focus:border-[#D4AF37] placeholder:text-white/30"
                      />
                    </div>

                    {/* Form Group 3: Property Type & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 block mb-2 font-semibold">Property Layout Type</label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setForm({...formData, propertyType: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 text-white/90 text-sm px-4 py-4 rounded-none focus:outline-none focus:border-[#D4AF37]"
                        >
                          <option value="Villa" className="bg-[#090909]">Private Villa (Villa/Duplex)</option>
                          <option value="Apartment" className="bg-[#090909]">Luxury Apartment (3/4 BHK)</option>
                          <option value="Kitchen Only" className="bg-[#090909]">Modular Kitchen Redesign</option>
                          <option value="Corporate Space" className="bg-[#090909]">Corporate/Commercial Office</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 block mb-2 font-semibold">Targeted Budget Range</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setForm({...formData, budget: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 text-white/90 text-sm px-4 py-4 rounded-none focus:outline-none focus:border-[#D4AF37]"
                        >
                          <option value="₹5L - ₹10L" className="bg-[#090909]">₹5L - ₹10L (Standard Premium)</option>
                          <option value="₹10L - ₹15L" className="bg-[#090909]">₹10L - ₹15L (Luxury Import)</option>
                          <option value="₹15L - ₹25L" className="bg-[#090909]">₹15L - ₹25L (High-End Custom)</option>
                          <option value="₹25L+" className="bg-[#090909]">₹25L+ (Elite Italian Turnkey)</option>
                        </select>
                      </div>
                    </div>

                    {/* Form Group 4: Message */}
                    <div>
                      <label className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 block mb-2 font-semibold">Tell Us About Your Design Vision</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setForm({...formData, message: e.target.value})}
                        placeholder="Share any special ideas, preferred themes, room counts, or structural needs..."
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 text-white/95 text-sm p-4 rounded-none focus:outline-none focus:border-[#D4AF37] placeholder:text-white/30"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D4AF37] hover:bg-white text-[#090909] font-bold text-center py-5 text-sm uppercase tracking-[0.2em] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xl"
                    >
                      <Send size={14} />
                      Submit & Chat on WhatsApp
                      <ChevronRight size={14} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="min-h-[400px] flex flex-col items-center justify-center text-center gap-6"
                  >
                    <CheckCircle2 size={48} className="text-[#D4AF37]" />
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">Consultation Requested!</h3>
                      <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mt-1 font-semibold">Your ticket code: DT-WNGL-{Math.floor(Math.random() * 9000 + 1000)}</p>
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm font-sans font-light max-w-md leading-relaxed">
                      Thank you, {formData.name}. We have pre-filled your layout details for your WhatsApp chat. If WhatsApp did not open automatically, please click below to send:
                    </p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-[0.15em] transition-all cursor-pointer mt-2 flex items-center gap-2 font-bold shadow-lg"
                    >
                      <MessageSquare size={14} fill="currentColor" />
                      Open WhatsApp Chat
                    </a>
                    <button
                      onClick={triggerReset}
                      className="px-8 py-3 border border-white/10 hover:border-[#D4AF37] text-white text-xs uppercase tracking-[0.15em] transition-all cursor-pointer mt-4"
                    >
                      Schedule Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
