import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, DollarSign, PenTool, LayoutGrid, Eye, ArrowRight } from "lucide-react";
import { SIGNATURE_PROJECTS, Project } from "../data";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Luxury Villa", "Premium Kitchen", "Luxury Apartment", "Office Space"];

  const filteredProjects = filter === "All"
    ? SIGNATURE_PROJECTS
    : SIGNATURE_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm sm:text-base uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3 block">Completed Homes</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-tight">
              Real Projects <br />
              <span className="font-serif italic text-[#E6C878] font-normal">Built in Telangana</span>
            </h2>
          </div>
          <p className="text-white/85 text-base sm:text-lg max-w-xl font-light leading-relaxed tracking-wide">
            Take a look at some of the actual homes we have designed and finished. Each project is made with care, high-quality wood, and beautiful craftsmanship.
          </p>
        </div>

        {/* Premium Portfolio Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative ${
                filter === cat ? "text-[#D4AF37]" : "text-white/45 hover:text-white/85"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Asymmetrical Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer relative aspect-[16/10] bg-[#121212] overflow-hidden border border-white/5"
            >
              {/* After image as primary view */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.afterImg}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-[#090909]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Hover highlight line */}
              <div className="absolute inset-0 border border-[#D4AF37]/0 transition-colors duration-500 group-hover:border-[#D4AF37]/30 z-10 pointer-events-none" />

              {/* Project Title and Metadata Overlays */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-light group-hover:text-[#E6C878] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-white/60 tracking-wide font-light">
                    {project.location}
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-3 text-white/80 group-hover:bg-[#D4AF37] group-hover:text-[#090909] group-hover:border-[#D4AF37] transition-all duration-300">
                  <Eye size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Case Study Overlay Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/90 backdrop-blur-sm p-4 sm:p-6 select-none"
          >
            {/* Modal Container - Premium Slide-Out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl h-full bg-[#090909] border-l border-white/10 overflow-y-auto relative glass-panel"
            >
              {/* Close Button sticky wrapper */}
              <div className="sticky top-0 z-20 flex justify-end p-6 bg-gradient-to-b from-[#090909] to-transparent">
                <button
                  onClick={() => setActiveProject(null)}
                  className="bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#090909] p-3 rounded-full transition-all border border-white/10 hover:border-[#D4AF37]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Case Study Content */}
              <div className="p-8 sm:p-12 pt-4">
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-2">
                  Project Details
                </span>
                <h3 className="text-3xl sm:text-5xl font-serif text-white mb-2 font-light">
                  {activeProject.title}
                </h3>
                <p className="text-white/50 text-sm uppercase tracking-[0.2em] mb-10 pb-6 border-b border-white/5">
                  {activeProject.category} • {activeProject.location}
                </p>

                {/* Splendid Hero Visual inside Modal */}
                <div className="relative aspect-[16/9] mb-12 overflow-hidden border border-white/5">
                  <img
                    src={activeProject.afterImg}
                    alt={`${activeProject.title} completed`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#090909]/80 backdrop-blur-sm px-4 py-2.5 border border-white/10 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                    Finished Project
                  </div>
                </div>

                {/* Editorial Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-white/5 pb-8 text-left">
                  <div className="flex items-start gap-4">
                    <Calendar className="text-[#D4AF37] mt-1 shrink-0" size={18} />
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">Duration</h4>
                      <p className="text-base text-white font-semibold">{activeProject.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <DollarSign className="text-[#D4AF37] mt-1 shrink-0" size={18} />
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">Cost Estimation</h4>
                      <p className="text-base text-[#E6C878] font-semibold">{activeProject.costRange}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <PenTool className="text-[#D4AF37] mt-1 shrink-0" size={18} />
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">Client Profile</h4>
                      <p className="text-base text-white font-semibold">{activeProject.clientName}</p>
                    </div>
                  </div>
                </div>

                {/* Before & After Interactive Description Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white/5 p-6 border border-white/5 text-left">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-3">
                      Before our redesign
                    </span>
                    <p className="text-sm text-white/70 leading-relaxed font-light">
                      {activeProject.beforeDesc}
                    </p>
                  </div>
                  <div className="bg-[#D4AF37]/5 p-6 border border-[#D4AF37]/10 text-left">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-3">
                      Our simple solution
                    </span>
                    <p className="text-sm text-white/70 leading-relaxed font-light">
                      {activeProject.afterDesc}
                    </p>
                  </div>
                </div>

                {/* Material Board Detail Inlays */}
                <div className="text-left mb-12">
                  <h4 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/50 mb-4 font-semibold">
                    Materials used
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {activeProject.materials.map((mat) => (
                      <span 
                        key={mat}
                        className="bg-white/5 border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/80 font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deep Client Narrative */}
                <div className="text-left bg-white/5 p-8 border border-white/5 relative mb-6">
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 font-serif text-6xl text-[#D4AF37]/20 select-none">“</div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-2">How we helped</span>
                  <p className="text-sm sm:text-base italic font-serif text-white/90 leading-relaxed font-light">
                    {activeProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
