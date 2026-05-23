"use client";

import { motion } from "framer-motion";
// import { personalInfo, skills } from "@/lib/data";
import { Download, Coffee, Globe } from "lucide-react";
import { personalInfo, skills } from "../../../lib/data";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl mb-8"
            >
              A bit about me
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-lg text-white/60 leading-relaxed"
            >
              <p>
                I&apos;m a Fullstack Developer based in {personalInfo.basedIn}{" "}
                with over {personalInfo.experience} years of experience building
                digital products. I specialize in high-performance backend
                systems using <span className="text-white">Go</span> and modern
                frontend experiences with{" "}
                <span className="text-white">React/Next.js</span>.
              </p>
              <p>
                My approach focuses on writing clean, maintainable code and
                creating user-centric interfaces. Whether it&apos;s architecting
                a complex microservice or fine-tuning a CSS animation, I thrive
                on solving technical challenges.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Coffee size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40">Driven by</p>
                  <p className="font-medium">Caffeine & Code</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40">Location</p>
                  <p className="font-medium">{personalInfo.basedIn} (GMT+7)</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <a
                href="/files/cv_chandra_adam_pratama.pdf"
                download="cv_chandra_adam_pratama.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all w-fit cursor-pointer"
              >
                <Download
                  size={18}
                  className="group-hover:-translate-y-1 transition-transform"
                />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Tech Stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full z-0" />
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-accent/30"
                >
                  <skill.icon
                    size={32}
                    className="mb-4 text-white/40 group-hover:text-accent transition-colors duration-300"
                  />
                  <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
