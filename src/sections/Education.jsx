import React from "react";

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science and Engineering",
      school: "Adama Science And Technology University - ASTU",
      year: "2019 - 2023",
      description:
        "Focused on software development, algorithms, and data structures.",
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      school: "Online Learning Platform",
      year: "2023",
      description: "Intensive training in modern web development technologies.",
    },
    {
      id: 3,
      degree: "AWS Cloud Training",
      school: "AWS Training and Certification",
      year: "2025",
      description: "Intensive training in AWS cloud technologies.",
    },
  ];

  return (
    <div id="education" className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 text-lg">{edu.school}</p>
              </div>
              <span className="text-lg text-gray-500">{edu.year}</span>
            </div>
            <p className="mt-2 text-gray-600">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
