import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState} from "react";

//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {compose, withProps, withStateHandlers} from 'recompose';

//GOOGLE MAP API DEPENDENCIES V IMPORTANT PLZ DO NOT FUCK WITH THIS THANK YOU :)
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {withScriptjs, withGoogleMap} from '@react-google-maps/api'

import {markers} from './Data/markers'
import NavBar from './components/NavBar'

const containerStyle = {
   width: '100%',
   height: '500px'
 };


const center = {
  lat: 38.8,
  lng: -76.7
}



const onLoad = marker => {
  console.log('marker: ', marker)
}





function App() {
  const [data, setData] = React.useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    
    <div className="App">
      <NavBar />
      <header className="App-header">
      <LoadScript
        googleMapsApiKey="AIzaSyBoJn5BpD-nHqlcly45R57vG8zo7QiDdDk"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8.125}
          disableDefaultUI='true'
          onClick={() => setActiveMarker(null)}
        >
        {/* Iterate through the array of coords*/}
        {markers.map(({ id, Name, position }) => (
        <Marker
          Key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className = "window">
                <h5>
                  {Name}
                </h5>
              </div>
            </InfoWindow>
          ) : null}
          {/*onclick make a popover*/}
        </Marker>
      ))}
        </GoogleMap>
      </LoadScript>
      <Row>
        <Col>
          <Row>
            <Nav.Link href = '#top'>Contact Us!</Nav.Link>
          </Row>
        </Col>
        <Col>
        <p>
          {!data ? "Reports" : data}
        </p>
        </Col>
      </Row>
      </header>
    </div>
  );
}

export default App;
