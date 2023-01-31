import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import images from './images/logo.jpg'
import { FaStar } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa";

import images1 from './images/dairi.jpg'
import images2 from './images/product1.jpg'
import images3 from './images/butter.jpg'
import images4 from './images/curd.jpg'
import images5 from './images/coneice.jpg'
import images6 from './images/paneer.jpg'
import images7 from './images/product10.jpg'
import images8 from './images/flavoured milk.jpg'
import images9 from './images/product9.jpg'
import images10 from './images/Service-Banner.jpg'
import {FiEye} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import Milk from './Milk';


function Allproduct(){

   
    return (
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
    <li><NavLink className="nav-bar-link" to="/productlist"><p id="count"><FaShoppingCart/><sup>0</sup></p></NavLink>  </li>

    </ul>
        </div>

        <div className='main'>
                <img src={images10} alt=""/>
            </div>


            <div className='prod'>

                <h1>Products</h1>
                <p>Dodla offers a wide range of products in both liquid milk and by-product categories. The liquid milk comprises of 5 types of variants and the by-product comprises of 14 types of variants</p>

                <p>Dodla offers a wide range of milk products comprising of Fresh Milk, Butter, Ghee, Paneer, Curd, Flavoured Milk, Doodh Peda, Ice Cream and Skimmed Milk Powder.</p>
            </div>

            <div className='list'>
                <div className='pro-container'>
                    <div className='pro'>
                        <img src={images2} alt=""/>
                        <div className='desc'>
                        <NavLink className='proname' to="/milk">Milk</NavLink>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>

                              <FaStar/>
                               <FaStar/>
                              <FaStar/>
                              <FaStar/>
                              <FaStar/>
                                
               
                            </div>
                        </div>

                        <div className='inpu'>
                            <div className='add'>
                                <input type="text"  placeholder='select option' />
                        <FaShoppingCart className='ca' />
                             
                              </div>
                        </div>

                        <div className='butt'>
                            <FaShoppingCart/>
                            <NavLink to='/milk' className='button-select'>
                                option select
                            </NavLink>
                            
                        </div>
                    </div>

                    <div className='pro'>
                        <img src={images3} alt=""/>
                        <div className='desc'>
                        <Link className='proname' to="/butter">Butter</Link>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                    </div>

                    <div className='pro'>
                        <img src={images4} alt=""/>
                        <div className='desc'>
                        <Link className='proname' to="/curd">Curd</Link>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                    </div>

                    <div className='pro'>
                        <img src={images5} alt=""/>
                        <div className='desc'>
                        <Link className='proname' to="/icecream">IceCream</Link>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                    </div>

                    <div className='pro'>
                        <img src={images6} alt=""/>
                        <div className='desc'>
                        <Link className='proname' to="/panner">Panner</Link>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                    </div>

                    <div className='pro'>
                        <img src={images7} alt=""/>
                        <div className='desc'>
                        <Link className='proname' to="/ghee">Ghee</Link>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                    </div>

                    <div className='pro'>
                        <img src={images8} alt=""/>
                        <div className='desc'>
                        <Link className='proname' to="/fmilk"> FlavouredMilk</Link>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                    </div>

                    <div className='pro'>
                        <img src={images9} alt=""/>
                        <div className='desc'>
                        <Link className='proname' to="/milk">Milk</Link>

                        </div>
                        <div className='block'>
                            <div className='price'>
                                Rs 10
                            </div>
                            <div className='star'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
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
          <NavLink className="imp" to="/contactus">ContactUs</NavLink>
          <NavLink className="imp" to="/ourparlour">Our Parlour</NavLink>
          <NavLink className="imp" to="/events">Events</NavLink>
          <NavLink className="imp" to="/awards">Awards</NavLink>
      </div>

      <div className="account">
          <h4>My account</h4>
          <NavLink className="imp" to="/myaccount">MyAccount</NavLink>
          <NavLink className="imp" to="/termscondition">Terms Condition</NavLink>
          <NavLink className="imp" to="/services">Services</NavLink>
          <NavLink className="imp" to="/feedback">Feedback</NavLink>
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

export default Allproduct;