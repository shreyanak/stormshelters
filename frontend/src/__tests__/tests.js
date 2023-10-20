import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import App from '../App.js'

import Navbar from '../components/Navbar.js';

import About from '../components/About.js';

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
  

//   it('Init CityCard', () => {
//     const city = {
//         name: 'Baytown',
//         population: 82543,



//     }
//     const component = renderer.create(
//       <BrowserRouter>
//         <CityCard city={city} />
//       </BrowserRouter>,
//     );
  
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
  