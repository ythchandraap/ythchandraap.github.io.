"use client";

import { motion } from "framer-motion";
// import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { experiences } from "../../../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">My Journey</h2>
          <p className="text-white/40">
            Professional experience and career milestones.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {/* Dot */}
              <div className="absolute top-0 -left-[17px] md:left-[-8px] w-4 h-4 rounded-full bg-accent border-4 border-background" />

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`md:w-[calc(50%-40px)] pl-8 ${
                  index % 2 === 0
                    ? "md:-translate-x-full md:text-right md:pr-10 md:pl-0"
                    : "md:text-left md:pl-10"
                }`}
              >
                <div className="glass p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className={`text-accent-secondary font-medium mb-4 flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {exp.company} <Briefcase size={16} />
                  </p>
                  <ul
                    className={`space-y-2 text-sm text-white/60 ${index % 2 === 0 ? "md:list-none" : "list-disc list-inside"}`}
                  >
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
