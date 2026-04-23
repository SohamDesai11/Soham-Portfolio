import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="bg-0e0c1e text-gray-400 py-8 border-t border-gray-700 "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <p className="flex items-center justify-center gap-2">
          <span>&copy;</span>
          {currentYear} Soham Desai - Built with coffee & curiosity ☕
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
