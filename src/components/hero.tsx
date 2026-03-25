"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Link, Briefcase, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-5 text-xs uppercase tracking-[0.45em] text-zinc-500"
          >
            Computing Student • Web Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl font-black uppercase leading-[0.95] sm:text-7xl md:text-8xl xl:text-[7rem]"
          >
            Arpit
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Builds Bold
            </span>
            <span className="block text-zinc-300">Digital Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg lg:mx-0"
          >
            I create modern websites and interfaces with strong visuals,
            smooth interactions, and clean code. I am building toward a
            career in software, AI, and cybersecurity.
          </motion.p>

          {/* BUTTONS (UPDATED FOR SCROLL) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <a href="#projects">
              <Button className="group h-12 rounded-full px-6 text-sm uppercase tracking-wider">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>

            <a href="#contact">
              <Button
                variant="outline"
                className="h-12 rounded-full border-zinc-700 bg-transparent px-6 text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black"
              >
                Contact Me
              </Button>
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#"
              className="rounded-full border border-zinc-800 bg-white/5 p-3 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
            >
              <Link className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full border border-zinc-800 bg-white/5 p-3 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
            >
              <Briefcase className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full border border-zinc-800 bg-white/5 p-3 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Current Focus
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Building a standout portfolio
                </h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-zinc-300">
                2026
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Stack
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Next.js • Tailwind • shadcn
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Goals
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Frontend • AI • Cybersecurity
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  About
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  A modern portfolio designed to feel cinematic, energetic,
                  and premium — with bold typography, glow effects,
                  glassmorphism, and smooth motion.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "TypeScript", "UI Design", "Motion", "Student Builder"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}