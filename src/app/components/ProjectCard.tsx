"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "./Modal";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  liveLink?: string;
  githubLink?: string;
  techStack?: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubLink,
  techStack,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 h-full flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        {/* Image */}
        {image && (
          <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-2xl">
            <Image src={image} alt={title} fill className="object-cover" />
            <motion.div
              className="absolute inset-0 bg-black opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-3 mt-auto">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-2 rounded-full text-center shadow-md hover:shadow-lg transition-all"
              >
                See Live
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-gray-700 to-black text-white font-semibold py-2 rounded-full text-center shadow-md hover:shadow-lg transition-all"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        liveLink={liveLink}
        githubLink={githubLink}
        techStack={techStack}
        image={image}
      />
    </>
  );
}
