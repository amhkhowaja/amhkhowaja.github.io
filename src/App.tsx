import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <VisitorCounter />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Aadarsh Mehdi</span>
        <span className="footer-status">system status: <span className="online">online</span></span>
      </footer>
    </>
  );
}

export default App;
