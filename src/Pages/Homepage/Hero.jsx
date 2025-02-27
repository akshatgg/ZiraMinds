import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#200A18] to-[#091F21] text-white text-center py-20 px-5">
      <h1 className="text-3xl md:text-6xl font-bold">
        AI POWER SOLUTION FOR EVERYONE
        <br></br>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          <Typewriter
            words={["PRIVACY FIRST", "SAFE AND SECURE", "ALWAYS FREE"]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Explore our AI tools and services that enhance daily life – from chatbots to health
        solutions, all while prioritizing your privacy.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#E174FF] focus-within:bg-[#E174FF]">
          Explore AI Tools
        </button>
        <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white focus-within:bg-white hover:text-black focus-within:text-black">
          Learn More
        </button>
      </div>
    </section>
  );
}
