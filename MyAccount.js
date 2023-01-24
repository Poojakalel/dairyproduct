

import { useState } from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import images from './images/logo.jpg'
import images10 from './images/Service-Banner.jpg'




function MyAccount(){

   const[user,setUser]=useState("");
   const[password,setPassword]=useState("");
   const[userErr,setUserErr]=useState(false);
   const[passErr,setPassErr]=useState(false);


   function userHandler(e){
    let item=e.target.value;
    if(item.length<3)
    {
        setUserErr(true)
    }
    else{
        setUserErr(false)
    }
    setUser(item)
    console.log(e.target.value.length);
   }

   function passwordHandler(e){
    let item=e.target.value;
    if(item.length<3){
        setPassErr(true)
    }
    else{
        setPassErr(false);
    }
    setPassword(item)
    console.log(e.target.value);
   }
    
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

    
   <div className="login">
     
     
     
        <h1>Login</h1>
     

     <div className='field'>
        <label>Usrname or email: </label><br/><br/>
        <input type="text" onChange={userHandler}/>  {userErr?<span>User Not valid</span>:""}
        <br/>
        <label>Password</label><br/><br/>
        <input type="password" onChange={passwordHandler}/><br/><br/>  {passErr?<span>Password not valid</span>:""}
        <button className="button-select">LOGIN</button>
     </div>
</div>
     <div className="register">
        
            <h1>Register</h1>
        

        <div className="fill">
            <label>Email address</label><br/><br/>
            <input type="email"/><br/><br/>
            <label>password</label><br/><br/>
            <input type="password" /><br/><br/>
            <p className='data'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='privacy'>privacy policy.</span></p>
            <button className='button-select' >REGISTER</button>
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
          <NavLink to="/contactus">ContactUs</NavLink>
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

export default MyAccount;