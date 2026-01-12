"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "SASS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "API",
  "Redux",
];

const projects = [
  {
    title: "Movie Search App",
    description: "A responsive web app that lets users search for movies",
    liveLink: "https://movie-search-app-ten-lac.vercel.app/",
    githubLink: "https://github.com/Ninotetrashvili/Movie-Search-App",
    techStack: ["React", "Next.js", "Tailwind", "TypeScript"],
    image: "/movie.jpg",
  },
  {
    title: "Todo App",
    description: "A simple todo app with React and localStorage.",
    liveLink: "https://to-do-app-blond-mu-12.vercel.app/",
    githubLink: "https://github.com/Ninotetrashvili/To-do-App",
    techStack: ["React", "TypeScript", "CSS"],
    image: "/to-do.jpg",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using OpenWeatherMap API.",
    liveLink: "https://weather-app-m8xy.vercel.app",
    githubLink: "https://github.com/Ninotetrashvili/Weather-App#",
    techStack: ["React", "API", "Tailwind"],
    image: "/weather.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 md:px-8 scroll-smooth">
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills skills={skills} />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <section id="projects" className="w-full max-w-6xl py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
            My Projects
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                  techStack={project.techStack}
                  image={project.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
