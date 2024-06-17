"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../lib/data";

const Grid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  const getTranslateClasses = (index: number) => {
    switch (index) {
      case 0:
        return "lg:hover:translate-y-1/2 lg:hover:translate-x-full";
      case 1:
        return "lg:hover:translate-y-1/2";
      case 2:
        return "lg:hover:translate-y-1/2 lg:hover:-translate-x-full";
      case 3:
        return "lg:hover:-translate-y-1/2 lg:hover:translate-x-full";
      case 4:
        return "lg:hover:-translate-y-1/2";
      case 5:
        return "lg:hover:-translate-y-1/2 lg:hover:-translate-x-full";
      default:
        return "";
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-6 xl:grid-cols-3 xl:grid-rows-2 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`lg:hover:z-10 lg:hover:scale-x-[2] lg:hover:scale-y-[2] duration-1000 ${getTranslateClasses(
            index
          )} ${
            hoveredIndex !== null && hoveredIndex !== index
              ? "lg:opacity-0 lg:duration-300"
              : ""
          }`}
        >
          {hoveredIndex === index ? (
            <video
              src={item.video}
              className="rounded-t-2xl"
              muted
              preload="auto"
              autoPlay
              width={1920}
              height={918}
            />
          ) : (
            <Image
              src={item.image}
              width={item.width}
              height={item.height}
              alt={item.title}
              className="rounded-t-2xl"
            />
          )}
          <div className="text-anti_flash_white bg-penn_blue rounded-b-2xl p-4 w-full  bottom-0">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
