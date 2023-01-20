import React from "react";
import {Link, NavLink} from 'react-router-dom'
import images from './images/logo.jpg'
import { FaStar } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa";

import images1 from './images/dairi.jpg'
import images2 from './images/icecream.jpg'
import images3 from './images/icecream1.jpg'
import images4 from './images/icecream2.jpg'
import images5 from './images/icecream4.jpg'
import images6 from './images/vanila.jpg'
import images7 from './images/icecream5.jpg'
import images8 from './images/icecream6.jpg'
import images9 from './images/icecream5.jpg'
import images10 from './images/Service-Banner.jpg'
import {FiEye} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



function IceCream(){
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


            <div className='prod'>

                <h1>IceCream Product</h1>
             <p>Our ice creams are available in 62 stock keeping unit (“SKUs”) and is available in box, bars, cones and cups. Our ice creams are manufactured using only milk fat and cream.</p>
            </div>

            <div className='list'>
                <div className='pro-container'>
                    <div className='pro'>
                        <img src={images2} alt=""/>
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
          <NavLink to="#corporate">Corporate</NavLink>
          <NavLink to="#allproduct">All product</NavLink>
          <NavLink to="#plants">Plants</NavLink>
          <NavLink to="#investor">Investor</NavLink>
      </div>

      <div className="account">
          <h4>My account</h4>
          <NavLink to="#signin">Sign In</NavLink>
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

export default IceCream;