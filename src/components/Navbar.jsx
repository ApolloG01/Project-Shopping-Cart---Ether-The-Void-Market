import { NavLink } from "react-router-dom";

function Navbar({ totalItems }) {
  // Minimalist active style: White text for active, zinc for inactive
  const navLinkStyles = ({ isActive }) =>
    `relative py-1 transition-all duration-500 tracking-[0.2em] ${
      isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
    }`;

  return (
    <nav className="bg-black py-8 sticky top-0 z-50 border-b border-zinc-900">
      <ul className="flex justify-end items-center space-x-10 px-12 text-[10px] uppercase font-bold">
        <li>
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={navLinkStyles}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={navLinkStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className={navLinkStyles}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={navLinkStyles}>
            Cart
            {/* The Count: only shows if items > 0 */}
            {totalItems > 0 && (
              <span className="ml-2 font-mono text-zinc-100">
                ({totalItems})
              </span>
            )}
            {/* Optional: A small underline that only appears on 'Cart' if active */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
