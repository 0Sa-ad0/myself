"use client";

import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai"; // Import mail icon from react-icons
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        </AnimatedSection>

        <motion.div
          className="max-w-md mx-auto flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:pro.saaad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg text-blue-600 hover:text-blue-800 transition-all duration-300"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <AiOutlineMail className="text-3xl" />
            <span>pro.saaad@gmail.com</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

