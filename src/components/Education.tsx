"use client";
import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-20">
      <div className="absolute top-[30%] left-[-80px] w-[300px] h-[300px] rounded-full bg-teal-600 opacity-[0.05] blur-[70px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-10 sm:mb-16">
          <span className="section-heading">Background</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Education &{" "}
            <span style={{ background:"linear-gradient(135deg,#34d399,#10b981,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degrees */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Degrees</h3>
            {education.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay:i*0.1 }}
                className="glass-card rounded-2xl p-5 sm:p-6 gradient-border">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-white text-base">{edu.degree}</h4>
                        <p className="text-emerald-400 text-sm font-medium">{edu.field}</p>
                        {edu.honours && (
                          <span className="inline-block mt-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/15 px-2 py-0.5 rounded-full">
                            {edu.honours}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full shrink-0">{edu.year}</span>
                    </div>
                    <p className="text-white/40 text-sm mt-2">{edu.institution} — {edu.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Certifications</h3>
            {certifications.map((cert, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay:i*0.07 }}
                className="glass-card rounded-xl p-4 sm:p-5 gradient-border group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/8 border border-emerald-500/12 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/15 transition-colors">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                    <p className="text-white/35 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
