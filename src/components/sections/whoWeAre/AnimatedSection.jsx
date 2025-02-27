"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({ children, className }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
