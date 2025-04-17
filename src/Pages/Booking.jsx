import React, { useEffect, useState } from "react";

const Booking = () => { 
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circleStart = Math.max(0, scrollY - 100);
  const circleSize = Math.min(2000, circleStart * 5);

  const textMove =
  scrollY < 100
    ? `translateX(calc(-9vw - ${scrollY}px))`
    : `translateX(calc(-9.4vw - 100px))`;

  const releaseScroll = 450;
  const isFixed = scrollY < releaseScroll;

  const smoothTop = isFixed
    ? "39vh"
    : `${39.5 - (scrollY - releaseScroll) * 0.1}vh`; 

  const circleTextTop = isFixed
    ? "55vh"
    : `${55 - (scrollY - releaseScroll) * 0.1}vh`;

  const textVisibility = Math.min(1, (circleSize - 500) / 500);

  return (
  

    
    <div className="relative w-screen min-h-[310vh] bg-[rgb(226,230,225)] overflow-hidden">
      <div
  className="text-4xl font-semibold w-full z-20 fixed left-0 text-center -mt-50"
  style={{
    top: `calc(39vh + 50px)`, 
    WebkitTextStroke: "2px black",
    opacity: Math.max(0, 1 - (circleSize - 300) / 500), // Fades out as the circle expands
    visibility: circleSize > 800 ? "hidden" : "visible", // Hides it completely when the circle is large
    transition: "opacity 0.2s ease",
  }}
>
  Scroll to book
</div>
      <div
        className="text-9xl font-bold whitespace-nowrap w-full z-20 fixed left-0"
        style={{
          top: smoothTop, 
          transform: textMove,
          WebkitTextStroke: "2px white",
          color: "transparent",
          mixBlendMode: "difference",
          transition: isFixed ? "none" : "top 0.1s linear",
        }}
      >
        Book now Book now Book now Book now Book now Book now Book now Book now
      </div>


      <div
        className="fixed top-1/2 left-1/2 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          transition: "width 0.1s linear, height 0.1s linear",
        }}
      ></div>

      <div
        className="mt-30 text-6xl font-bold text-[rgb(226,230,225)] text-center w-full fixed left-0 z-15"
        style={{
          top: circleTextTop,
          opacity: textVisibility,
          visibility: textVisibility === 0 ? "hidden" : "visible", 
          transition: "opacity 0.2s ease, top 0.1s linear",
        }}
      >
       Pick your sport, book your slot, <br /> and play hassle-free!
        
        <div className="mt-19 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-5">
          {[
            { title: "Football", img: "https://images.unsplash.com/photo-1510526292299-20af3f62d453?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Basketball", img: "https://plus.unsplash.com/premium_photo-1663953003868-3dc5525a1708?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Cricket", img: "https://images.unsplash.com/photo-1563184956-7a02a2852738?q=80&w=2697&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Badminton", img: "https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
          ].map((sport, index) => (
            <div key={index} className="border-2 border-black rounded-2xl relative h-60 w-full overflow-hidden">
              <img 
                src={sport.img} 
                alt={sport.title} 
                className="w-full h-full object-cover"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
                {sport.title}
              </h2>
              <a href="/field" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 border border-amber-50 rounded-2xl text-xl text-white mt-5 px-4 py-1 bg-blue-500">Book a Slot</a>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[200vh]"> </div>
    </div>
  );
};

export default Booking;