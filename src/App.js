import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import FirstBlock from './components/firstBlock';
import Navbar from './components/Navbar';
import SecondBlock from './components/SecondBlock';
import Sectiont from './components/Sectiont';


function App() {
  return (
    <>
    <div className="sidenav">
  <h3 className="sidebar-h"><i class="fa fa-bandcamp" aria-hidden="true" id="icon-margin"></i>Keen</h3>
  <a href="#about"><div><i class="fa fa-university" aria-hidden="true" ></i></div>Dashboard</a>
  <a href="#services"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Services</a>
  <a href="#clients"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Clients</a>
  <a href="#contact"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Contact</a>
  <a href="" className="sidebar-s"><div><i class="fa fa-university" aria-hidden="true" ></i></div>Keen</a>
  <a href="#about"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>About</a>
  <a href="#services"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Services</a>
  <a href="#clients"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Clients</a>
  <a href="#contact"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Contact</a>
  <a href="#about"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>About</a>
  <a href="#services"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Services</a>
  <a href="#clients"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Clients</a>
  <a href="#contact"><i class="fa fa-circle" aria-hidden="true" id="icon-margin"></i>Contact</a>
</div>

<div className="main">
<Navbar/>
     <Dashboard/>
     <FirstBlock/>
     <SecondBlock/>
     <Sectiont/>
</div>
   
     
     

    
    </>
  );
}

export default App;
