import {NavLink} from 'react-router-dom'
import images from './images/logo.jpg'
import images1 from './images/dairi.jpg'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'


function NavBar(){
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
        

        <div>

        <div className="home-page">
                <div className="my-home">
                    <h1>About Dodla Dairy</h1>

                    <p>Dodla Dairy Limited is a public limited company having its registered and corporate office at Hyderabad City of Telangana State in India. The company was incorporated in the year 1995 and production commenced in 1998. Currently, Our procurement is centered in 5 states and our products are available for purchase in 11 states. We have 110 milk chilling centers. Some of our plants are ISO 22000:2005 Certified while two are ISO 50001:2011 (EnMS) Certified.</p>

                    <button className="button-select">Read More</button>
                </div>

                <div className="my-ho">
                    <p><q>To supply good and safe milk & milk products consistently through continual improvement of our systems and practices.</q></p>
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
                        <NavLink className="imp" to='/contactus'>ContactUs</NavLink>
                        <NavLink className="imp" to='/ourparlour'>Our Parlour</NavLink>
                        <NavLink className="imp" to='/events'>events</NavLink>
                        <NavLink className="imp" to='/awards'>Awards</NavLink>



                    </div>

                    <div className="account">
                        <h4>My account</h4>
                        <NavLink className="imp" to ="/myaccount">MyAccount</NavLink>
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
        
        </div>

        
        
    )
}

export default NavBar;