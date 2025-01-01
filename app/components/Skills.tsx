'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const coreSkills = [
  'Python', 
  'JavaScript', 
  'C++ (OpenGL)', 
  'Java', 
  'C#', 
  'R', 
  'HTML', 
  'CSS', 
  'PHP', 
  'Tailwind CSS', 
  'React', 
  'Assembly', 
  'PostgreSQL', 
  'PHP Data Objects (PDO)', 
  'Postman API', 
  'Data Analysis', 
  'Stack', 
  'Queue', 
  'Linked List', 
  'Selection Sort', 
  'Bubble Sort', 
  'Counting Sort', 
  'Linear Search', 
  'Binary Search', 
  'Binary Search Tree', 
  'Uniform Cost Search', 
  'Iterative Deepening Depth-First Search', 
  'Insertion Sort', 
  'Merge Sort', 
  'Quick Sort', 
  'Divide-and-Conquer', 
  'Knapsack Problem', 
  'Greedy Algorithm', 
  'A*', 
  'Hill Climbing', 
  'Genetic Algorithms', 
  'Breadth-First Search', 
  'Depth-First Search', 
  'Ubuntu - Shell Script', 
  'Cisco Packet Tracer'
]

const softSkills = [
  'Communication', 
  'Teamwork', 
  'Problem Solving', 
  'Time Management', 
  'Adaptability', 
  'Leadership', 
  'Creativity'
]

const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
}

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        </AnimatedSection>
        
        <div className="mb-12">
          <AnimatedSection delay={0.2}>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Skills</h3>
          </AnimatedSection>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-white rounded-full px-4 py-2 text-gray-700 shadow-lg transition-shadow hover:shadow-xl">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div>
          <AnimatedSection delay={0.4}>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Soft Skills</h3>
          </AnimatedSection>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-white rounded-full px-4 py-2 text-gray-700 shadow-lg transition-shadow hover:shadow-xl">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
 
      </div>
    </section>
  )
}

