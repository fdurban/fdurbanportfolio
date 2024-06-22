import React from "react";

interface TechnologiesProps {
  items: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap">
      {items.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-200 text-black rounded p-1 text-[7px] m-1 2xl:text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default Technologies;
