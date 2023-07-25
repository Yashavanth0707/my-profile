import React from "react";

const Skills = () => {
  const buttonColor = "#f39c12"; // Set the color for all buttons
  const skillsData = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "SQL",
    "Express js",
    "Git",
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-border">
        {skillsData.map((skill, index) => (
          <button key={index} style={{ backgroundColor: buttonColor }}>
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
