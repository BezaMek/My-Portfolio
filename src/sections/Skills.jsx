import React from "react";

export default function Skills() {
  const skillsData = {
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
    ui: [
      { name: "Figma", level: 75 },
      { name: "canva", level: 85 },
      
    ],
    tools: [
      { name: "Git", level: 80 },
      { name: "VS Code", level: 90 },
      
    ],
  };

  const SkillBar = ({ name, level }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-lg font-medium text-gray-700">{name}</span>
        <span className="text-lg text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div id="skills" className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Frontend</h3>
          <div className="space-y-4">
            {skillsData.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">UI/UX</h3>
          <div className="space-y-4">
            {skillsData.ui.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Tools</h3>
          <div className="space-y-4">
            {skillsData.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
