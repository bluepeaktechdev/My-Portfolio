import React from "react";
import { ExternalLink, Github, Code, Monitor, Smartphone } from "lucide-react";

const projects = [
    {
    title: "Tourism Website",
    description:
      "A modern tourism website designed to showcase destinations, travel packages and experiences with a visually engaging layout, smooth navigation and mobile first design for an excellent user experience.",
    tech: ["React", "Tailwind"],
    live: "https://lolade-1.github.io/Tourism/",
    github: "#",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "BluePeak Tech Website",
    description:
      "A modern tech company website built with React, Tailwind CSS, and Vite, focused on performance and clean UI.",
    tech: ["React", "Tailwind", "Vite"],
    live: "#",
    github: "#",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    title: "E-Commerce Landing Page",
    description:
      "High-converting landing page designed to increase sales with clear CTAs and mobile-first layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
    icon: <Smartphone className="w-6 h-6" />,
  },

];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-[#182E6C] text-white px-6 md:px-12 py-20 pt-24 md:pt-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="text-yellow-400">Portfolio</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A selection of projects showcasing clean design, solid functionality,
          and real-world problem solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-900/80 border border-blue-800 rounded-2xl p-6
            transition hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="mb-5">
              <div className="inline-flex p-3 rounded-xl bg-blue-600 text-yellow-400 shadow-md">
                {project.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-800/40 text-gray-200 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-sm text-yellow-400 hover:underline"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
              >
                Code <Github size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a project in mind?
        </h2>
        <p className="text-gray-300 mb-8">
          I’m open to freelance work, collaborations and exciting ideas.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-semibold transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
