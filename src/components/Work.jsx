import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const work = [
  {
    title: "Fintech Dashboard",
    desc: "High-performance trading analytics with real-time charts.",
  },
  {
    title: "Healthcare Platform",
    desc: "Secure patient portal with telemedicine and scheduling.",
  },
  {
    title: "SaaS Admin",
    desc: "Clean, extensible admin for a B2B subscription product.",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-zinc-300">A few highlights from recent collaborations.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {work.map((item, i) => (
            <motion.a
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              href="#contact"
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-900/40 p-6 transition hover:border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.2),transparent_35%)]" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                </div>
                <ArrowUpRight className="text-zinc-400 group-hover:text-red-400 transition" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
