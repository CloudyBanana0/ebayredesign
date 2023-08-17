import React, { Component } from "react"; 
import Bike from "./bike.png";
import Belt from "./powerbelt.png";
import Headphones from "./headphones.png";
  

class Home extends Component { 

  render() { 

    return ( 

      <div> 

        <div className="home-navbar"> 

          <ul> 

            <li><a href="#">Motors</a></li> 

            <li><a href="#">Electronics</a></li> 

            <li><a href="#">Collectibles</a></li> 

            <li><a href="#">Home & Garden</a></li> 

            <li><a href="#">Fashion</a></li> 

            <li><a href="#">Toys</a></li> 

            <li><a href="#">Sporting Goods</a></li> 

            <li><a href="#">Industrial</a></li> 

            <li><a href="#">Jewelry</a></li> 

            <li><a href="#">Refurbished</a></li> 

          </ul> 

        </div> 

  

        <div className="recommended-section"> 

          <h2>Recommended for You</h2> 

          <div className="recommended-products"> 

            {/* Random products */} 

            <div className="product"> 

              <img src={Bike} alt="Product" className="bike"/>  

              <p className="product-title">7-Gear All-Terrain Bicycle</p> 

              <p className="product-price">$99.99</p> 

            </div> 

            <div className="product"> 

              <img src={Belt} alt="Product" className="belt" /> 

              <p className="product-title">10mm Weightlifting Belt</p> 

              <p className="product-price">$79.99</p> 

            </div> 

            <div className="product"> 

              <img src={Headphones} alt="Product" className="headphones" /> 

              <p className="product-title">Beats Headphones</p> 

              <p className="product-price">$129.99</p> 

            </div> 

            {/* Add more products */} 

          </div> 

        </div> 

      </div> 

    ); 

  } 

} 

  

export default Home; 

 