import React from "react";
import Link from "next/link";
import Cyborg from "./ui/Cyborg";
export default function Navbar() {
  return (
    <nav className="bg-penn_blue border-dark_green border-2 border-solid b text-white sticky top-0 text-vanilla z-20">
      <div className="flex justify-between px-4">
        <div className="flex items-center">
          <Cyborg></Cyborg>
          <h1 className="text-xs lg:text-base">Fernando Durban</h1>
        </div>
        <div className="flex items-center gap-4 text-xs lg:text-base">
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#aboutme" className="text-nowrap">
            About Me
          </Link>

          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
