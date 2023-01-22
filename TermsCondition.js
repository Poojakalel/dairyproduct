import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import images1 from './images/dairi.jpg'
import images from './images/logo.jpg'


function TermsCondition(){
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
       <img src={images1} alt=""/>
   </div>

   <div className='condi'>
    <h1>Terms and condition</h1>
   </div>

   <div className='order'>
    <ol>
        <li>The minimum order for milk products should be of Rs. 500.00</li>
        <li> All the milk products will be sold at MRP. No delivery charges will be applied.</li>
        <li>. The milk products will be delivered within 48 hours of receiving order and receiving payment through payment gateway.</li>
        <li>All the payment should be made online. Please note that there is no ‘Cash on Delivery’ facility.</li>
        <li>After delivery if the milk and milk products are not consumed before the expiry date, no replacement will be given.

</li>
    </ol>
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
          <NavLink to='/contactus'>ContactUs</NavLink>
          <NavLink to='#corporate'>Corporate</NavLink>
          <NavLink to='#corporate'>Corporate</NavLink>
          <NavLink to='#corporate'>Corporate</NavLink>



      </div>

      <div className="account">
          <h4>My account</h4>
          <NavLink to ="/myaccount">MyAccount</NavLink>
          <NavLink to="/termscondition">Terms Condition</NavLink>
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

export default TermsCondition;