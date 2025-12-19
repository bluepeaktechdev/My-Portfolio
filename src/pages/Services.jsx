import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaServer,
  FaShoppingCart,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Website Development",
    description:
      "Modern, responsive websites built to elevate your brand and convert visitors into customers.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "High performance Android and iOS apps designed for speed, usability and scalability.",
  },
  {
    icon: FaPaintBrush,
    title: "UI / UX Design",
    description:
      "Clean, intuitive designs focused on user experience and visual clarity.",
  },
  {
    icon: FaLaptopCode,
    title: "Graphics Design",
    description:
      "Professional logos, flyers, banners and complete brand identity solutions.",
  },
  {
    icon: FaSearch,
    title: "Video Animation",
    description:
      "Engaging animated videos and motion graphics that communicate your ideas clearly.",
  },
  {
    icon: FaServer,
    title: "Security Solutions",
    description:
      "Reliable security solutions to protect websites, applications and user data.",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Secure, scalable online stores with smooth checkout and payment integration.",
  },
];

/* Container stagger */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

/* Card animation */
const card = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
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

const Services = () => {
  return (
    <section className="min-h-screen bg-[#172C65] px-6 md:px-12 py-24 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 16,
        }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          My <span className="text-yellow-400">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-gray-300"
        >
          I provide high-quality digital services focused on performance,
          usability and real business results.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={card}
              whileTap={{ scale: 0.93 }}
              className="
                bg-slate-900/80
                border border-blue-800
                rounded-2xl
                p-8
                text-center
                relative
                overflow-hidden
              "
            >
              {/* Glow overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to- from-yellow-400/10 to-transparent pointer-events-none"
              />

              {/* Icon */}
              <div className="flex justify-center mb-6 relative z-10">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(250,204,21,0)",
                      "0 0 25px rgba(250,204,21,0.6)",
                      "0 0 0 rgba(250,204,21,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileTap={{ scale: 0.85, rotate: -10 }}
                  className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center"
                >
                  <Icon className="text-3xl text-yellow-400" />
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-xl font-bold mb-3 text-white relative z-10"
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-gray-300 text-sm leading-relaxed relative z-10"
              >
                {item.description}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
