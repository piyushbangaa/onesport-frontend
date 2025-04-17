import React from "react";

const Herosection = () => {
  return ( 
    <div className="min-h-[570px] px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center">
      <div className="mt-20 md:mt-24 min-h-[160px] text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
        Your path to <span className="bg-gradient-to-r from-blue-200 to-blue-500 text-transparent bg-clip-text">effortless</span><br /> sports bookings!
      </div>

      <div className="min-h-[80px] text-center mt-5 text-lg sm:text-xl md:text-2xl opacity-60 px-4">
        Easily find, book, and play on top sports turfs & fields without hassle, <br className="hidden sm:block" /> anytime, anywhere—just focus on the game.
      </div>

      <div className="flex justify-center">
        <a className="border rounded-3xl px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-100 to-blue-300 text-black hover:text-gray-800 mt-6" href="/booking">
          Book Now
        </a>
      </div>

      <div className="h-10 sm:h-20"></div>
    </div>
  );
};

export default Herosection;
