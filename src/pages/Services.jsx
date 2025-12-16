import React, { useEffect } from "react";
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

const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="min-h-screen bg-[#172C65] px-6 md:px-12 py-20 text-white pt-24 md:pt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 fade-in opacity-0 translate-y-6 transition-all duration-1000">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-yellow-400">Services</span>
        </h2>
        <p className="mt-4 text-gray-300">
          I provide high-quality digital services focused on performance,
          usability and real business results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="fade-in opacity-0 translate-y-6 transition-all duration-1000
              bg-slate-900/80 border border-blue-800 rounded-2xl p-8 text-center
              hover:border-yellow-400 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <Icon className="text-3xl text-yellow-400" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
