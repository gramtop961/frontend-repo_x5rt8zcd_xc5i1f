import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-red-500/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl bg-red-500 blur-md opacity-40" />
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white font-black">HS</span>
            </div>
            <span className="text-white font-semibold tracking-tight">heaven software</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-zinc-300 hover:text-white transition">Services</a>
            <a href="#work" className="text-sm text-zinc-300 hover:text-white transition">Work</a>
            <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 text-white px-4 py-2 text-sm font-medium transition shadow-[0_0_20px_rgba(239,68,68,0.35)]">Start a Project</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/5">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="mt-2 grid gap-2">
              <a onClick={() => setOpen(false)} href="#services" className="rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5">Services</a>
              <a onClick={() => setOpen(false)} href="#work" className="rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5">Work</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5">Contact</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-lg px-3 py-2 bg-red-600 text-white">Start a Project</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
