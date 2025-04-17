import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Heading = () => {
  const { scrollYProgress } = useScroll(); 

  const xRight = useTransform(scrollYProgress, [0, 1], [-140, 600]); 
  const xLeft = useTransform(scrollYProgress, [0, 1], [140, -600]); 

  return (
    <div className="overflow-hidden flex flex-col items-center font-semibold px-4">
      <motion.h1
        className="text-7xl sm:text-[120px] md:text-[190px] leading-none whitespace-nowrap"
        style={{ x: xRight }} 
      >
        How One
      </motion.h1>

      <motion.h1
        className="text-7xl sm:text-[120px] md:text-[190px] leading-none whitespace-nowrap mt-[-10px] sm:mt-[-20px]"
        style={{ x: xLeft }} 
      >
        Sport Works?
      </motion.h1>
    </div>
  );
};

export default Heading;
