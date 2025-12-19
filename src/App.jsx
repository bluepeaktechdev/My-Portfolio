import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Vision from "./pages/Vision.jsx";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
