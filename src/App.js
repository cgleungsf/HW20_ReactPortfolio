import React from 'react';
import Navbar from './containers/Navbar';
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

import { Sticky } from 'semantic-ui-react'
import map from './assets/blue_world_map_pixabay.jpg'


function App() {
  return (
    <>
      <Sticky>
        <Navbar />
      </Sticky>
      <div className="home">
        <img src={map} alt='map hero background' width='100%' style={{ maxHeight: '580px' }} />
      </div>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
