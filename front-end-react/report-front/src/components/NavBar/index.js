
import logo from './logo.svg';
import React from "react";
import './NavBar.css';
//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return(
        <>
      <Navbar className="App" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">SAStat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            <Nav.Link href="#link">Report</Nav.Link>
            <NavDropdown title="More Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.rainn.org/resources">Hotlines</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://mcasa.org/survivors/after-sexual-assault">Know your Options</NavDropdown.Item>
            </NavDropdown>
            <img src={logo} className="App-logo" alt="logo" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};
export default NavBar