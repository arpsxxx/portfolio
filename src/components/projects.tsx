"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Link2 } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A bold personal portfolio built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.",
    tech: ["Next.js", "Tailwind", "shadcn", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    title: "Java Console Game",
    description:
      "A programming project focused on game logic, problem solving, and clean Java structure.",
    tech: ["Java", "Game Logic", "OOP"],
    live: "#",
    github: "#",
  },
  {
    title: "Cybersecurity / Wireshark Project",
    description:
      "A systems security project analyzing network traffic and attack behavior using Wireshark.",
    tech: ["Wireshark", "Networking", "Security"],
    live: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Projects</p>
      <h2 className="mt-4 text-3xl font-black uppercase sm:text-5xl">
        Featured Work
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/10 p-2 text-zinc-300 transition hover:border-white/30 hover:text-white"
                  >
                    <Link2 className="h-4 w-4" />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/10 p-2 text-zinc-300 transition hover:border-white/30 hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}