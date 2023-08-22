import React, { Component } from "react"; 

import "./buying.css"; // Import the CSS file 
import Figure8 from "./images/figure8.jpg";
import GhostBCAA from "./images/ghostbcaa.jpg";
import GoldWhey from "./images/goldwhey.jpg";
import GPick from "./images/guitarpick.jpg";
import Wraps from "./images/wristwraps.jpg";
import Creatine from "./images/creatine.jpg";
import DBTree from "./images/dbtree.jpg";

class Buying extends Component { 

  render() { 

    return ( 

      <div className="buying-page"> 

        <h2 className="page-title">Most shopped categories</h2> 

        <div className="category-buttons"> 

          <button className="category-button">Fitness</button> 

          <button className="category-button">Sporting Goods</button> 

          <button className="category-button">Music</button> 

          <button className="category-button">Outdoors</button> 

        </div> 

        <h2 className="section-title">Recently bought</h2> 

        <div className="scroll-container"> 

          {/* Scrollbar with random items and prices */} 

          <div className="item-card"> 

            <img 

              src={Figure8}

              alt="Figure8" 

              className="item-image" 

            /> 

            <p className="item-name">Figure 8 Deadlift Straps</p> 

            <p className="item-price">$29.99</p> 

          </div> 

          <div className="item-card"> 

            <img 

              src= {GhostBCAA} 

              alt="GhostBCAA" 

              className="item-image" 

            /> 

            <p className="item-name">Ghost BCAA 30-Servings</p> 

            <p className="item-price">$49.99</p> 

          </div> 

          {/* Add more items */} 

        </div> 

        <h2 className="section-title">Recently viewed</h2> 

        <div className="scroll-container"> 

          {/* Scrollbar with random items and prices */} 

          <div className="item-card"> 

            <img 

              src= {DBTree}

              alt="DB Tree" 

              className="item-image" 

            /> 

            <p className="item-name">Dumbbell Tree 5-30lbs</p> 

            <p className="item-price">$219.99</p> 

          </div> 

          <div className="item-card"> 

            <img 

              src= {GoldWhey}

              alt="Gold Whey" 

              className="item-image" 

            /> 

            <p className="item-name">Gold Standard Whey Protein Powder</p> 

            <p className="item-price">$69.99</p> 

          </div> 

          <div className="item-card"> 

            <img 

              src= {Wraps}

              alt="Wraps" 

              className="item-image" 

            /> 

            <p className="item-name">Weightlifting Wrist Wraps</p> 

            <p className="item-price">$19.99</p> 

            </div> 

            <div className="item-card"> 

              <img 

                src= {Creatine}

                alt="Creatine" 

                className="item-image" 

              /> 

              <p className="item-name">Asylum Cabinet Micronized Creatine</p> 

              <p className="item-price">$39.99</p> 

              </div> 

              <div className="item-card"> 

                <img 

                  src= {GPick}

                  alt="GPick" 

                  className="item-image" 

                /> 

                <p className="item-name">Guitar Pick (12 pack)</p> 

                <p className="item-price">$19.99</p> 

                </div> 

          {/* Add more items */} 

        </div> 

      </div> 

    ); 

  } 

} 

  

export default Buying; 

 