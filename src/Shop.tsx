import { products } from "./data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Shop({ dispatch, items }) {
  return (
    <div className="p-10">
      <h1 className="mb-12 text-center text-3xl font-light tracking-widest uppercase">
        Our Abstractions
      </h1>

      {/* The Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Link to={`/shop/${product.id}`}>
              <div className="relative bg-zinc-900 aspect-3/4 mb-4">
                <motion.img
                  layoutId={`product-img-${product.id}`}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover ..."
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white uppercase tracking-widest text-xs border border-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    Feel it
                  </span>
                </div>
              </div>
            </Link>

            <h3 className="text-xl tracking-tighter uppercase font-bold text-zinc-200">
              {product.name}
            </h3>

            <div className="flex items-center justify-between mt-1">
              <p className="text-zinc-500 text-sm">{product.price} Atoms</p>
              <button
                className="border border-zinc-700 text-zinc-400 px-4 py-1 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => {
                  console.log(product.id);
                  dispatch({ type: "add", payload: product });
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
