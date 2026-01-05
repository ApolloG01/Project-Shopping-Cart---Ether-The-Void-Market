import { useState } from "react";

function ContactUs() {
  const [status, setStatus] = useState("idle");

  const handleDispatch = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate the time it takes to transmit data to the "abyss"
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 h-12 w-px bg-gradient-to-b from-transparent to-zinc-500"></div>
        <h1 className="mb-4 text-2xl font-light tracking-[0.6em] uppercase text-white">
          Transmission Logged
        </h1>
        <p className="max-w-xs font-mono text-[10px] leading-relaxed text-zinc-500 italic">
          Your message has been converted into background radiation. Expect a
          response only if the stars align.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-10 text-[9px] uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-colors"
        >
          Send another whisper
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-24 text-center">
      <div className="mb-12">
        <h1 className="mb-4 text-5xl font-bold tracking-tighter uppercase text-white">
          Whisper into the Dark
        </h1>
        <p className="mx-auto max-w-md text-sm tracking-widest text-zinc-500 uppercase">
          We usually don't answer, but we are always listening.
        </p>
      </div>

      <form onSubmit={handleDispatch} className="mx-auto max-w-md space-y-6">
        <div className="group relative">
          <input
            type="text"
            placeholder="Your Identity (Optional)"
            className="w-full border-b border-zinc-800 bg-transparent py-4 font-mono text-xs uppercase tracking-widest text-white transition-colors focus:border-white focus:outline-none"
          />
        </div>

        <div className="group relative">
          <textarea
            required
            placeholder="Your message to the abyss..."
            rows="5"
            className="w-full resize-none border-b border-zinc-800 bg-transparent py-4 font-mono text-xs tracking-widest text-white transition-colors focus:border-white focus:outline-none"
          ></textarea>
        </div>

        <button
          disabled={status === "sending"}
          type="submit"
          className={`relative w-full py-5 text-[10px] font-bold uppercase tracking-[0.5em] transition-all duration-700 
            ${
              status === "sending"
                ? "cursor-wait bg-zinc-900 text-zinc-600"
                : "bg-white text-black hover:invert"
            }`}
        >
          {status === "sending" ? (
            <span className="animate-pulse">Transmitting Data...</span>
          ) : (
            "Dispatch to Nowhere"
          )}
        </button>

        <div className="pt-4">
          <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-700">
            Encrypted End-to-End // 0.0001% chance of reply
          </p>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
