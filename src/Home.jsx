import Navbar from './components/Navbar';

function Home() {
  return (
    <div className="grid gap-4 py-16 text-center">
      <h1 className="bg-linear-to-b from-white to-zinc-500 bg-clip-text py-4 text-5xl font-extrabold tracking-widest text-transparent">
        Welcome to Ether...The Void Market
      </h1>
      <h2 className="text-3xl uppercase">
        We sell dreams and supply nightmares.
      </h2>
      <h3 className="text-2xl">Buy Anything and receive Nothing.</h3>
      <p className="mt-4 text-zinc-400">
        All the abstractions you never asked for, to feed your soulless pack of
        meat....
      </p>
      <button className="mx-auto my-6 w-36 rounded-b-4xl bg-black px-2 py-4 text-white transition-colors duration-300 hover:bg-zinc-800">
        Browse the Ether
      </button>
    </div>
  );
}

export default Home;
