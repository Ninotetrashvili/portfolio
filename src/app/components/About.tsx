"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto my-24 p-8 text-center
                 bg-white dark:bg-gray-900 rounded-2xl shadow-lg
                 transition-colors duration-500"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
      >
        About Me
      </motion.h2>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
      >
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-200 text-lg mb-6"
      >
        I am a Front-end Developer passionate about creating interactive and
        user-friendly websites. I mainly work with React, Next.js, and Tailwind
        CSS.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-3 mb-6"
      >
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Call to action */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        See My Projects
      </motion.a>
    </section>
  );
}
