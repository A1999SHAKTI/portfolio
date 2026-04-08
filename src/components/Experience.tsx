"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20">
      <div className="absolute bottom-[10%] right-[-100px] w-[350px] h-[350px] rounded-full bg-teal-600 opacity-[0.05] blur-[70px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-10 sm:mb-16">
          <span className="section-heading">Career</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Professional{" "}
            <span style={{ background:"linear-gradient(135deg,#34d399,#10b981,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>experience</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ duration:0.6 }}
              className="glass-card rounded-2xl overflow-hidden gradient-border">
              <div className="px-4 sm:px-8 py-5 sm:py-6 border-b border-white/[0.04]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-700/10 border border-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-emerald-400 font-medium text-sm sm:text-base">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/40 ml-[60px] sm:ml-0">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 sm:px-8 py-5 sm:py-6">
                <div className="grid gap-3">
                  {exp.highlights.map((item, j) => (
                    <motion.div key={j}
                      initial={{ opacity:0, x:-12 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                      transition={{ delay:0.1+j*0.05 }}
                      className="flex gap-3 group/item">
                      <div className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover/item:bg-emerald-400 transition-colors" />
                      <p className="text-white/50 text-sm sm:text-base leading-relaxed group-hover/item:text-white/70 transition-colors">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
