"use client";
import { motion } from "framer-motion";

type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tech Stack
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-md hover:scale-105 transition-transform duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
