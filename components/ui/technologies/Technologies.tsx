import React from "react";

interface TechnologiesProps {
  items: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ items }) => {
  return (
    <div className="flex space-x-2 flex-wrap lg:flex-nowrap">
      {items.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-200 text-black rounded px-2 py-1 text-[7px]  m-2"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default Technologies;
