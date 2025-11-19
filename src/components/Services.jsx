import { Code2, Layers, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    desc: "Web, mobile, and backend systems built for scale and speed.",
  },
  {
    icon: Layers,
    title: "UI/UX & Branding",
    desc: "Minimal, modern interfaces with a focus on conversion and clarity.",
  },
  {
    icon: Rocket,
    title: "MVPs & Prototypes",
    desc: "From zero to launch quickly — iterate with real users fast.",
  },
  {
    icon: Shield,
    title: "Cloud & DevOps",
    desc: "CI/CD, observability, and secure infrastructure that just works.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-zinc-300">A compact, expert team shipping reliable software with a premium feel.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-900/40 p-6 transition hover:border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400 group-hover:bg-red-500/25">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
