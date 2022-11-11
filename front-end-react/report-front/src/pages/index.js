import './App.css';
import React from "react";
import {useState} from "react";

//bootstrap dependencies

import 'bootstrap/dist/css/bootstrap.min.css';

//GOOGLE MAP API DEPENDENCIES V IMPORTANT PLZ DO NOT FUCK WITH THIS THANK YOU :)
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';


import {markers} from './../Data/markers'



const containerStyle = {
    width: '100%',
    height: '580px'
  };
 
 
 const center = {
   lat: 38.8,
   lng: -76.7
 }

//  const onLoad = marker => {
//     console.log('marker: ', marker)
//   }
 
 const MapHome = () => {
    const [activeMarker, setActiveMarker] = useState(null);
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/schools")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);

    
    const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <>
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
                </h5><br/>
                <p>
                    Reports: {!data ? "Null" : data[id].reports}
                </p>
              </div>
            </InfoWindow>

          ) : null}
          {/*onclick make a popover*/}
        </Marker>
      ))}
        </GoogleMap>
      </LoadScript>
    </>
);
};
  
export default MapHome;