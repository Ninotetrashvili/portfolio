"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_z8xxmdu",
        "template_nhbs15l",
        form.current,
        "XsjY566PgaAmSg-L1"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-3xl mx-auto mt-32 p-10 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:bg-gray-900 rounded-2xl shadow-2xl"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 mb-8">
        Contact Me
      </h2>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
        <motion.input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-200 transition-all"
          whileFocus={{ scale: 1.02 }}
          required
        />
        <motion.input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-200 transition-all"
          whileFocus={{ scale: 1.02 }}
          required
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          className="p-4 border border-gray-300 dark:border-gray-600 rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-200 transition-all"
          whileFocus={{ scale: 1.02 }}
          required
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
