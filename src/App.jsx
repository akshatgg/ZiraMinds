import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const privacyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-gray-100">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} productsRef={productsRef} contactRef={contactRef} privacyRef={privacyRef} />

      {/* Sections */}
      <div ref={homeRef} className="min-h-screen  -center  text-4xl font-bold">
        <Home />
      </div>
      <div ref={aboutRef} className="min-h-screen  -center  text-4xl font-bold">
        <About />
      </div>
      <div ref={productsRef} className="min-h-screen  -center  text-4xl font-bold">
        <Products />
      </div>
      <div ref={privacyRef} className="min-h-screen  -center  text-4xl font-bold">
        <Privacy />
      </div>
      <div ref={contactRef} className="min-h-screen  -center  text-4xl font-bold">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
