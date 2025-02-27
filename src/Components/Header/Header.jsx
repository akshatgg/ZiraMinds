import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-gradient-to-r from-[#200A18] to-[#091F21] text-white px-5 md:px-20 py-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ZiraMinds AI</Link>
      </h1>
      <ul className="hidden md:flex space-x-8 text-lg">
        <Link to="/about" className="hover:text-[#E174FF] cursor-pointer">About Us</Link>
        <Link to="/products" className="hover:text-[#E174FF] cursor-pointer">Products</Link>
        <Link to="/privacy" className="hover:text-[#E174FF] cursor-pointer">Privacy Policy</Link>
        <Link to="contact" className="hover:text-[#E174FF] cursor-pointer">Contact Us</Link>
      </ul>
    </nav>
  );
}
