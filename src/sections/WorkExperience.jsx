import React from "react";

export default function WorkExperience() {
  const experienceData = [
    {
      id: 1,
      role: "React and Next.js Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Developing and maintaining web applications using React.js and modern web technologies.",
      responsibilities: [
        "Built responsive user interfaces",
        "Implemented state management solutions",
        "Collaborated with cross-functional teams",
      ],
    },
    
      {
        id: 2,
        role: "Technical Support Specialist",
        company: "IT Solutions",
        period: "2022 - 2023",
        description:
          "Provided technical support and troubleshooting for various software applications.",
        responsibilities: [
          "Resolved technical issues",
          "Documented solutions",
          "Trained end-users",
        ],
        
      },
      {
        id: 3,
        role: "AWS Cloud Developer",
        company: "Tech Company",
        period: "2024 - 2025",
        description:
          "Developed and maintained web applications using AWS cloud technologies.",
        responsibilities: [
          "Built responsive user interfaces",
        "Implemented state management solutions",
        "Collaborated with cross-functional teams",
        ],
      }
      
  ];

  return (
    <div id="experience" className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-blue-600 text-lg">{exp.company}</p>
              </div>
              <span className="text-lg text-gray-500">{exp.period}</span>
            </div>
            <p className="mt-2 text-gray-600">{exp.description}</p>
            <ul className="mt-4 space-y-2">
              {exp.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
