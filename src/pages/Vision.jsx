import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="min-h-full flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-5xl w-full bg-slate-900/70 border border-blue-700/40 rounded-3xl p-10 md:p-14 shadow-2xl backdrop-blur-xl"
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

        <span className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Our Vision
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-8 leading-tight">
          Guiding Progress <span className="text-blue-500">With Clarity</span>
        </h1>

        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Our vision is to empower individuals and organizations to reach
            their highest potential through reliable, well-structured
            technology. We believe progress should be intentional, focused
            and built on clarity rather than complexity.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            BluePeak aims to become a trusted digital partner by delivering
            solutions that are innovative, scalable and designed for long-term
            impact. We guide growth with integrity, precision and a relentless
            commitment to excellence.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Vision;
