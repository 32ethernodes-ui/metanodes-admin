import React, { useState } from "react";
import Particles from "./Particle";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("usename", username)
    // ✅ Replace this with real authentication logic if needed
    // If login is successful:
    navigate("/dashboard");
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans">
      {/* Fullscreen Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={600}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Centered Login Box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-sm bg-gray-800/10 text-white backdrop-blur border border-gray-800 rounded-lg shadow-xl p-6">
        <h1 className="text-center text-2xl font-medium mb-6">
          <span className="underline text-blue-400">Login</span> User Panel
        </h1>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block font-semibold mb-1">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/80 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/80 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
