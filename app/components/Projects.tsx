"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A React-based task manager with drag-and-drop functionality",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather app using OpenWeatherMap API and React",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/yourusername/project3",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            My Projects
          </h2>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform-gpu"
              variants={projectVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
