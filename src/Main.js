import React, { Component } from "react"; 

import { Route, Routes, NavLink, HashRouter } from "react-router-dom"; 

import Home from "./Home"; 

import Buying from "./Buying"; 

import Selling from "./Selling"; 

import Messages from "./Messages"; 

import "./index.css"; // Import the updated CSS file 

import eBayLogo from "./ebay-logo.png"; // Import the eBay logo image 

  

class Main extends Component { 

  render() { 

    return ( 

      <HashRouter> 

        <div> 

          <header> 

            <img src={eBayLogo} alt="eBay Logo" className="ebay-logo" /> 

          </header> 

          <nav> 

            <ul className="header"> 

              <li> 

                <NavLink to="/" activeClassName="active"> 

                  Home 

                </NavLink> 

              </li> 

              <li> 

                <NavLink to="/Buying" activeClassName="active"> 

                  Buying 

                </NavLink> 

              </li> 

              <li> 

                <NavLink to="/Selling" activeClassName="active"> 

                  Selling 

                </NavLink> 

              </li> 

              <li> 

                <NavLink to="/Messages" activeClassName="active"> 

                  Messages 

                </NavLink> 

              </li> 

            </ul> 

          </nav> 

          <div className="container"> 

            <div className="content"> 

              <Routes> 

                <Route path="/" element={<Home />} /> 

                <Route path="/Buying" element={<Buying />} /> 

                <Route path="/Selling" element={<Selling />} /> 

                <Route path="/Messages" element={<Messages />} /> 

              </Routes> 

            </div> 

          </div> 

        </div> 

      </HashRouter> 

    ); 

  } 

} 

  

export default Main; 

 