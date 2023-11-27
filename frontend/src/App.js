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
import SearchDisplay from './components/SearchDisplay';
import OurVis from './components/our-vis';
import ProviderVis from './components/provider-vis';





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
        <Route path="/cities/:id" element={<CityDetail />} />
        <Route path="/shelter/:id" element={<ShelterDetail />} />
        <Route path="/pharmacies/:id" element={<PharmacyDetail />} />
        <Route path="/SearchDisplay/:model/:query" element={<SearchDisplay />} />
        <Route path="/our-visualizations/" element={<OurVis />} />
        <Route path="/provider-visualizations/" element={<ProviderVis />} />


      </Routes>
    </Router>
  );
}

export default App;
