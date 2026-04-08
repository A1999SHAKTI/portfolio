"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const contacts = [
  { href:`mailto:${personalInfo.email}`, label:"Email", sub:personalInfo.email,
    icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, filled:false },
  { href:personalInfo.social.linkedin, label:"LinkedIn", sub:"Connect with me",
    icon:<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, filled:true },
  { href:personalInfo.social.github, label:"GitHub", sub:"View my code",
    icon:<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />, filled:true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-emerald-600 opacity-[0.05] blur-[70px]" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <span className="section-heading">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-white leading-tight">
            Let&apos;s build something{" "}
            <span style={{ background:"linear-gradient(135deg,#34d399,#10b981,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>great together</span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed px-2">
            I&apos;m always open to discussing new opportunities, data projects, or a friendly chat about analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {contacts.map((c, i) => (
            <motion.a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*0.1 }}
              className="glass-card rounded-2xl p-5 sm:p-6 gradient-border group text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill={c.filled ? "currentColor" : "none"} stroke={c.filled ? "none" : "currentColor"}>
                  {c.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{c.label}</h3>
              <p className="text-white/35 text-xs sm:text-sm break-all">{c.sub}</p>
            </motion.a>
          ))}
        </div>

        <motion.a href={`mailto:${personalInfo.email}`}
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden"
          style={{ background:"linear-gradient(135deg,#10b981,#059669)" }}>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
