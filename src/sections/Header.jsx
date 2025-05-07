import { useEffect, useRef } from "react";
import BM from "../assets/bm1.png";
export default function Header({
  handelActive,
  activeLink,
  isClicked,
  setIsClicked,
  handelClicked,
}) {
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { id: "home", href: "#hero", label: "Home" },
    { id: "about", href: "#about", label: "About" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "contact", href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
          >
            <img src={BM} alt="portfolio" className="w-20" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => handelActive(link.id)}
                    className={`${
                      activeLink === link.id
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    } font-medium text-lg transition-colors duration-300 relative group`}
                  >
                    {link.label}
                    {activeLink === link.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              ref={hamburgerRef}
              onClick={() => handelClicked("home")}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isClicked && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 right-0 w-48 bg-white rounded-lg shadow-lg py-2 transform transition-all duration-300 ease-in-out"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => handelActive(link.id)}
                  className={`${
                    activeLink === link.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  } block px-4 py-2 text-sm font-medium transition-colors duration-300`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
