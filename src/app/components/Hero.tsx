"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full mt-24 px-4 sm:px-6 md:px-8 py-16 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Hi, I am Nino Tetrashvili
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl md:text-2xl"
        >
          I am a Front-end Developer creating interactive and user-friendly web
          pages using React, Next.js, and Tailwind CSS.
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          See My Projects
        </motion.a>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 relative h-64 md:h-96">
        <Image
          src="/avatar.jpg"
          alt="Hero Image"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
