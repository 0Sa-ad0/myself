"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const [showStatic] = useState(true);

  return (
    <section id="certifications" className="py-20">
      <div className="container w-1/2 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>

        {showStatic && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-8 bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold text-lg mb-2">
              IEEE Student Professional Awareness Venture{' '}
              <a
                href="https://www.aiub.edu/ieee-student-professional-awareness-venture-spave-60"
                target="_blank"
                className="text-blue-500 underline hover:text-blue-700"
                style={{ textDecoration: 'none' }}
              >
                (SPAVe) 6.0
              </a>
            </h3>
            <p>
              <strong>Event:</strong> IEEE Student Professional Awareness Venture
            </p>
            <p>
              <strong>Date:</strong> March 16th, 2023
            </p>
            <p>
              <strong>Role:</strong> Participant
            </p>
            <p>
              <strong>Certified by:</strong>{' '}
              <a
                href="https://ieeeaiubsb.com/"
                target="_blank"
                className="text-blue-500 underline hover:text-blue-700"
                style={{ textDecoration: 'none' }}
              >
                IEEE AIUB
              </a>{' '}
              Student Branch
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

