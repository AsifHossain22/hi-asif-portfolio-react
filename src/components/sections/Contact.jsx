// EmailJS
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  // SendEmailToMyEmailAccountUsingEmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    if (formRef.current.honeypot.value) return;

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_ws3j65a",
        "template_mu37ufb",
        formRef.current,
        "rupGvam0VS5bgsv79"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        {/* SectionHeader */}
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-16">
          Get In <span className="text-(--accent-primary)">Touch</span>
        </h2>

        {/* FormContainer */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LeftColumn */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">
              <span className="text-(--accent-primary)">Let’s build</span>{" "}
              something great together
            </h3>

            <p className="text-(--text-secondary) text-lg leading-relaxed">
              I’m open to freelance work, full-time roles and exciting
              collaborations. If you have a project, idea or opportunity — feel
              free to reach out.
            </p>

            <div className="space-y-4 text-lg">
              <p>
                <span className="font-medium text-(--accent-primary)">
                  Email:
                </span>{" "}
                only1asif4you22@gmail.com
              </p>

              <p>
                <span className="font-medium text-(--accent-primary)">
                  Phone:
                </span>{" "}
                +971 52 881 0727
              </p>

              <p>
                <span className="font-medium text-(--accent-primary)">
                  Location:
                </span>{" "}
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          {/* RighColumn - Form */}
          <div className="w-full bg-(--bg-secondary) rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <p className="text-xl text-(--text-secondary) mt-2 flex flex-col gap-2 lg:flex-row">
                <span>Have a project or idea?</span>
                <span className="text-(--accent-primary)">Let’s talk.</span>
              </p>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <input type="text" name="honeypot" className="hidden" />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="contact-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="contact-input"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="contact-input"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="contact-input resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  cursor-pointer
                  w-full flex items-center justify-center gap-2
                  bg-(--accent-primary) border-2 border-(--accent-primary)
                  text-(--text-primary) hover:text-(--accent-primary)
                  py-3 rounded-lg font-medium
                  hover:bg-transparent transition-all duration-300
                "
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center text-sm">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-center text-sm">
                  Something went wrong. Try again!
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
