import React from "react";
import {FaUserCircle} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaPhoneAlt} from "react-icons/fa"
import {FaPencilAlt} from "react-icons/fa"
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import images from './images/logo.jpg'
import images10 from './images/Service-Banner.jpg'


function ContactUs(){

    return(
        <div>

        <div className='nav'>

       
          
        <div className='logo'>
           <img src={images} alt="" height="80px" width="70px"/>
           </div>
           <ul className='navbar'>
               
            <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
   <li><NavLink className="nav-bar-link" to="/allproduct">Allproduct</NavLink></li>
   <li><NavLink className="nav-bar-link" to="/icecream">IceCreame</NavLink></li>
   <li><NavLink className="nav-bar-link" to="/sweets">Sweets</NavLink></li>
   </ul>
       </div>

       <div className='main'>
               <img src={images10} alt=""/>
           </div>
    
    <div className="addr">

        <div className="address">

        <h1>Address</h1>

        <address>
        Pune Zilha Sahakari Dudh Utpadak
         Sangh Ltd.
        Katraj Dairy, Pune – Satara Road,
        Opp. Rajiv Gandhi Udyan,
        Katraj, Pune – 411046.
        </address>

        <hr/>

        <span>Contact : +91-20 24367946, 24370697, 24373453, 24372042.</span>

        <hr/>

        <span>Mobile</span>

        <hr/>

        <span>katrajmilk@gmail.com</span>

        </div>

        

        <div className='inpu'>

            <h1>Get In Touch</h1>
                            <div className='add'>

                                
                                <input type="text"  placeholder='name' />
                        <FaUserCircle className='ca'/> <br/>

                        <input type="email"  placeholder='email'/>
                        <FaEnvelope className='ca'/><br/>


                         

                        <input  type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  placeholder='Your phone number'/>
                        <FaPhoneAlt className='ca'/><br/>

                        <input type="textarea"  placeholder='message'/>
                        <FaPencilAlt className='ca'/><br/>

                        <button className="button-select">Send</button>




                        
                             
                              </div>
                        </div>

                        </div>

<div className="footer">

<div className="add">

  <p><address>
  Dodla Dairy Ltd<br/>
  CIN: L15209TG1995PLC020324<br/>
  8-2-293/82/A, 270/Q, Road No 10-C,<br/>
  Jubilee Hills, Hyderabad – 500 033.<br/>
  Telangana, India.<br/>
  Tel: +91 40 4546 7777<br/>
      </address></p>

      </div>

      <div className="lin">
          <h4>About Us</h4>
          <NavLink to="#corporate">Corporate</NavLink>
          <NavLink to="#allproduct">All product</NavLink>
          <NavLink to="#plants">Plants</NavLink>
          <NavLink to="#investor">Investor</NavLink>
      </div>

      <div className="account">
          <h4>My account</h4>
          <NavLink to="/myaccount">MyAccount</NavLink>
          <NavLink to="#viewcart">View Cart</NavLink>
          <NavLink to="#myiwshlist">My Wishlist</NavLink>
          <NavLink to="#Track My order">Track My Order</NavLink>
      </div>

      <div className="icon">
      <h4>Follow us</h4>
      <FaFacebook/>
       <FaInstagram/>
       <FaTwitter/>
       <FaYoutube/>
      </div>

</div>

<div className="copyright">
<p>2023@ Dairy milk Product List</p>
</div>

        </div>
    )
}

export default ContactUs;