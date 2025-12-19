import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-full flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl w-full bg-slate-900/70 border border-blue-700/40 rounded-3xl p-10 md:p-14 shadow-2xl backdrop-blur-xl"
      >
        {/* Soft background glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Label */}
        <span className="text-yellow-400 uppercase tracking-[0.35em] text-sm font-semibold">
          About BluePeak
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-8 leading-tight">
          Progress Is an <span className="text-blue-500">Upward Journey</span>
        </h1>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            BluePeak is a technology brand built on the belief that progress is
            achieved through clarity, structure and disciplined execution.
            We help ideas, products and businesses rise above complexity by
            combining strategic thinking with trusted technology.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our name represents our commitment to excellence, reaching the peak
            not by chance but through innovation, precision and purpose.
            At BluePeak, we build reliable digital solutions that are scalable,
            resilient and designed to support long-term growth.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            We don’t just deliver technology. We transform vision into
            measurable success by guiding progress with integrity and a
            constant focus on quality.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
