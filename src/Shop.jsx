// src/Shop.jsx
import { products } from './data/products';
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div className="p-10">
      <h1 className="mb-12 text-center text-3xl font-light tracking-widest uppercase">
        Current Abstractions
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-500 hover:bg-zinc-900/60"
          >
            {/* Image Area */}
            <div className="mb-6 aspect-square overflow-hidden bg-zinc-800">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>

            {/* Content Area */}
            <h2 className="mb-2 text-xl font-bold tracking-tight">
              {product.name}
            </h2>
            <p className="mb-4 line-clamp-2 h-12 text-sm text-zinc-500">
              {product.description}
            </p>

            <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
              <span className="font-mono text-sm text-zinc-400">
                {product.price} <span className="text-[10px]">FRAGMENTS</span>
              </span>

              {/* Dynamic Link to the Product Detail page */}
              <Link
                to={`/shop/${product.id}`}
                className="border border-zinc-700 px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-black"
              >
                Observe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
