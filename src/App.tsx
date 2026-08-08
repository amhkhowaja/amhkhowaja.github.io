import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Credentials from './components/Credentials';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import VisitorCounter from './components/VisitorCounter';
import CvPage from './components/CvPage';
import ThesisPage from './components/ThesisPage';

import './App.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <VisitorCounter />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {/* <Credentials /> */}
      <GitHubActivity />
      <Education />
      <Contact />
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Aadarsh Mehdi</span>
        <span className="footer-status">system status: <span className="online">online</span></span>
      </footer>
    </>
  );
}

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
    <BrowserRouter>
      <CursorGlow />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/thesis" element={<ThesisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
