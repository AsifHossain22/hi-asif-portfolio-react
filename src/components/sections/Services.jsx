import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaServer,
  FaPlug,
  FaTachometerAlt,
  FaTools,
} from "react-icons/fa";
import ServiceCard from "../ui/ServiceCard";
import { serviceData } from "../../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="min-h-screen pt-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
