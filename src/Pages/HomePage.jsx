import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const words = ["PRIVACY FIRST", "SAFE AND SECURE", "ALWAYS FREE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6 relative bg-[#0a0a0ae0] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-[url('../assets/homebg.gif')] before:bg-cover before:bg-center before:bg-no-repeat before:fixed before:z-[-1]">
      {/* Logo */}
      <div className="absolute top-6 left-6 md:left-16 text-2xl md:text-3xl font-extrabold tracking-wide">
        <span className="text-white">ZiraMinds</span>
        <span className="text-purple-400"> AI</span>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-6 md:right-16">
        <ul className="flex space-x-4 md:space-x-8 text-base md:text-lg font-semibold">
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

      {/* Main Content */}
      <div className="text-center max-w-4xl w-full mt-16 md:mt-24"> {/* Added mt-16 md:mt-24 */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
          AI POWER SOLUTION FOR EVERYONE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 transition-opacity duration-700 ease-in-out">
            {words[currentWordIndex]}
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed">
          Explore our AI tools and services that enhance daily life – from chatbots
          to health solutions, all while prioritizing your privacy.
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
          <button className="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition">
            Explore AI Tools
          </button>
          <button className="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold border-2 border-white rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
