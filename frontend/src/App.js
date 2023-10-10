import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './pages/Home';
import About from './pages/About';
import Disasters from './pages/Disasters';
import Shelter from './pages/Shelter';
import Cities from './pages/Cities';
import HoustonComponent from './pages/houston'
import Cypress from './pages/cypress';
import Katy from './pages/katy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/disasters" element={<Disasters />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/houston" element={<HoustonComponent />} />
        <Route path="/katy" element={<Katy />} />
        <Route path="/cypress" element={<Cypress />} />
      </Routes>
    </Router>
  );
}

export default App;
