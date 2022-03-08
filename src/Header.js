import React, { Component } from 'react';
import { BiChevronRight, BiChevronDown} from 'react-icons/bi'

import './App.css';

class Header extends Component {
    render(){
 return(
    <div className="sticky-top">
      <header id="header" className="">
    <div className="container d-flex align-items-center justify-content-between">
    
    <a href="index.html"> <img src= "/img/moneynobg.png" className="nav__logo" /></a>
         
       <nav id="navbar" className="navbar">
      
     
       
        
        <ul >
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">Internet Banking</a></li>
          <li><a className="nav-link scrollto" href="#services">Open Account</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">About us</a></li>
          <li><a className="nav-link scrollto" href="#team">Investors</a></li>
          <li className="dropdown"><a href="#"><span>Services</span> <BiChevronDown className="chevvy" /></a>
            <ul>
              <li><a href="#">Daily Loan</a></li>
              <li className="dropdown"><a href="#"><span>Weekly Loan</span> <BiChevronRight className="chevvy" /></a>
                <ul >
                  <li><a href="#">Asset Loan</a></li>
                  <li><a href="#">Individual Loan</a></li>
                  <li><a href="#">Group Loan</a></li>
                  <li><a href="#">Family Loan</a></li>
                  <li><a href="#">Embedded System</a></li>
                </ul>
              </li>
              <li><a href="#">Monthly Loan</a></li>
              <li><a href="#">Investment Loan</a></li>
              <li><a href="#">Yearly Loan</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      
    </div>
  </header>
    </div>

 );
}
}
export default Header;
