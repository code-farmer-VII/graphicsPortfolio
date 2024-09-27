"use client"; // Add this at the top for client-side rendering

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const pathname = usePathname();

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle theme and update local storage
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Apply saved theme from local storage on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setIsDarkTheme(isDark);
    if (isDark) {
      document.body.classList.add("dark-theme");
    }
  }, []);

  const links = [
    { href: '/#about', label: 'About' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="navBar shadow fixed top-0 left-0 right-0 border-b border-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="#" className="hover:text-purple-600">YourLogo</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-3 hover:text-purple-600 transition-colors relative block after:block after:absolute 
                after:left-0 after:h-0.5 after:bg-purple-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition 
                after:duration-300 after:origin-right ${
                  pathname === href ? 'after:scale-x-100 after:origin-right' : 'after:scale-x-0 after:origin-left'
                }`}
            >
              {label}
            </Link>
          ))}
          <button onClick={toggleTheme} className="theme-toggle-btn p-2" aria-label="Toggle Day/Night Mode">
            {isDarkTheme ? (
              <Moon className="w-5 h-5 text-gray-500" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <button onClick={toggleTheme} className="theme-toggle-btn p-2" aria-label="Toggle Day/Night Mode">
            {isDarkTheme ? (
              <Moon className="w-5 h-5 text-gray-500" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 hover:text-purple-600 transition-colors relative after:block after:absolute 
                after:left-0 after:h-0.5 after:bg-purple-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition 
                after:duration-300 after:origin-right ${
                  pathname === href ? 'after:scale-x-100 after:origin-right' : 'after:scale-x-0 after:origin-left'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
