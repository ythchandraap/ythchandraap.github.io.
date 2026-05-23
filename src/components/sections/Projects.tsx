"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../../lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/40 max-w-lg text-lg"
            >
              A collection of systems I&apos;ve built, from fintech platforms to
              automated trading bots.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <span className="text-sm font-mono text-accent uppercase tracking-[0.2em]">
              04 / 06 Projects
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string | null;
  image: string;
  featured?: boolean;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-500"
    >
      <div className="aspect-video relative overflow-hidden bg-white/5">
        {/* Project Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Project Type Badge */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest">
            {project.featured ? "Featured" : "System"}
          </span>
        </div>

        {/* View Link Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-110 transition-transform"
          >
            View Project <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                className="text-white/40 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
            )}

            <a
              href={project.link}
              className="text-white/40 hover:text-white transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className="text-white/60 mb-8 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
