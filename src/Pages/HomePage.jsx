import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";

export default function Home() {
  const words = ["PRIVACY FIRST", "SAFE AND SECURE", "ALWAYS FREE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Section Refs for Smooth Scrolling

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="Home-Page h-screen flex flex-col items-center justify-center text-white px-6">
      {/* Logo */}
      <div className="absolute top-6 left-16 text-3xl font-extrabold tracking-wide">
        <span className="text-white">ZiraMinds</span>
        <span className="text-purple-400"> AI</span>
      </div>
      <nav className="absolute top-6 right-16">
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="cursor-pointer hover:text-purple-400 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-400 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-400 transition">
            <Link to="/services">Services</Link>
          </li>
          <li className="cursor-pointer hover:text-purple-400 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="text-center max-w-8xl">
        <h1 className="text-7xl font-extrabold leading-tight">
          AI POWER SOLUTION FOR  <br></br>EVERYONE
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 transition-opacity duration-700 ease-in-out">
            <Typewriter
              words={words}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={250}
              deleteSpeed={250}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="text-lg text-gray-300 m-6 max-w-2xl mx-auto leading-relaxed">
          Explore our AI tools and services that enhance daily life – from chatbots
          to health solutions, all while prioritizing your privacy.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-6 justify-center">
          <button className="px-8 py-3 text-lg font-semibold bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition">
            Explore AI Tools
          </button>
          <button className="px-8 py-3 text-lg font-semibold border-2 border-white rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}