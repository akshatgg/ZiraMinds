import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const words = ["PRIVACY FIRST", "SAFE AND SECURE", "ALWAYS FREE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Section Refs for Smooth Scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const privacyRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={homeRef} className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">

      {/* Logo */}
      {/* <div className="absolute top-6 left-16 text-3xl font-extrabold tracking-wide">
        <span className="text-white">ZiraMinds</span>
        <span className="text-purple-400"> AI</span>
      </div> */}

      {/* Hero Content */}
      <div className="text-center max-w-8xl">
        <h1 className="text-8xl font-extrabold leading-tight">
          AI POWER SOLUTION FOR EVERYONE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 transition-opacity duration-700 ease-in-out">
            {words[currentWordIndex]}
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
          <button className="px-8 py-3 text-lg font-semibold border-2 border-white rounded-full  hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
