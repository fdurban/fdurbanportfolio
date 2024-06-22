"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../lib/data";
import Technologies from "./ui/technologies/Technologies";
const Grid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [delayHover, setDelayHover] = useState<null | boolean>(null);
  const [timeId, setTimeId] = useState<NodeJS.Timeout | null>(null);

  const getTranslateClasses = (index: number) => {
    switch (index) {
      case 0:
        return "lg:hover:translate-y-1/2 lg:hover:translate-x-full";
      case 1:
        return "lg:hover:translate-y-1/2";
      case 2:
        return "lg:hover:translate-y-1/2 lg:hover:-translate-x-full";
      case 3:
        return "lg:hover:-translate-y-3/4 lg:hover:translate-x-full";
      case 4:
        return "lg:hover:-translate-y-3/4";
      case 5:
        return "lg:hover:-translate-y-3/4 lg:hover:-translate-x-full";
      default:
        return "";
    }
  };

  const handleMouseEnter = (index: number) => {
    console.log(index);
    const id = setTimeout(() => {
      setDelayHover(true);
    }, 800);
    setTimeId(id);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (timeId) {
      clearTimeout(timeId);
      setTimeId(null);
    }
    setDelayHover(false);
    setHoveredIndex(null);
  };

  useEffect(() => {
    if (delayHover === false) {
      const id = setTimeout(() => {
        setDelayHover(null);
      }, 1000);
      return () => clearTimeout(id);
    }
  }, [delayHover]);

  return (
    <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={` h-full ${
            delayHover
              ? `lg:hover:z-10 lg:hover:scale-x-[2] lg:hover:scale-y-[2] hover:duration-1000 lg:hover:text-[8px] hover:h-fit ${getTranslateClasses(
                  index
                )}`
              : ""
          } ${
            hoveredIndex !== null && hoveredIndex !== index && delayHover
              ? "lg:opacity-0 lg:duration-700"
              : "lg:opacity-100 lg:duration-700"
          }`}
        >
          {hoveredIndex === index ? (
            <video
              src={item.video}
              className=" rounded-t-2xl"
              muted
              autoPlay
              width={1920}
              height={918}
            />
          ) : (
            <Image
              src={item.image}
              width={item.width}
              height={item.height}
              // layout="fill"
              // objectFit="cover"
              alt={item.title}
              className=" rounded-t-2xl"
            />
          )}
          <div className="text-anti_flash_white bg-penn_blue backdrop-blur rounded-b-2xl p-4 w-full bottom-0">
            <div className="flex justify-between items-center flex-nowrap">
              <h1>{item.title}</h1>
              <Technologies items={item.technologies} />
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
