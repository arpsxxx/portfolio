"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-sm font-black uppercase tracking-[0.35em] text-white">
          Arpit
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-zinc-300 transition hover:text-white">
            About
          </a>
          <a href="#projects" className="text-sm text-zinc-300 transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-sm text-zinc-300 transition hover:text-white">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
         <a href="#contact">
  <Button className="rounded-full px-5">Hire Me</Button>
</a>
        </div>

        <button className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>
    </header>
  )
}