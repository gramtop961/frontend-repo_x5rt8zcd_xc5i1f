import { Menu, X, Settings, Briefcase, Mail, Rocket } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Enter compact state after slight scroll; exit when near top
    if (latest > 80 && !compact) setCompact(true);
    if (latest <= 80 && compact) setCompact(false);
  });

  const links = useMemo(
    () => [
      { href: "#services", label: "Services", Icon: Settings },
      { href: "#work", label: "Work", Icon: Briefcase },
      { href: "#contact", label: "Contact", Icon: Mail },
    ],
    []
  );

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      <motion.nav
        layout
        initial={{ y: -16, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto relative flex items-center ${compact ? "gap-2 px-2 py-1" : "gap-4 px-3 py-2"} rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/5`}
        style={{ width: compact ? 520 : undefined }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-2"
        >
          <a href="#" className="flex items-center gap-2">
            <span
              className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white font-black ${compact ? "h-7 w-7" : "h-8 w-8"}`}
            >
              HS
            </span>
            <motion.span
              layout
              initial={false}
              animate={{ opacity: compact ? 0 : 1, width: compact ? 0 : "auto" }}
              transition={{ duration: 0.2 }}
              className="hidden sm:inline text-white font-semibold tracking-tight overflow-hidden whitespace-nowrap"
            >
              heaven software
            </motion.span>
          </a>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          <AnimatePresence initial={false} mode="wait">
            {!compact ? (
              <motion.div
                key="full"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {links.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm text-zinc-300 hover:text-white transition px-3 py-1.5 rounded-full hover:bg-white/5"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="ml-1 inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-500 text-white px-4 py-2 text-sm font-medium transition shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                >
                  Start a Project
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="icons"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1"
              >
                {links.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    title={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
                <a
                  href="#contact"
                  title="Start a Project"
                  className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 hover:bg-red-500 text-white transition shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                  aria-label="Start a Project"
                >
                  <Rocket size={18} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile dropdown */}
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
                {links.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    onClick={() => setOpen(false)}
                    href={href}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/5"
                  >
                    <Icon size={18} className="opacity-80" />
                    {label}
                  </a>
                ))}
                <a
                  onClick={() => setOpen(false)}
                  href="#contact"
                  className="mt-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-red-600 text-white text-center"
                >
                  <Rocket size={18} /> Start a Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
