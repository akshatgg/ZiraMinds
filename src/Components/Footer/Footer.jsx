import React from 'react'

import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#200A18] to-[#091F21] text-white py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ZiraMinds AI</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Making advanced AI technology accessible to everyone while ensuring privacy and security.
          </p>
        </div>

        <div className="flex space-x-10 mt-6 md:mt-0">
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="text-gray-300 flex flex-col align-left space-y-1 mt-[1vh]">
              <Link className="cursor-pointer hover:text-white">About</Link>
              <Link className="cursor-pointer hover:text-white">Contact</Link>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Products</h3>
            <ul className="text-gray-300 flex flex-col align-left space-y-1 mt-[1vh]">
              <Link className="cursor-pointer hover:text-white">FRIDAY AI</Link>
              <Link className="cursor-pointer hover:text-white">QuickTap AI</Link>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="text-gray-300 flex flex-col align-left space-y-1 mt-[1vh]">
              <Link className="cursor-pointer hover:text-white">Help Center</Link>
              <Link className="cursor-pointer hover:text-white">Privacy Policy</Link>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />
      
      <div className="md:flex justify-between items-center mt-[2vh] mr-[1vh] text-gray-400">
        <p>© 2024 ZiraMinds. All rights reserved.</p>
        <div className="flex space-x-4 mt-[1.5vh]">
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaGithub className="cursor-pointer hover:text-white" />
          <FaLinkedin className="cursor-pointer hover:text-white" />
          <FaDiscord className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </footer>
  );
}
