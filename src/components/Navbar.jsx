import { NavLink } from 'react-router-dom';
import Home from '../Home';
import Shop from '../Shop';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import Cart from '../Cart';

function Navbar() {
  // Helper to keep the JSX clean
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? 'rounded bg-zinc-500 px-3 py-1 transition-colors'
      : 'px-3 py-1 hover:text-zinc-400 transition-colors';

  return (
    <nav className="bg-slate-950 py-6">
      <ul className="flex justify-end space-x-8 px-12 text-xl text-white">
        <li>
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={navLinkStyles}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className={navLinkStyles}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={navLinkStyles}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={navLinkStyles}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
