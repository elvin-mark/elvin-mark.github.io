import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Publications from './components/Publications';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Welcome to my Portfolio</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
