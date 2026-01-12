import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-(--bg-secondary) p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <p className="text-(--text-secondary) italic mb-6">
        “{testimonial.message}”
      </p>

      <h4 className="font-semibold text-lg text-(--text-primary)">
        {testimonial.name}
      </h4>

      <span className="text-sm text-(--accent-primary)">
        {testimonial.role}
      </span>
    </div>
  );
};

export default TestimonialCard;
