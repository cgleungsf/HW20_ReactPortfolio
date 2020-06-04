import React, {Component} from 'react';
import Navbar from './containers/Navbar';
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import Home from "./containers/Home";
// import About from "./containers/About";
// import Portfolio from "./containers/Portfolio";
// import Contact from "./containers/Contact";
// function App() {
//   return (
//       <>
//       <div className="home">
//         <Navbar />
//       </div>
  
//       <div className='about'>
//         <About />
//       </div>
  
//       <div className='portfolio'>
//         <Portfolio />
//       </div>
  
//       <div className='contact'>
//         <Contact />
//       </div>
//     </>
//   );
// }

// export default App;

class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path='/portfolio' render={ () => <Portfolio/> }/>
        <Route exact path='/contact' render={ () => <Contact/> }/>
      </Router>
    );
  }
}

export default App;