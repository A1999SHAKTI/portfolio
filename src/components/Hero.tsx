"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full bg-emerald-600 opacity-[0.07] blur-[100px]" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[450px] h-[450px] rounded-full bg-teal-600 opacity-[0.06] blur-[90px]" />

      {[
        { top:"20%", left:"8%",  s:"w-1 h-1",   d:0 },
        { top:"60%", left:"4%",  s:"w-1.5 h-1.5",d:1 },
        { top:"30%", right:"8%", s:"w-1 h-1",   d:2 },
        { top:"70%", right:"10%",s:"w-1.5 h-1.5",d:0.5},
        { top:"80%", left:"28%", s:"w-1 h-1",   d:3 },
      ].map((p, i) => (
        <motion.div key={i}
          animate={{ y:[-12,12,-12], opacity:[0.2,0.7,0.2] }}
          transition={{ duration:4+i, repeat:Infinity, ease:"easeInOut", delay:p.d }}
          className={`absolute ${p.s} rounded-full bg-emerald-400`}
          style={{ top:p.top, left:(p as any).left, right:(p as any).right }}
        />
      ))}

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-300 tracking-wide">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9, delay:0.1 }}>
          <h1 className="text-[2.2rem] sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-1 uppercase break-words text-white">
            {personalInfo.name}
          </h1>
          <h1 className="text-[2.2rem] sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8 uppercase break-words"
            style={{ background:"linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            {personalInfo.lastName}
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.25 }}
          className="flex items-center justify-center gap-3 mb-5">
          <div className="hidden sm:block h-px w-10 bg-gradient-to-r from-transparent to-emerald-500/60" />
          <span className="text-base sm:text-xl font-semibold text-white/60 tracking-wider uppercase">{personalInfo.title}</span>
          <div className="hidden sm:block h-px w-10 bg-gradient-to-l from-transparent to-emerald-500/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.35 }}
          className="text-white/40 text-sm sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed px-2">
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base overflow-hidden w-full sm:w-auto justify-center"
            style={{ background:"linear-gradient(135deg, #10b981, #059669)" }}>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in touch
          </a>
          <a href="#experience"
            className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center">
            View my work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-white/20 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2, repeat:Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-emerald-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
