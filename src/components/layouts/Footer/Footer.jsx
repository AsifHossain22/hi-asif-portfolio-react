import logo from "../../../assets/logos/hi-asif-logo.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative mt-24 py-12 border-t border-(--border-color) bg-(--bg-secondary) footer"
    >
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* FooterTop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo */}
          <div className="space-y-4">
            <a href="#home">
              <img src={logo} alt="Hi ASIF Logo" className="w-45" />
            </a>
            <p className="text-sm text-(--text-secondary) leading-relaxed pt-5">
              Building modern, scalable and performant web applications with
              React & MERN stack.
            </p>
          </div>

          {/* QuickLinks */}
          <div>
            <h4 className="font-semibold mb-4 text-(--text-primary)">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item} className="font-medium">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-(--text-secondary) hover:text-(--accent-primary) transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SocialMediaLinks */}
          <div>
            <h4 className="font-semibold mb-4 text-(--text-primary)">
              Connect
            </h4>

            <div className="flex gap-4">
              <FooterIcon
                href="https://github.com/AsifHossain22"
                target="_blank"
                icon={<FaGithub />}
              />
              <FooterIcon
                href="https://www.linkedin.com/in/asifhossain22"
                target="_blank"
                icon={<FaLinkedin />}
              />
              <FooterIcon
                href="https://x.com/_AsifHossain22"
                target="_blank"
                icon={<FaTwitter />}
              />
              <FooterIcon
                href="mailto:only1asif4you22@gmail.com"
                icon={<FiMail />}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-(--border-color)" />

        {/* Bottom */}
        <div className="text-sm text-(--text-secondary) text-center py-10">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-(--accent-primary)">Hi ASIF</span>
            . All rights reserved.
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

const FooterIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      h-10 w-10
      flex items-center justify-center
      rounded-xl
      bg-(--bg-surface)
      text-(--text-primary)
      border border-(--border-color)
      transition-all duration-300
      hover:text-(--accent-primary)
      hover:scale-110
      hover:shadow-lg
    "
  >
    {icon}
  </a>
);

export default Footer;
