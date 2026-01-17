import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ totalItems }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinkStyles = ({ isActive }) =>
    `relative py-1 transition-all duration-500 tracking-[0.2em] ${
      isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
    }`;

  return (
    <nav className="bg-black py-8 sticky top-0 z-50 border-b border-zinc-900">
      <div className="px-12">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl mb-4"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col md:flex-row 
          md:justify-end 
          md:items-center 
          md:space-x-10 
          space-y-4 md:space-y-0 
          text-[10px] uppercase font-bold
        `}>
          <li>
            <NavLink 
              to="/" 
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/shop" 
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about-us" 
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact-us" 
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/cart" 
              className={navLinkStyles}
              onClick={() => setIsOpen(false)}
            >
              Cart
              {totalItems > 0 && (
                <span className="ml-2 font-mono text-zinc-100">
                  ({totalItems})
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;