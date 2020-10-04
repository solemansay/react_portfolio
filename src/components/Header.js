import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header() {
return (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand> Soleman Sayeed</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link className="headerLink" to="/react_portfolio">About Me</Link></Nav.Link>
      <Nav.Link><Link className="headerLink" to="/contact">Contact Me</Link></Nav.Link>
      <Nav.Link><Link className="headerLink" to="/portfolio">Portfolio</Link></Nav.Link>

      <NavDropdown title="My Info" id="basic-nav-dropdown">
        <Nav.Link className="dropDownItem ml-4" target="_blank" href="https://www.linkedin.com/in/soleman-sayeed-998488177/">My LinkedIn</Nav.Link>  
        <Nav.Link className="dropDownItem ml-4" target="_blank" href="https://github.com/solemansay"> My Github</Nav.Link>  
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="assets/resume.pdf">My Resume</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 );
}


export default Header;
