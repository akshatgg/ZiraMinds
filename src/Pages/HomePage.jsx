import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";

export default function Home() {
  const words = ["PRIVACY FIRST", "SAFE AND SECURE", "ALWAYS FREE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="Home-Page h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Logo */}
      <div className="absolute top-6 left-4 sm:left-16 text-2xl sm:text-3xl font-extrabold tracking-wide">
        <span className="text-white">ZiraMinds</span>
        <span className="text-purple-400"> AI</span>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-4 sm:right-16">
        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-sm sm:text-lg font-semibold">
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-12 right-0 bg-gray-900 bg-opacity-95 rounded-lg shadow-lg p-4">
            <ul className="flex flex-col space-y-4 text-lg font-semibold">
              <li className="cursor-pointer hover:text-purple-400 transition">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="cursor-pointer hover:text-purple-400 transition">
                <Link to="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li className="cursor-pointer hover:text-purple-400 transition">
                <Link to="/services" onClick={toggleMenu}>Services</Link>
              </li>
              <li className="cursor-pointer hover:text-purple-400 transition">
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="text-center max-w-6xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
          AI POWER SOLUTION FOR <br className="hidden sm:block" /> EVERYONE{" "}
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
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
          Explore our AI tools and services that enhance daily life – from chatbots
          to health solutions, all while prioritizing your privacy.
        </p>

        {/* Buttons */}
        <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Explore AI Tools
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold border-2 border-white rounded-full hover:bg-white hover:text-black transition transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}