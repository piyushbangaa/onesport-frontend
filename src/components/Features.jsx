import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const FeatureCard = ({ imageSrc, heading, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="w-full sm:w-[300px] mx-4 md:mx-6"
    >
      <Tilt
        className="w-full h-[260px] bg-black border rounded-lg shadow-xl flex justify-center items-center relative"
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        transitionSpeed={500}
      >
        <img
          src={imageSrc}
          alt="Feature"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-19 left-0 right-0 p-3 bg-opacity-50">
          <h3 className="text-[rgb(226,230,225)] text-3xl font-bold text-center opacity-90">{heading}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[550px] mt-20 px-4 sm:px-6 xl:max-w-[1200px] xl:mx-auto 2xl:max-w-[1280px] 2xl:mx-auto"
    >
      <h1 className="text-5xl font-bold mb-6 text-center mx-6 sm:mx-24">
        Trusted by athletes, teams, and sports enthusiasts for seamless turf and field bookings
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full px-4 md:px-6 mt-16">
        <FeatureCard 
          imageSrc="https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          heading="99.99% Booking Uptime" 
          delay={0.1}
        />
        <FeatureCard 
          imageSrc="https://images.unsplash.com/photo-1602357280104-742c517a1d82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbCUyMGNvdXJ0fGVufDB8fDB8fHww" 
          heading="86% Faster Reservations" 
          delay={0.2}
        />
        <FeatureCard 
          imageSrc="https://images.unsplash.com/photo-1564769353575-73f33a36d84f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlbm5pcyUyMGNvdXJ0fGVufDB8fDB8fHww" 
          heading="70% Peak-Hour Availability" 
          delay={0.3}
        />
      </div>
    </motion.div>
  );
};

export default Features;