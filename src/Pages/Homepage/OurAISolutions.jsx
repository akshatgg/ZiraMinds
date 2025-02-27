import React from 'react'

export default function OurAISolutions() {
  return (
    <section className="bg-gradient-to-b from-[#02152D] to-[#023679] text-white text-center py-16 px-5 h-auto">
      <h2 className="text-3xl font-bold mt-12 md:mt-0">Our Products</h2>
        <div className="flex min-h-screen items-center justify-center md:mt-[-15vh]">
        <div className="grid grid-cols-1 md:gap-[20vh] md:grid-cols-2">

          {/* Card 1 */}
          <div className="group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl focus-within:shadow-xl hover:shadow-black/30 focus-within:shadow-black/30">
            <div className="h-96 w-72 md:w-100 flex items-center justify-center">
              <img className="h-32 w-32 object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 focus-within:rotate-3 focus-within:scale-125" src="./images/cube.svg" alt="Privacy Icon" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#023679] group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 focus-within:from-black/70 focus-within:via-black/60 focus-within:to-black/70">
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 focus-within:translate-y-0">
              <h4 className="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">QuickTap AI</h4>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">AI Tool Suite</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl focus-within:shadow-xl hover:shadow-black/30 focus-within:shadow-black/30">
            <div className="h-96 w-72 md:w-100 flex items-center justify-center">
              <img className="h-32 w-32 object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 focus-within:rotate-3 focus-within:scale-125" src="./images/chat.svg" alt="Star Image" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#023679] group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 focus-within:from-black/70 focus-within:via-black/60 focus-within:to-black/70">
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 focus-within:translate-y-0">
              <h4 className="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">F.R.I.D.A.Y</h4>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">AI Chatbot</p>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

