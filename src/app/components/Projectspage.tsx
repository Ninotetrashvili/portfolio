"use client";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React, Next.js, and Tailwind CSS.",
      liveLink: "https://yourportfolio.vercel.app",
      githubLink: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Todo App",
      description:
        "A simple todo app with React, TypeScript, and localStorage support.",
      liveLink: "https://to-do-app-blond-mu-12.vercel.app/",
      githubLink: "https://github.com/yourusername/todo-app",
    },
    {
      title: "Weather App",
      description: "A weather forecast app using OpenWeatherMap API and React.",
      liveLink: "https://weatherapp.example.com",
      githubLink: "https://github.com/yourusername/weather-app",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto mt-32 grid md:grid-cols-3 gap-8 px-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      ))}
    </section>
  );
}
