import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { Calendar, Clock, Activity, Users, Map, TrendingUp, Zap, Play } from 'lucide-react';

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const pieData = [
    { name: 'Wins', value: 8 },
    { name: 'Losses', value: 4 },
  ];
  
  const activityData = [
    { name: 'Mon', matches: 1 },
    { name: 'Tue', matches: 0 },
    { name: 'Wed', matches: 3 },
    { name: 'Thu', matches: 2 },
    { name: 'Fri', matches: 1 },
    { name: 'Sat', matches: 3 },
    { name: 'Sun', matches: 2 },
  ];
  
  const fieldData = [
    { name: 'Victory Field', rating: 4.8, bookings: 120 },
    { name: 'Champions Arena', rating: 4.7, bookings: 95 },
    { name: 'Golden Turf', rating: 4.5, bookings: 85 },
    { name: 'Pro Stadium', rating: 4.9, bookings: 140 },
  ];
  
  const COLORS = ['#3b82f6', '#1e293b'];
  
  const [isBookingExpanded, setIsBookingExpanded] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  
  // Time slots for booking
  const timeSlots = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM', '9:00 PM'];

  const handlePieEnter = (_, index) => {
    setActiveIndex(index);
  };
  
  const toggleBookingExpanded = () => {
    setIsBookingExpanded(!isBookingExpanded);
  };
  
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
        <Zap className="text-blue-500" size={20} />
        Welcome Back
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4">
        {/* Upcoming Booking */}
        
        <div className="rounded-lg p-5 flex flex-col justify-between bg-black border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 overflow-hidden col-span-1 md:col-span-2 row-span-1 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <Calendar className="text-gray-400" size={18} />
              <h2 className="text-lg font-medium text-white">Upcoming Booking</h2>
            </div>
            <div className="mt-3 flex items-center gap-3 text-gray-400">
              <Clock size={16} />
              <p>Saturday, 20th April at 5:00 PM</p>
            </div>
            <div className="mt-2 text-gray-500">
              <p>Victory Field • 5-a-side • 90 minutes</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors flex items-center gap-1">
                <Play size={14} /> Details
              </button>
              <button className="bg-black text-gray-400 px-3 py-1 rounded text-sm font-medium hover:text-white transition-colors border border-gray-800">
                Reschedule
              </button>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="rounded-lg p-5 flex flex-col justify-between bg-black border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 overflow-hidden col-span-1 row-span-2">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-gray-400" size={18} />
              <h2 className="text-lg font-medium text-white">Quick Stats</h2>
            </div>
            <p className="text-gray-500 mt-2 text-sm">Performance this month:</p>
            
            <div className="h-40 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={36}
                    outerRadius={60}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    onMouseEnter={handlePieEnter}
                    strokeWidth={0}
                  >
                    {pieData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                        stroke="none"
                      />
                    ))}
                  </Pie>
                    <Tooltip 
                     contentStyle={{
                     backgroundColor: '#111',
                     borderColor: '#333',
                     borderRadius: '4px',
                     color: '#fff'
                    }}
                    itemStyle={{ color: '#fff' }}
                     labelStyle={{ color: '#fff' }}
                        />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-400">8 Wins</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                  <span className="text-gray-400">4 Losses</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-3">12 Total Matches</p>
            </div>
          </div>
          
          <div className="mt-4">
            <button className="bg-black w-full text-gray-300 px-3 py-1 rounded text-sm font-medium hover:text-white transition-colors border border-gray-800 flex items-center justify-center gap-1">
              <Activity size={14} /> View Stats
            </button>
          </div>
        </div>
        
        {/* Book a Turf */}
        <div className={`rounded-lg p-5 flex flex-col justify-between bg-black border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 overflow-hidden col-span-1 row-span-2 ${isBookingExpanded ? 'md:col-span-2' : ''}`}>
          <div>
            <div className="flex items-center gap-2">
              <Map className="text-gray-400" size={18} />
              <h2 className="text-lg font-medium text-white">Book a Turf</h2>
            </div>
            
            {!isBookingExpanded ? (
              <>
                <p className="text-gray-500 mt-2 text-sm">Quick reservation</p>
                <div className="mt-4 space-y-2">
                  {['Victory Field', 'Champions Arena', 'Golden Turf'].map((field, idx) => (
                    <div 
                      key={idx}
                      className="p-2 rounded bg-black hover:bg-gray-900 cursor-pointer transition-colors flex justify-between items-center border border-gray-800"
                      onClick={() => {
                        setSelectedField(field);
                        toggleBookingExpanded();
                      }}
                    >
                      <span className="text-gray-300 text-sm">{field}</span>
                      <span className="text-xs bg-gray-900 text-blue-400 px-2 py-px rounded">Available</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-3">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-white">{selectedField}</h3>
                  <button 
                    onClick={toggleBookingExpanded}
                    className="text-gray-500 hover:text-white text-sm"
                  >
                    ← Back
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {timeSlots.map((time, idx) => (
                    <div 
                      key={idx}
                      className={`p-1 text-center rounded border text-xs
                                ${idx === 4 ? 'border-blue-900 text-blue-400' : 'border-gray-800 text-gray-400 hover:text-gray-300 cursor-pointer'}
                                transition-colors`}
                    >
                      {time}
                      {idx === 4 && <div className="text-xs mt-1 text-blue-500">●</div>}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-gray-500 text-xs mb-2">
                    <span>Field Type:</span>
                    <span>5-a-side</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-xs">
                    <span>Duration:</span>
                    <span>90 minutes</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <button className="bg-blue-600 w-full text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              {isBookingExpanded ? 'Confirm Booking' : 'Find Available'}
            </button>
          </div>
        </div>
        
        {/* Featured Fields */}
        <div className="rounded-lg p-5 flex flex-col justify-between bg-black border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 overflow-hidden col-span-1 md:col-span-2 row-span-2">
          <div>
            <div className="flex items-center gap-2">
              <Users className="text-gray-400" size={18} />
              <h2 className="text-lg font-medium text-white">Featured Fields</h2>
            </div>
            <p className="text-gray-500 mt-2 text-sm">Top-rated turfs in your area</p>
            
            <div className="h-52 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fieldData} barSize={16}>
                  <XAxis dataKey="name" tick={{fill: '#6b7280', fontSize: 11}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fill: '#6b7280', fontSize: 11}} axisLine={false} tickLine={false} />
                  <Tooltip 
  contentStyle={{
    backgroundColor: '#111',
    borderColor: '#333',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '12px'
  }}
  cursor={{ fill: 'rgba(30, 30, 30, 0.4)' }}
  itemStyle={{ color: '#fff', backgroundColor: '#111' }}
  labelStyle={{ color: '#fff' }}
/>
                  <Bar 
                    dataKey="bookings" 
                    fill="#3b82f6" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              {fieldData.slice(0, 2).map((field, idx) => (
                <div key={idx} className="bg-black p-2 rounded border border-gray-800">
                  <div className="font-medium text-gray-300 text-sm">{field.name}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <span className="text-blue-500">★</span> {field.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <button className="bg-black w-full text-gray-300 px-3 py-1 rounded text-sm font-medium hover:text-white transition-colors border border-gray-800">
              Explore All
            </button>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="rounded-lg p-5 flex flex-col justify-between bg-black border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 overflow-hidden col-span-1 md:col-span-2 row-span-1">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="text-gray-400" size={18} />
              <h2 className="text-lg font-medium text-white">Recent Activity</h2>
            </div>
            <p className="text-gray-500 mt-2 text-sm">Your matches this week</p>
            
            <div className="h-20 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <XAxis dataKey="name" tick={{fill: '#6b7280', fontSize: 11}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fill: '#6b7280', fontSize: 11}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#111',
                      borderColor: '#333',
                      borderRadius: '4px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="matches" 
                    stroke="#3b82f6" 
                    strokeWidth={1.5}
                    dot={{ fill: '#3b82f6', r: 3 }}
                    activeDot={{ r: 4, fill: '#60a5fa' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-2">
            <button className="bg-black text-gray-300 px-3 py-1 rounded text-sm font-medium hover:text-white transition-colors border border-gray-800">
              View Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}