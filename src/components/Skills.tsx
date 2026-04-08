"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, JSX.Element> = {
  code: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  chart: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  database: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
  pipeline: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" /></svg>,
  brain: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  tool: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

const cardColors: Record<string, string> = {
  "Languages & Libraries": "from-blue-500/15 to-transparent",
  "Visualisation":         "from-violet-500/15 to-transparent",
  "Databases":             "from-emerald-500/15 to-transparent",
  "Data Engineering":      "from-sky-500/15 to-transparent",
  "Analytics":             "from-pink-500/15 to-transparent",
  "Tools & Practices":     "from-amber-500/15 to-transparent",
};
const iconColors: Record<string, string> = {
  "Languages & Libraries": "text-blue-400",
  "Visualisation":         "text-violet-400",
  "Databases":             "text-emerald-400",
  "Data Engineering":      "text-sky-400",
  "Analytics":             "text-pink-400",
  "Tools & Practices":     "text-amber-400",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="absolute top-[20%] left-[-80px] w-[300px] h-[300px] rounded-full bg-teal-600 opacity-[0.05] blur-[70px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-10 sm:mb-16">
          <span className="section-heading">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Tools & technologies I{" "}
            <span style={{ background:"linear-gradient(135deg,#34d399,#10b981,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>work with</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, i) => (
            <motion.div key={skill.category}
              initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.08, duration:0.5 }}
              whileHover={{ y:-6, rotateX:4, rotateY:-4, scale:1.02, transition:{ duration:0.25, ease:"easeOut" } }}
              style={{ perspective:800, transformStyle:"preserve-3d" }}
              className="glass-card rounded-2xl p-5 sm:p-6 cursor-default relative overflow-hidden group">
              <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[skill.category] ?? "from-emerald-500/10 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center ${iconColors[skill.category] ?? "text-emerald-400"} group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[skill.icon]}
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <motion.span key={item} whileHover={{ scale:1.08 }}
                      className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/8 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200 cursor-default">
                      {item}
                    </motion.span>
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
