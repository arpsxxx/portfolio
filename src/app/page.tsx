import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import SectionReveal from "@/components/section-reveal"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[25%] h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-80px] h-[360px] w-[360px] rounded-full bg-violet-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <Navbar />
      <Hero />

      <SectionReveal>
        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">About</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-5xl">
            I build clean, bold, modern web experiences
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I am a computing student and aspiring developer focused on building
            modern digital experiences with clean code, strong visuals, and smooth
            user interaction. I am especially interested in frontend development,
            AI, and cybersecurity.
          </p>
        </section>
      </SectionReveal>

      <SectionReveal>
        <Projects />
      </SectionReveal>

      <SectionReveal>
  <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Contact</p>
    <h2 className="mt-4 text-3xl font-black uppercase sm:text-5xl">
      Let’s build something great
    </h2>
    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
      I am open to opportunities, collaborations, and creative projects.
      Reach out through email, GitHub, or LinkedIn.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="mailto:youremail@example.com"
        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:border-white/30 hover:bg-white hover:text-black"
      >
        Email Me
      </a>
      <a
        href="#"
        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:border-white/30 hover:bg-white hover:text-black"
      >
        LinkedIn
      </a>
      <a
        href="#"
        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:border-white/30 hover:bg-white hover:text-black"
      >
        GitHub
      </a>
    </div>
  </section>
</SectionReveal>
    </main>
  )
}