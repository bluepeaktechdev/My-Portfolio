import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose, MdDownloadForOffline, MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import BluePeak from "../assets/BluePeak.png";
import MobileSocials from "./MobileSocials";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Vision", to: "/vision" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen bg-slate-900 border-r border-blue-800 flex-col justify-between p-6">
        {/* Top */}
        <div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center mb-3 shadow-lg">
              <img
                src={BluePeak}
                alt="BluePeak Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h2 className="text-white font-bold text-lg">BluePeak Tech</h2>
            <p className="text-gray-400 text-sm">Digital Solutions</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3 mt-10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-6 py-3 rounded-lg text-center font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-300 hover:bg-blue-700 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div>
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">
            Connect with me here
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://github.com/bluepeaktechdev"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bluepeak-tech-4141773a1/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/bluepeaktech.dev/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61575157475977"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/2348149146262"
              target="_blank"
              rel="noreferrer"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:bluepeaktech.dev@gmail.com"
              className="social-icon"
            >
              <MdEmail />
            </a>
          </div>

          <a
            href="/cv.pdf"
            className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 py-3 rounded-full flex items-center justify-center gap-2 font-semibold transition"
          >
            Download CV <MdDownloadForOffline size={20} />
          </a>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-blue-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={BluePeak} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="text-white font-bold text-lg">BluePeak Tech</span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white text-2xl">
          {open ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-slate-900 p-6 flex flex-col gap-4 z-40">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 rounded-lg text-center transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-blue-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Socials */}
          <MobileSocials closeMenu={() => setOpen(false)} />

          <a
            href="/cv.pdf"
            className="bg-yellow-400 text-slate-900 py-3 rounded-full text-center font-semibold"
          >
            Download CV
          </a>
        </div>
      )}

      {/* Local Styles */}
      <style>{`
        .social-icon {
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.45);
          color: #93c5fd;
          font-size: 1.1rem;
          transition: all 0.35s ease;
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.08);
          background: rgba(250, 204, 21, 0.15);
          color: #facc15;
          border-color: #facc15;
          box-shadow: 0 0 18px rgba(250, 204, 21, 0.6);
        }

        .social-icon.whatsapp:hover {
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
          border-color: #22c55e;
          box-shadow: 0 0 18px rgba(34, 197, 94, 0.6);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
