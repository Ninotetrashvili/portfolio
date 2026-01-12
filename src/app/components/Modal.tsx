"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  techStack?: string[];
  image?: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  liveLink,
  githubLink,
  techStack,
  image,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Main Modal Container */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        {image && (
          <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
            <motion.div
              className="absolute inset-0 bg-black opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-64px)] px-6 pb-6">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex space-x-4 mb-4">
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

          {/* Close Button */}
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
