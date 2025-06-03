import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NewsList from './pages/NewsList';
import NewsSingle from './pages/NewsSingle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsSingle />} />
      </Routes>
    </Router>
  );
}

export default App;