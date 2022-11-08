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
import {withScriptjs, withGoogleMap, GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {MarkerF} from '@react-google-maps/api'

const containerStyle = {
   width: '100%',
   height: '500px'
 };


const center = {
  lat: 38.8,
  lng: -76.7
}
const markers = [
  //Public Colleges, 4 year
{
  id: 1,
  Name: "Towson",
  position: {
  lat: 39.3925,
  lng: -76.6126
  }
},
{
  id: 2,
  Name: "Morgan State",
  position: {
  lat: 39.3438,
  lng: -76.5844
  }
},
{
  id: 3,
  Name: "University Of Maryland College Park",
  position: {
  lat: 38.9869,
  lng: -76.9426
  }
},
{
  id: 4,
  Name: "St. Mary's College",
  position: {
  lat: 39.3299,
  lng: -76.6205
  }
},
{
  id: 5,
  Name: "Bowie State",
  position: {
  lat: 39.0193,
  lng: -76.7593
  }
},
{
  id: 6,
  Name: "Coppin State",
  position: {
  lat: 39.3126,
  lng: -76.6580
  }
},
{
  id: 7,
  Name: "Frostburg State",
  position: {
  lat: 39.6499,
  lng: -78.9346
  }
},
{
  id: 8,
  Name: "Salisbury",
  position: {
  lat: 38.3454,
  lng: -75.6061
  }
},
{
  id: 9,
  Name: "Naval Academy",
  position: {
  lat: 38.9821,
  lng: -76.4839
  }
},
{
  id: 10,
  Name: "University Of Baltimore",
  position: {
  lat: 39.3051,
  lng: -76.6174
  }
},
{
  id: 11,
  Name: "University of Maryland Baltimore",
  position: {
  lat: 39.2892,
  lng: -76.6261
  }
},
{
  id: 12,
  Name: "UMBC",
  position: {
  lat: 39.2498,
  lng: -76.7115
  }
},
{
  id: 13,
  Name: "University of Maryland Eastern Shore",
  position: {
  lat: 38.2101,
  lng: -75.6848
  }
},
//Private Colleges, 4 year
{
  id: 14,
  Name: "Johns Hopkins",
  position: {
  lat: 39.3299,
  lng: -76.6205
  }
},
{
  id: 15,
  Name: "Mount St. Mary's",
  position: {
  lat: 39.6800,
  lng: -77.3487
  }
},
{
  id: 16,
  Name: "Goucher",
  position: {
  lat: 39.4089,
  lng: -76.5926
  }
},
{
  id: 17,
  Name: "Hood",
  position: {
  lat: 39.4227,
  lng: -77.4187
  }
},
{
  id: 18,
  Name: "Loyola",
  position: {
  lat: 39.3477,
  lng: -76.6172
  }
},
{
  id: 19,
  Name: "MICA",
  position: {
  lat: 39.3076,
  lng: -76.6216
  }
},
{
  id: 20,
  Name: "McDaniel",
  position: {
  lat: 39.5858,
  lng: -77.0032
  }
},
{
  id: 21,
  Name: "Notre Dame of MD",
  position: {
  lat: 39.3521,
  lng: -76.6221
  }
},
{
  id: 22,
  Name: "St Johns",
  position: {
  lat: 38.9820,
  lng: -76.4915
  }
},
{
  id: 23,
  Name: "Stevenson",
  position: {
  lat: 39.4263,
  lng: -76.7773
  }
},
{
  id: 24,
  Name: "Washington Adventist",
  position: {
  lat: 38.9860,
  lng: -77.0006
  }
},
{
  id: 25,
  Name: "Washington College",
  position: {
  lat: 39.2182,
  lng: -76.0696
  }
},];


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
        <Navbar.Brand href="#home">SAStat</Navbar.Brand>
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
        googleMapsApiKey="API KEY HERE"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8.125}
          disableDefaultUI='true'
          //marks={latlangs}
        >
        {/* <Marker position={markers[1].position}/> */}
        {markers.map(({ id, name, position }) => (
        <Marker
          //Key={id}
          position={position}
        >
        </Marker>
      ))}
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
