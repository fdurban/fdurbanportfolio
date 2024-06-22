import React from "react";

interface TechnologiesProps {
  technologies: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="flex space-x-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-200 text-black rounded px-2 py-1 text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default Technologies;
