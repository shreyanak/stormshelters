import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Pharmacies from './components/Pharmacies';
import Shelters from './components/Shelter';
import Cities from './components/Cities';
import CityDetail from './components/CityDetail';
import ShelterDetail from './components/ShelterDetail';
import PharmacyDetail from './components/PharmacyDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/pharmacies" element={<Pharmacies />} />
        <Route path="/shelter" element={<Shelters />} />
        <Route path="/city/:id" element={<CityDetail />} />
        <Route path="/shelter/:id" element={<ShelterDetail />} />
        <Route path="/pharmacy/:id" element={<PharmacyDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
