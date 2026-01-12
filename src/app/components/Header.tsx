"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const menuItems = ["Home", "About", "Projects"];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 
        ${
          isDark
            ? "bg-gray-900"
            : "bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400"
        }
        text-white transition-colors duration-500 shadow-md`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-outfit text-4xl font-bold">Nino Tetrashvili</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-3 py-2 rounded-md transition-colors duration-300
                text-white dark:text-gray-200 
                hover:bg-white/20 dark:hover:bg-gray-700/50`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-4 py-2 rounded-xl transition 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100"
                  : "bg-white text-indigo-600"
              } 
              hover:opacity-90`}
          >
            Contact
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 text-white dark:text-gray-200"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white dark:text-gray-200"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 dark:bg-gray-800 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-lg font-semibold hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-4 py-2 rounded-xl transition 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100"
                  : "bg-white text-indigo-600"
              } 
              hover:opacity-90`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="mt-2 text-white dark:text-gray-200"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
