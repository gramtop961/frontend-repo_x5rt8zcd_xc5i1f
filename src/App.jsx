import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
