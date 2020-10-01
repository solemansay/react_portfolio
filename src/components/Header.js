import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Soleman Sayeed</Navbar.Brand>
     <Nav className="mr-auto">
       <Nav.Link> <Link to="/contact">Contact</Link> </Nav.Link>
       <Nav.Link> <Link to="/portfolio">Portfolio</Link> </Nav.Link>
       <Nav.Link> <Link to="/info">About me</Link></Nav.Link>
       <Nav.Link target="_blank" href="https://www.linkedin.com/in/soleman-sayeed-998488177/">My LinkedIn</Nav.Link>
       <Nav.Link target="_blank" href="https://github.com/solemansay"> My Github</Nav.Link>
    </Nav>
  </Navbar>
 );
}


export default Header;
