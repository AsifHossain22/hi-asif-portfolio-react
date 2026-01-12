import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ui/ServiceCard";
import { serviceData } from "../../data/servicesData";
import { staggerContainer } from "../../hooks/animation";

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* SectionHeader */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-(--accent-primary)">Services</span>
          </h2>
        </motion.div>

        {/* ServiceContainer */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {serviceData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
