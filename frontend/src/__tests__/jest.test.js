import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';


import App from '../App.js'

import Navbar from '../components/Navbar.js';

import About from '../components/About.js';
import Home from '../components/Home.js';
import CityCard from '../components/CityModel.js';

it('Init NavBar', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  

  it('Init About', () => {
    const component = renderer.create(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Init App', () => {
    const component = renderer.create(<App />);
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('Init HomeCard', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

//   it('Init CityCard', () => {
//     const component = renderer.create(
//       <BrowserRouter>
//         <CityCard />
//       </BrowserRouter>,
//     );
  
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
  
  
  