
import './App.css';
import React from "react";
//bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import {markers} from './Data/markers'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



import AboutUs from './pages/AboutUs'
import MapHome from './pages'
import LoginPage from './pages/LoginPage'
import MakeReport from './pages/MakeReport'
import Contact from './pages/Contact'
import Popup from './components/ModalPopup'

function App() {
  
  

  return (
    
    <div className="App">
      
      <Router>
      <NavBar />
      <header className="App-header">
      <Routes>
        <Route exact path='/' element={<><MapHome /><Popup/></>} />
        <Route exact path='/AboutUs' element={<AboutUs />} />
        <Route exact path='/LoginPage' element={<LoginPage />} />
        <Route exact path='/MakeReport' element={<MakeReport />} />
        <Route exact path='/Contact' element={<Contact />} />
    </Routes>
    <Footer/>
    </header>
    </Router>
      
    </div>
  );
}

export default App;
