import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 1800);
  };

  return (
    <section className="min-h-screen bg-[#132758] text-white px-6 py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 flex justify-center items-center"
      >
        <div className="w-[520px] h-[520px] bg-blue-600/20 blur-[140px] rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Start <span className="text-yellow-400">Your Project</span> Here
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl">
            Let’s build something clean, fast and scalable. Send me a message Now!.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-900/80 backdrop-blur-xl border border-blue-800 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Full Name</label>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" required className="contact-input" />
              <input type="text" placeholder="Last Name" required className="contact-input" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Email Address</label>
            <input type="email" placeholder="yourname@gmail.com" required className="contact-input" />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="contact-input resize-none"
            />
          </div>

          {/* Status */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle size={18} /> Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={18} /> Something went wrong.
            </div>
          )}

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "loading"}
            type="submit"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-semibold shadow-xl shadow-blue-600/40 transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
            <Send size={18} />
          </motion.button>
        </motion.form>
      </div>

      {/* Shared Input Style */}
      <style>{`
        .contact-input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.75rem;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(30, 64, 175, 0.6);
          color: white;
          outline: none;
          transition: all 0.25s ease;
        }
        .contact-input::placeholder {
          color: #9ca3af;
        }
        .contact-input:focus {
          border-color: #facc15;
          box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.35);
        }
      `}</style>
    </section>
  );
}
