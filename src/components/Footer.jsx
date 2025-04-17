import React from "react";
import { TextHoverEffect } from "./TextHoverEffect";

export default function TextHoverEffectDemo() {
  return (
    <div className="min-h-[350px] flex flex-col justify-center items-center w-full px-4">
      <div className="flex justify-center w-full ml-135">
        <TextHoverEffect 
          text="OneSport" 
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter" 
        />
      </div>
      <footer className="w-full text-white text-center py-4 mt-2 sm:mt-4">
        <p className="mt-1 text-[16px] sm:text-[20px] opacity-70">Designed by <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full text-blue-500"><a href="https://www.linkedin.com/in/piyushbanga/">Piyush Banga</a></span></p>
      </footer>
    </div>
  );
}