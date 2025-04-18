import React from 'react';
import Navbar from '../components/navbar';

const FeatureItem = ({ text, included }) => (
  <li className="flex items-center">
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" />
      {included ? (
        <path d="M8 12L11 15L16 9" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M8 8L16 16M16 8L8 16" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
    {text}
  </li>
);

const PlanCard = ({ title, price, features, buttonText }) => (
  <div className="flex flex-col items-center text-center mt-5">
    <h1 className="text-xl opacity-70">{title}</h1>
    <h1 className="text-6xl mt-3 font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
      ₹{price}<span className="text-gray-400 text-xl font-light">/month</span>
    </h1>
    <ul className="mt-5 text-lg text-left space-y-3 opacity-70">
      {features.map((feature, idx) => (
        <FeatureItem key={idx} text={feature.text} included={feature.included} />
      ))}
    </ul>
    <button className="mt-7 border border-white w-70 h-10 rounded-[5px] font-semibold bg-white text-black text-lg cursor-pointer">
      {buttonText}
    </button>
  </div>
);

const Pricing = () => {
  const practiceFeatures = [
    { text: '3 active bookings at a time', included: true },
    { text: 'No booking discounts', included: false },
    { text: 'Reschedule 2 times/month', included: true },
    { text: 'Standard check-in process', included: true },
  ];

  const proFeatures = [
    { text: 'Unlimited active bookings', included: true },
    { text: '10% booking discount', included: true },
    { text: 'Unlimited reschedules', included: true },
    { text: 'Express check-in with QR code', included: true },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen -mt-10">
        <div className="relative inline-flex h-98 w-170 overflow-hidden rounded-[20px] p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          
          <div className="inline-flex h-full w-full rounded-[20px] bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl relative">
            <div className="grid grid-cols-2 w-full h-full">
              <PlanCard title="Practice" price="0" features={practiceFeatures} buttonText="Try Now" />
              <PlanCard title="ProPlay" price="299" features={proFeatures} buttonText="Go Premium" />
            </div>
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-900 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
