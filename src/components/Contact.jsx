import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-zinc-300">Tell us about your idea and we’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <input required placeholder="Name" className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50" />
          <textarea required rows={5} placeholder="Project details" className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50" />
          <button disabled={status!=="idle"} className="inline-flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white px-6 py-3 font-medium transition shadow-[0_0_30px_rgba(239,68,68,0.35)]">
            {status === "loading" ? "Sending..." : status === "sent" ? "Sent!" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
