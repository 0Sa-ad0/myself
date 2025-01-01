"use client"

import { useState, useEffect } from 'react';

const education = [
  { 
    id: 1, 
    degree: 'B.Sc. in Computer Science and Engineering (CSE)', 
    institution: 'American International University-Bangladesh',
    link: 'https://www.aiub.edu/',
    enrollment: 'January 2022 - Present',
    graduation: 'April 2025',
  },
]

export default function Education() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isGraduated = currentDate > new Date('2025-04-30T23:59:59');

  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container w-1/2 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md">
              <p>
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p>
                <strong>Institution:</strong> 
                {edu.institution}
                {edu.link && (
                  <a 
                    href={edu.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 ml-1 hover:underline"
                  >
                    (AIUB)
                  </a>
                )}
              </p>
              {edu.enrollment && (
                <p>
                  <strong>Enrollment:</strong> {edu.enrollment}
                </p>
              )}
              <p>
                <strong>{isGraduated ? 'Graduated' : 'Expected Graduation'}:</strong> {isGraduated ? 'April 2025' : edu.graduation}
              </p>
              {edu.year && (
                <p>
                  <strong>Year:</strong> {edu.year}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

