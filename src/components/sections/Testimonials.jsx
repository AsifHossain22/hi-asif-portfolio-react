import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { testimonialsData } from "../../data/testimonialData";
import TestimonialCard from "../ui/TestimonialCard ";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-28">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* SectionHeader */}
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-12">
          What People <span className="text-(--accent-primary)">Say</span>
        </h2>

        {/* TestimonialSlider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </motion.div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
