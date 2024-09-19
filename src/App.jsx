import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/skills" element={<Skill />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
