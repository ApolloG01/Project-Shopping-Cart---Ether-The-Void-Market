import { Link } from "react-router-dom";
import { useState } from "react"; // Add useState

function Cart({ items, totalItems, dispatch }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const totalPrice = items.reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
        : Number(item.price);
    const qty = Number(item.quantity) || 0;
    return acc + price * qty;
  }, 0);

  // The Success View
  if (isCheckingOut) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-10 animate-pulse">
        <div className="w-16 h-16 bg-white rounded-full mb-8 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-white uppercase tracking-[0.8em] text-sm mb-4">
          Transmission Received
        </h2>
        <p className="text-zinc-500 font-mono text-[10px] mb-12 max-w-xs leading-relaxed">
          Order #{Math.random().toString(36).substr(2, 9).toUpperCase()} has
          been logged into the Ether. Your acquisitions are being materialized.
        </p>
        <Link
          to="/shop"
          onClick={() => dispatch({ type: "clear" })}
          className="bg-white text-black px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:invert transition-all duration-500"
        >
          Return to Market
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-10">
        <h2 className="text-zinc-500 uppercase tracking-[0.5em] text-xs mb-8">
          The void is currently empty
        </h2>
        <Link
          to="/shop"
          className="border border-zinc-800 px-12 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
        >
          Return to Market
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-white">
      <h1 className="text-3xl uppercase tracking-tighter mb-12 font-bold italic">
        Your Acquisitions
        <span className="text-zinc-600 font-mono text-sm ml-4 not-italic">
          / {totalItems} items
        </span>
      </h1>

      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-8 border-b border-zinc-900 pb-8 items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-32 object-cover grayscale"
            />

            <div className="flex-grow">
              <h3 className="uppercase tracking-widest text-sm">{item.name}</h3>
              <p className="text-zinc-500 font-mono text-xs mt-1">
                {item.price} Atoms
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => dispatch({ type: "decrease", payload: item })}
                className="w-8 h-8 border border-zinc-800 hover:bg-white hover:text-black transition-colors"
              >
                -
              </button>
              <span className="font-mono text-xs w-4 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch({ type: "increase", payload: item })}
                className="w-8 h-8 border border-zinc-800 hover:bg-white hover:text-black transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch({ type: "remove", payload: item })}
              className="text-zinc-600 hover:text-red-500 transition-colors uppercase text-[10px] tracking-widest"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-end gap-6">
        <div className="flex justify-between w-full md:w-80 border-t border-zinc-800 pt-6">
          <span className="text-zinc-500 uppercase text-xs tracking-widest">
            Total Value
          </span>
          <span className="font-mono text-xl tabular-nums">
            {totalPrice.toLocaleString()} Atoms
          </span>
        </div>

        {/* Trigger the Success View here */}
        <button
          onClick={() => setIsCheckingOut(true)}
          className="bg-white text-black w-full md:w-80 py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-zinc-300 transition-colors"
        >
          Confirm Transaction
        </button>

        <button
          onClick={() => dispatch({ type: "clear" })}
          className="text-zinc-600 hover:text-white uppercase text-[9px] tracking-[0.4em]"
        >
          Purge All Data
        </button>
      </div>
    </div>
  );
}

export default Cart;
