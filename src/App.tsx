import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { cv } from './data/cv'

import AOS from 'aos';

import './App.css'
import 'aos/dist/aos.css'

import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [sidebarOpen, setSideBarOpen] = useState<boolean>(true);
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);
  
  return (
    <div className="app">
      <Navbar onToggleSidebar={() => setSideBarOpen(!sidebarOpen)} />
      <div className="content">
        {sidebarOpen && <Sidebar />}
        <main className="main">
          <div data-aos="fade-up"><About summary={cv.summary} /></div>
          <div data-aos="fade-up"><Skills skills={cv.skills} /></div>
          <div data-aos="fade-up"><Experience entries={cv.experience} /></div>
          <div data-aos="fade-up"><Education education={cv.education} /></div>
          <div data-aos="fade-up"><Projects projects={cv.projects} /></div>
          <div data-aos="fade-up"><Achievements achievements={cv.achievements} /></div>
          <div data-aos="fade-up"><Contact email={cv.email} linkedin={cv.linkedin} github={cv.github} location={cv.location} /></div>
        </main>
      </div>
    </div>
  );
}

export default App;
