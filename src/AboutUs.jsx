function AboutUs() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* Header Section */}
      <div className="mb-20 text-center">
        <span className="text-[10px] tracking-[0.8em] text-zinc-600 uppercase">
          Origin // Null
        </span>
        <h1 className="mt-4 text-5xl font-bold tracking-[0.2em] text-white uppercase italic">
          Our Absence
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Philosophy */}
        <div className="space-y-8 text-sm leading-relaxed text-zinc-500 font-light tracking-wide">
          <p>
            Ether was founded when we realized the world was too full of{" "}
            <span className="text-zinc-300">matter</span>. We noticed that as
            physical possessions increased, the clarity of the void decreased.
          </p>
          <p>
            We don't manufacture products; we refine absences. Every item in our
            market is a conceptual anchor—guaranteed to take up zero space in
            your physical home while occupying infinite space in your
            consciousness.
          </p>
          <p>
            We believe that true luxury isn't the presence of something
            expensive, but the total absence of anything unnecessary.
          </p>
        </div>

        {/* Right Column: Quotes & Stats */}
        <div className="border-l border-zinc-900 pl-8 space-y-12">
          <div>
            <blockquote className="text-xl font-light italic text-zinc-300 leading-snug">
              "Matter is a distraction. The vacuum is the only true luxury."
            </blockquote>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
              — The Architect of Void
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-900">
            <div className="flex justify-between items-end">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                Physical Footprint
              </span>
              <span className="font-mono text-xs text-white">0.00%</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                Atomic Density
              </span>
              <span className="font-mono text-xs text-white">Null</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                Mental Occupancy
              </span>
              <span className="font-mono text-xs text-white">Infinite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-32 text-center">
        <div className="h-px w-24 bg-zinc-800 mx-auto mb-8"></div>
        <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-700">
          Established in the silence between heartbeats.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
