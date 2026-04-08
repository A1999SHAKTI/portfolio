"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { label: "Years Exp", value: "2+" },
  { label: "Technologies", value: "12+" },
  { label: "Projects", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-1/2 right-[-100px] w-[350px] h-[350px] rounded-full bg-emerald-600 opacity-[0.05] blur-[70px]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="mb-10 sm:mb-16">
          <span className="section-heading">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white leading-tight">
            Passionate about{" "}
            <span style={{ background:"linear-gradient(135deg,#34d399,#10b981,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              data-driven decisions
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Profile card */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            className="lg:col-span-2 mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500/25 via-teal-500/15 to-transparent blur-md" />
              <div className="glass-card rounded-2xl p-5 relative">
                {/* Avatar placeholder */}
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-600/5 flex items-center justify-center mb-5 relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-7xl font-black mb-2" style={{ background:"linear-gradient(135deg,#34d399,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>SS</div>
                    <div className="text-xs text-white/30 font-medium tracking-widest uppercase">Data Analyst</div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-white/50">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white/50">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="break-all">{personalInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.15 }}
            className="lg:col-span-3">
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8">{personalInfo.summary}</p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
                  transition={{ delay:0.2+i*0.1 }}
                  whileHover={{ scale:1.05, transition:{ duration:0.2 } }}
                  className="glass-card rounded-xl p-3 sm:p-4 text-center relative overflow-hidden group cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-2xl sm:text-3xl font-bold" style={{ background:"linear-gradient(135deg,#34d399,#10b981)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-white/35 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { href: personalInfo.social.linkedin, label:"LinkedIn", icon:<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                { href: personalInfo.social.github, label:"GitHub", icon:<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> },
              ].map(link => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm text-white/50 hover:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">{link.icon}</svg>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
