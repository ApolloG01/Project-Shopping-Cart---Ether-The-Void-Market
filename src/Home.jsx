import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black min-h-screen text-zinc-100 selection:bg-white selection:text-black">
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2000&auto=format&fit=crop"
          alt="The Void"
          className="absolute z-0 w-full h-full object-cover opacity-50 grayscale"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black" />

        <div className="relative z-20 text-center px-4">
          <h1
            className="text-[15vw] md:text-[12vw] font-thin tracking-[0.2em] uppercase text-white leading-none 
            drop-shadow-[0_5px_5px_rgba(0,0,0,1)] 
            drop-shadow-[0_20px_20px_rgba(0,0,0,1)] 
            drop-shadow-[0_40px_40px_rgba(0,0,0,1)]"
          >
            Ether
          </h1>

          <div className="space-y-2 mt-4">
            <p className="text-xl md:text-5xl font-light text-zinc-300 drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Welcome to The Void Market
            </p>
            <p className="py-3 text-lg md:text-2xl text-zinc-400 drop-shadow-[0_5px_10px_rgba(0,0,0,1)]">
              Where we sell dreams and supply nightmares.
            </p>
          </div>

          <Link to="/shop">
            <button className="mt-10 px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-700 uppercase tracking-widest text-[10px] bg-black/20 backdrop-blur-sm">
              Enter The Void
            </button>
          </Link>
        </div>
      </header>

      <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto border-t border-zinc-900 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square bg-zinc-900 overflow-hidden group">
            <img
              src="https://picsum.photos/seed/void-meat/1000/1000?grayscale"
              className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[4000ms]"
              alt="Void abstraction"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
          </div>

          <div className="space-y-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600">
              The Purpose
            </span>
            <h2 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-white">
              Buy Anything and <br />
              <span className="italic text-zinc-700">Receive Nothing.</span>
            </h2>
            <div className="h-px w-24 bg-zinc-800" />
            <p className="text-xl text-zinc-500 leading-relaxed font-light italic">
              "To feed your soulless pack of meat..."
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              All the abstractions you never asked for. We curate the intangible
              for those who have realized that physical matter is a burden.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-40 bg-black flex flex-col items-center justify-center">
        {/* A thin vertical line that "bleeds" into the text */}
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-zinc-800 to-transparent mb-12" />

        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <p className="text-zinc-400 text-[13px] tracking-[1.8em] uppercase leading-relaxed font-light">
            Memory is a <span className="text-zinc-700">stock option.</span>
          </p>

          {/* A small geometric break */}
          <div className="flex justify-center items-center gap-4">
            <div className="w-8 h-[1px] bg-zinc-900" />
            <div className="w-1 h-1 rotate-45 border border-zinc-700" />
            <div className="w-8 h-[1px] bg-zinc-900" />
          </div>

          <p className="text-zinc-400 text-[13px] tracking-[1.8em] uppercase leading-relaxed font-light">
            Silence is a <span className="text-white">premium tier.</span>
          </p>
        </div>

        <div className="mt-32 text-zinc-800 text-[9px] tracking-[0.5em] uppercase">
          Enter the Void — No Refunds
        </div>
      </footer>
    </div>
  );
}

export default Home;
