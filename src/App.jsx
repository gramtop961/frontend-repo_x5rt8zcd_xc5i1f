import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-red-500 via-red-400 to-red-600/80"
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <footer className="bg-black/90 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} heaven software. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#services" className="hover:text-red-400">Services</a>
            <a href="#work" className="hover:text-red-400">Work</a>
            <a href="#contact" className="hover:text-red-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
