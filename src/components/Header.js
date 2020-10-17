import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Resume from "../assets/resume.pdf"


function Header() {
return (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand> Soleman Sayeed</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link className="headerLink" to="/">About Me</Link></Nav.Link>
      <Nav.Link><Link className="headerLink" to="/contact">Contact Me</Link></Nav.Link>
      <Nav.Link><Link className="headerLink" to="/projects">Portfolio</Link></Nav.Link>

      <NavDropdown title="My Info" id="basic-nav-dropdown">
        <Nav.Link className="dropDownItem ml-4" target="_blank" href="https://www.linkedin.com/in/soleman-sayeed-998488177/">My Linked<i class="fa fa-linkedin" aria-hidden="true"></i></Nav.Link>  
        <Nav.Link className="dropDownItem ml-4" target="_blank" href="https://github.com/solemansay">My Github <i class="fa fa-github" aria-hidden="true"></i> </Nav.Link>  
        
        <NavDropdown.Divider />
        <NavDropdown.Item href= {Resume}><i class="fa fa-file" aria-hidden="true"></i> My Resume</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 );
}


export default Header;
