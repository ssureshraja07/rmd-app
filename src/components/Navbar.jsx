import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import logo from "../images/rmd-logo-white.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Products", to: "/products" },
  //{ label: "Our Infrastructure", to: "/infrastructure" },
  { label: "Contact Us", to: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const desktopLink = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium tracking-wide transition-colors
     after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-red-700
     after:transition-all after:duration-300
     ${
       isActive
         ? "text-white after:w-full"
         : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
     }`;

  const mobileLink = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium border-l-4 transition-colors
     ${
       isActive
         ? "border-red-700 bg-gray-800 text-white"
         : "border-transparent text-gray-300 hover:bg-gray-800 hover:text-white hover:border-red-900"
     }`;

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b-2 border-red-800 shadow-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
<Link to="/" className="flex items-center gap-3">
  <img src={logo} alt="RMD Industries" className="h-10 w-auto" />
  <span className="hidden border-l border-gray-600 pl-3 text-sm font-light uppercase tracking-widest text-gray-300 sm:block">
    Industries
  </span>
</Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={desktopLink}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact-us"
            className="bg-red-800 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative flex h-10 w-10 items-center justify-center text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 lg:hidden"
        >
          <span
            className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-gray-900 transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-gray-800" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="py-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={mobileLink}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 pt-2">
            <Link
              to="/contact-us"
              className="block bg-red-800 py-3 text-center font-semibold text-white transition-colors hover:bg-red-900"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}