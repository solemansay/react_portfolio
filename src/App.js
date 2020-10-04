import React from 'react';
import Header from "./components/Header"
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"


function App() {
  return (    
  <Router>
    <div>
      <Header/>
        <Route exact path="/" component={AboutMe}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/projects" component={Portfolio}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
