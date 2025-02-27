import React from 'react'

export default function KeyFeatures() {
  return (
    <section className='bg-gradient-to-r from-black to-gray-800 text-white text-center py-16 px-5 h-auto'>
    <h2 className="text-3xl font-bold mt-12 md:mt-0">Key Features</h2>
    <div className="flex min-h-screen items-center justify-center md:mt-[-15vh]">
      <div className="grid grid-cols-1 md:gap-[13vh] md:grid-cols-3">
      
          {/* Card 1 */}
          <div className="group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl focus-within:shadow-xl hover:shadow-black/30 focus-within:shadow-black/30">
            <div className="h-96 w-72 flex items-center justify-center">
              <img className="h-32 w-32 object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 focus-within:rotate-3 focus-within:scale-125" src="./images/privacy.svg" alt="Privacy Icon" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 focus-within:from-black/70 focus-within:via-black/60 focus-within:to-black/70">
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 focus-within:translate-y-0">
              <h4 className="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">Privacy-Focused</h4>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">Minimal user data collection, strong data security.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl focus-within:shadow-xl hover:shadow-black/30 focus-within:shadow-black/30">
            <div className="h-96 w-72 flex items-center justify-center">
              <img className="h-32 w-32 object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 focus-within:rotate-3 focus-within:scale-125" src="./images/gift.svg" alt="Star Image" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 focus-within:from-black/70 focus-within:via-black/60 focus-within:to-black/70">
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 focus-within:translate-y-0">
              <h4 className="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">Premium AI, Free Forever</h4>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">Top-tier AI tools available at no cost.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl focus-within:shadow-xl hover:shadow-black/30 focus-within:shadow-black/30">
            <div className="h-96 w-72 flex items-center justify-center">
              <img className="h-32 w-32 object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 focus-within:rotate-3 focus-within:scale-125" src="./images/star.svg" alt="Star Image" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 focus-within:from-black/70 focus-within:via-black/60 focus-within:to-black/70">
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 focus-within:translate-y-0">
              <h4 className="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">AI for Everyday Use</h4>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">A wide range of tools to solve daily problems, from cooking to health and fitness.</p>
            </div>
          </div>

      </div>
    </div>
</section>

  );
}


