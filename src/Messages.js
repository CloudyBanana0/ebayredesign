import React, { Component } from "react"; 

import "./messages.css"; // Import the CSS file 
import John from "./images/john.jpg";
import Jane from "./images/jane.png";
import Alex from "./images/alex.jpg";
  

class Messages extends Component { 

  render() { 

    return ( 

      <div className="messages-page"> 

        <h2 className="page-title">Messages</h2> 

        <div className="contacts-list"> 

          {/* Contact rows */} 

          <div className="contact-row"> 

            <img 

              src={John} 

              alt="John Smith" 

              className="contact-image" 

            /> 

            <div className="contact-info"> 

              <p className="contact-name">John Doe</p> 

              <p className="contact-status">Bought Fujifilm X-T10 Camera</p> 

            </div> 

          </div> 

          <div className="contact-row"> 

            <img 

              src={Jane} 

              alt="Jane" 

              className="contact-image" 

            /> 

            <div className="contact-info"> 

              <p className="contact-name">Jane Smith</p> 

              <p className="contact-status">Selling Figure-8 Deadlift Straps</p> 

            </div> 

          </div> 

          <div className="contact-row"> 

            <img 

                src={Alex}

                alt="Alex" 

                className="contact-image" 

            /> 

            <div className="contact-info"> 

                <p className="contact-name">Alex Slavin</p> 

                <p className="contact-status">Selling Dumbbell Tree 5-30lbs</p> 

            </div> 

            </div> 

          {/* Add more contacts */} 

        </div> 

      </div> 

    ); 

  } 

} 

  

export default Messages; 

 