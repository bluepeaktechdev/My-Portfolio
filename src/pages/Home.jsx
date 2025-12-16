import React from "react";
import { Typewriter } from "react-simple-typewriter";
import mainImage from "../assets/my1.jpg";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#132758] flex items-center px-6 md:px-12 pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-yellow-400">Amao Ololade Yusuff</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl text-gray-200">
            <Typewriter
              words={[
                "Full-stack Developer",
                "Founder of BluePeak Tech",
                "Building Digital Solutions",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            I build fast, responsive and scalable web applications focused on
            clean design, performance and real business results.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-full font-semibold transition"
            >
              Contact Me
            </a>

            <a
              href="/cv.pdf"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 px-7 py-3 rounded-full font-semibold transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/30 rounded-full blur-3xl"></div>
            <img
              src={mainImage}
              alt="Amao Ololade Yusuff"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-yellow-400 shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
