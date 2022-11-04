import logo from './logo.svg';
import './App.css';
import React from "react";

//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


//GOOGLE MAP API DEPENDENCIES V IMPORTANT PLZ DO NOT FUCK WITH THIS THANK YOU :)
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
   width: '100%',
   height: '500px'
 };

const center = {
  lat: 38.8,
  lng: -76.7
};

const position = {
  lat: 39.3925,
  lng: -76.6126
};
const onLoad = marker => {
  console.log('marker: ', marker)
}

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Insert Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Report</Nav.Link>
            <NavDropdown title="More Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hotlines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Crisis Counseling</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Know your Options</NavDropdown.Item>
            </NavDropdown>
            <img src={logo} className="App-logo" alt="logo" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <header className="App-header">
      <LoadScript
        googleMapsApiKey="INSERT KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8.125}
          disableDefaultUI='true'
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
          <Marker
      onLoad={onLoad}
      position={position}
      />
        </GoogleMap>
      </LoadScript>
       
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
