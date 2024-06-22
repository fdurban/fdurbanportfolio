"use client";
import "./MainText.css";
import React, { useEffect, ReactNode } from "react";
interface MainTextProps {
  children: ReactNode;
}

const MainText: React.FC<MainTextProps> = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation");
    if (elements.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("animation", entry.isIntersecting);
        });
      });

      elements.forEach((element) => observer.observe(element));

      // Cleanup function
      return () => {
        elements.forEach((element) => observer.unobserve(element));
      };
    }
  }, []);
  return (
    <div className="flex justify-center items-center mb-10 mt-6">
      <div className="relative h-fit w-fit">
        <div className="bg-dark_green rounded absolute inset-0 z-10 animation"></div>
        <h1 className="text-4xl lg:text-5xl font-bold text-penn_blue z-0">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default MainText;
