import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Monitor, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Tourism Website",
    description:
      "A modern tourism website designed to showcase destinations, travel packages and experiences with a visually engaging layout, smooth navigation and mobile first design.",
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

/* Container stagger */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

/* Card animation */
const card = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-[#182E6C] text-white px-6 md:px-12 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80 }}
        className="max-w-6xl mx-auto mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="text-yellow-400">Portfolio</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A selection of projects showcasing clean design, solid functionality,
          and real-world problem solving.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.35)",
            }}
            whileTap={{ scale: 0.94 }}
            className="relative bg-slate-900/80 border border-blue-800 rounded-2xl p-6 overflow-hidden"
          >
            {/* Glow overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to- from-yellow-400/10 to-transparent pointer-events-none"
            />

            {/* Icon */}
            <div className="mb-5 relative z-10">
              <motion.div
                whileTap={{ scale: 0.85, rotate: -8 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(250,204,21,0)",
                    "0 0 18px rgba(250,204,21,0.5)",
                    "0 0 0 rgba(250,204,21,0)",
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex p-3 rounded-xl bg-blue-600 text-yellow-400 shadow-md"
              >
                {project.icon}
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 relative z-10">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed relative z-10">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
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
            <div className="flex gap-4 relative z-10">
              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-sm text-yellow-400"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                Code <Github size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70 }}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a project in mind?
        </h2>
        <p className="text-gray-300 mb-8">
          I’m open to freelance work, remote work, collaborations and exciting ideas.
        </p>
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-blue-600 text-white px-10 py-3 rounded-full font-semibold"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Portfolio;
