import React from 'react';
import Navbar from './containers/Navbar';
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";

function App() {
  return (
      <>
      <div className="home">
        <Navbar />
      </div>
  
      <div className='about'>
        <About />
      </div>
  
      <div className='portfolio'>
        <Portfolio />
      </div>
  
      <div className='contact'>
        <Contact />
      </div>
    </>
  );
}

export default App;
