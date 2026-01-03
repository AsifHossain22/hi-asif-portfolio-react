import React from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layouts/Footer/Footer";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main - AllSections */}
      <main>
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
