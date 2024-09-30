import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blog"element={<Blog/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
