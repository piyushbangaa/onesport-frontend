import React from "react";

const Navbar = () => {
  return (
    <header className="relative w-full px-6 py-4 flex items-center justify-between">

      <div className="text-white text-2xl font-bold">OneSport</div>

      <nav className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-xl shadow-lg px-6 py-3 rounded-full flex justify-center items-center gap-6 sm:gap-12 md:gap-16 lg:gap-37 w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] min-w-[300px] max-w-[90%] border border-white/20 lg:relative lg:top-0 lg:left-0 lg:translate-x-0">
        <a href="pricing" className="text-white font-semibold hover:text-blue-300 transition">
          Pricing
        </a>
        <a href="#" className="text-white font-semibold hover:text-blue-300 transition">
          Workflow
        </a>
        <a href="#" className="text-white font-semibold hover:text-blue-300 transition">
          Features
        </a>
      </nav>

      <a
        href="/login"
        className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition text-sm sm:text-base"
      >
        Login
      </a>
    </header>
  );
};

export default Navbar;
