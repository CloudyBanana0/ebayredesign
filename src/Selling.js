import React, { Component } from "react"; 

import "./selling.css"; // Import the CSS file 
import Couch from "./images/couch.jpg";
import Camera from "./images/camera.jpg";
import Watch from "./images/watch.jpg";
import Shoes from "./images/shoes.png";

class Selling extends Component { 

  render() { 

    return ( 

      <div className="selling-page"> 

        <h2 className="page-title">Items on the market</h2> 

        <div className="item-list"> 

          <div className="item"> 

            <img 

              src= {Shoes}

              alt="Shoes" 

              className="item-image" 

            /> 

            <div className="item-info"> 

              <p className="item-name">Jordan 13's White and Yellow</p> 

              <p className="item-price">$249.99</p> 

            </div> 

            <button className="edit-button">Edit</button> 

          </div> 

          <div className="item"> 

            <img 

              src= {Watch}

              alt="Watch" 

              className="item-image" 

            /> 

            <div className="item-info"> 

              <p className="item-name">Blue-faced Stainless Steel Watch</p> 

              <p className="item-price">$229.99</p> 

            </div> 

            <button className="edit-button">Edit</button> 

          </div> 

          {/* Add more items */} 

        </div> 

        <button className="add-item-button">Add Item</button> 

        <h2 className="section-title">Items Sold</h2> 

        <div className="sold-items"> 

          {/* Sold items with name, price, image, and sold date */} 

          <div className="sold-item"> 

            <img 

              src= {Couch}

              alt="Couch" 

              className="sold-item-image" 

            /> 

            <p className="sold-item-name">Brown Matte Cushioned Couch</p> 

            <p className="sold-item-price">$479.99</p> 

            <p className="sold-date">Sold on: August 25, 2023</p> 

          </div> 

          <div className="sold-item"> 

            <img 

              src= {Camera}

              alt="Camera" 

              className="sold-item-image" 

            /> 

            <p className="sold-item-name">Fujifilm X-T10 Camera</p> 

            <p className="sold-item-price">$559.99</p> 

            <p className="sold-date">Sold on: August 23, 2023</p> 

          </div> 

          {/* Add more sold items */} 

        </div> 

      </div> 

    ); 

  } 

} 

  

export default Selling; 

 