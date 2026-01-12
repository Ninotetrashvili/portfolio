"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-32 py-8 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-200 rounded-t-2xl shadow-inner transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6">
        {/* Copyright */}
        <p className="text-sm sm:text-base font-semibold mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Nino Tetrashvili. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-700 dark:text-gray-200">
          <a
            href="https://github.com/Ninotetrashvili"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nini-tetrashvili-734683172/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:tetrashvili.nini@yahoo.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
