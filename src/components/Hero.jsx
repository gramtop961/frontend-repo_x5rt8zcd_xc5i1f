import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl pt-28 md:pt-40"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-300 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Building premium digital products
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            <span className="font-hand text-[1.05em] font-normal">Heaven Software</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600"> We craft modern apps</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-zinc-300"
          >
            A studio focused on clean, scalable, and delightful software. From concept to launch — we design, build, and ship.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-500 text-white px-6 py-3 font-medium shadow-[0_0_30px_rgba(239,68,68,0.35)] transition"
            >
              Start your project
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#work"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 hover:border-white/20 text-white px-6 py-3 font-medium bg-white/5 transition"
            >
              See our work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
