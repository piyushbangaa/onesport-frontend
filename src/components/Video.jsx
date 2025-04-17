import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="mt-20 relative w-screen h-screen bg-black p-[30px] box-border overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => console.error("Video failed to load", e)}
      >
<source src="/video.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pb-28"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg opacity-90">
          One Sport
        </motion.h1>
        <motion.h2 className="text-lg md:text-2xl font-semibold mt-2 drop-shadow-lg opacity-80">
          Your One Solution to Excellence!
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Video;
