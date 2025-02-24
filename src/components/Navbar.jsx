export default function Navbar({ scrollToSection, homeRef, aboutRef, productsRef, contactRef, privacyRef }) {
  return (
    
    <nav className="fixed top-2 right-10 w-full bg-transparent text-white p-6 flex justify-end gap-8 text-lg font-bold z-50">
       {/* Logo */}
       <div className="absolute top-5 left-25 text-3xl font-extrabold tracking-wide">
        <span className="text-white">ZiraMinds</span>
        <span className="text-purple-400"> AI</span>
      </div>
      <button onClick={() => scrollToSection(homeRef)} className=" hover:text-purple-400 transition">Home</button>
      <button onClick={() => scrollToSection(aboutRef)} className="hover:text-purple-400 transition">About</button>
      <button onClick={() => scrollToSection(productsRef)} className="hover:text-purple-400 transition">Products</button>
      <button onClick={() => scrollToSection(privacyRef)} className="hover:text-purple-400 transition">Privacy</button>
      <button onClick={() => scrollToSection(contactRef)} className="hover:text-purple-400 transition">Contact</button>
    </nav>
  );
}
