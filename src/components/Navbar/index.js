import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import "./style.css"

const NavBar = () => {
  
  
  
  return ( 
<div>
<Navbar bg="light" variant="light">
    <Container>
    <Nav className="nav me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>


       
    )
};
 
export default NavBar;