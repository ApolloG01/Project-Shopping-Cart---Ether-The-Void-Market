import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data/products";
import { motion } from "framer-motion";
import { useState } from "react";

function ProductDetail({ items, dispatch }) {
  const [localQty, setLocalQty] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product)
    return (
      <div className="text-white p-20 text-center uppercase tracking-widest">
        Transmission Lost
      </div>
    );

  const handleAcquisition = () => {
    dispatch({ type: "add", payload: { ...product, quantity: localQty } });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <motion.img
            layoutId={`product-img-${product.id}`}
            src={product.image}
            className="w-full aspect-square object-cover border border-zinc-900 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="md:w-1/2 space-y-10">
          <div>
            <span className="text-zinc-600 text-xs tracking-[0.5em] uppercase">
              Fragment // {product.id}
            </span>
            <h1 className="text-6xl font-bold tracking-tighter uppercase mt-2">
              {product.name}
            </h1>
          </div>

          <p className="text-zinc-400 text-lg font-light italic leading-relaxed">
            "{product.description}"
          </p>

          <p className="text-3xl font-mono">
            {product.price} <span className="text-xs text-zinc-500">ATOMS</span>
          </p>

          <div className="flex items-center gap-6 py-6 border-y border-zinc-900">
            <button
              onClick={() => setLocalQty(Math.max(1, localQty - 1))}
              className="w-10 h-10 border border-zinc-800 hover:bg-white hover:text-black"
            >
              -
            </button>
            <span className="font-mono text-xl">{localQty}</span>
            <button
              onClick={() => setLocalQty(localQty + 1)}
              className="w-10 h-10 border border-zinc-800 hover:bg-white hover:text-black"
            >
              +
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleAcquisition}
              className={`py-5 uppercase text-xs font-bold tracking-[0.4em] transition-all duration-500 ${
                isAdded
                  ? "bg-zinc-500"
                  : "bg-white text-black hover:bg-zinc-300"
              }`}
            >
              {isAdded ? "Added to Cart" : "Initialize Acquisition"}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white pt-4"
            >
              ← Step Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
