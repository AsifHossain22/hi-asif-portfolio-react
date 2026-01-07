import React, { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/layouts/Footer/Footer";
import MobileNav from "../components/layouts/Navbar/MobileNav";
import Loader from "../components/ui/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main - AllSections */}
      <main className="w-[90%] max-w-7xl mx-auto">
        {/* Hero */}
        <Hero />

        {/* TODO: About */}
        <About />

        {/* TODO: Skills */}
        <Skills />

        {/* TODO: Projects */}
        <Projects />

        {/* TODO: Testimonial */}
        <Testimonials />

        {/* TODO: Contact */}
        <Contact />
      </main>

      {/* MobileMenu */}
      <MobileNav />

      {/* TODO: Footer */}
      <Footer />
    </>
  );
};

export default App;
