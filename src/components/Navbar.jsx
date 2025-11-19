import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -16, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto relative flex items-center gap-4 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/5"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-2"
        >
          <a href="#" className="flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white font-black">
              HS
            </span>
            <span className="hidden sm:inline text-white font-semibold tracking-tight">heaven software</span>
          </a>
        </motion.div>

        <div className="hidden md:flex items-center gap-2">
          <a href="#services" className="text-sm text-zinc-300 hover:text-white transition px-3 py-1.5 rounded-full hover:bg-white/5">Services</a>
          <a href="#work" className="text-sm text-zinc-300 hover:text-white transition px-3 py-1.5 rounded-full hover:bg-white/5">Work</a>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition px-3 py-1.5 rounded-full hover:bg-white/5">Contact</a>
          <a href="#contact" className="ml-1 inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-500 text-white px-4 py-2 text-sm font-medium transition shadow-[0_0_20px_rgba(239,68,68,0.35)]">Start a Project</a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[92vw] max-w-sm"
            >
              <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-2 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                <a onClick={() => setOpen(false)} href="#services" className="block rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5">Services</a>
                <a onClick={() => setOpen(false)} href="#work" className="block rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5">Work</a>
                <a onClick={() => setOpen(false)} href="#contact" className="block rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5">Contact</a>
                <a onClick={() => setOpen(false)} href="#contact" className="mt-1 block rounded-lg px-3 py-2 bg-red-600 text-white text-center">Start a Project</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
