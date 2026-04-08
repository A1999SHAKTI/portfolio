"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <div className="absolute top-[30%] right-[-80px] w-[300px] h-[300px] rounded-full bg-emerald-600 opacity-[0.05] blur-[70px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-10 sm:mb-16">
          <span className="section-heading">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Featured{" "}
            <span style={{ background:"linear-gradient(135deg,#34d399,#10b981,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.1, duration:0.5 }}
              whileHover={{ y:-6, scale:1.02, transition:{ duration:0.25 } }}
              className="glass-card rounded-2xl p-5 sm:p-6 gradient-border group relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg mb-3">{project.title}</h3>
                <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-300/70">
                      {tag}
                    </span>
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
