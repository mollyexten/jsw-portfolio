import { useEffect, useState } from "react";
import './App.css';
import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
import Footer from "./sections/Footer/Footer"
import Header from "./sections/Header/Header"
import Navbar from "./sections/Navbar/Navbar"
import Projects from "./sections/Projects/Projects"

function App() {
  const [windowDimension, setWindowDimension] = useState(null)
  
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <div className="App">
      <Navbar windowDimension={windowDimension} />
      <Header windowDimension={windowDimension} />
      <About windowDimension={windowDimension} />
      <Projects windowDimension={windowDimension} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
