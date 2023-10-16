import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Disasters from './components/Disasters';
import Shelters from './components/Shelter';
import Cities from './components/Cities';
import CityDetail from './components/CityDetail';
import ShelterDetail from './components/ShelterDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/disasters" element={<Disasters />} />
        <Route path="/shelter" element={<Shelters />} />
        <Route path="/city/:cityName" element={<CityDetail />} />
        <Route path="/shelter/:shelterName" element={<ShelterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
