import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both fields!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful');
        navigate('/dashboard'); // 🎯 Redirect to dashboard
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="p-8 w-96 bg-black rounded-xl border border-gray-800 shadow-lg text-white">
        <h1 className="text-2xl font-semibold text-center">Sign In</h1>
        <p className="mt-2 text-sm text-gray-400 text-center">Enter your details to access your account</p>

        <div className="flex gap-3 mt-6">
          <button className="flex items-center justify-center w-full h-10 bg-gray-900 text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-all">
            <svg className="w-5 h-5" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M24 20v8.7h11.9c-.5 3-3.5 8.7-11.9 8.7-7.3 0-13.3-6-13.3-13.3s6-13.3 13.3-13.3c4 0 6.7 1.7 8.2 3.2l5.7-5.5C37.3 5 31.8 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c12.7 0 21.4-8.9 21.4-21.4 0-1.4-.2-2.6-.4-3.6H24z" />
            </svg>
            <span className="ml-2">Google</span>
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="text-gray-500 text-xs px-2">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 bg-black text-white border border-gray-700 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 bg-black text-white border border-gray-700 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300 mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 mt-2"
          >
            Sign In
          </button>
          
        </form>
        <p className="mt-6 text-center text-sm text-gray-400 -pb-7">
          Don't have an account?{' '}
          <a href="/signup" className="text-white hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;