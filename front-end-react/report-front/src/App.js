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

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {markers} from './Data/markers'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import AboutUs from './pages/AboutUs'
import MapHome from './pages'


function App() {

  

  return (
    
    <div className="App">
      <Router>
      <NavBar />
      <header className="App-header">
      <Routes>
        <Route exact path='/' element={<MapHome />} />
        <Route exact path='/AboutUs' element={<AboutUs />} />
    </Routes>
    <Footer/>
    </header>
    </Router>
        
      
    </div>
  );
}

export default App;
