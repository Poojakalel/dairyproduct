import {NavLink} from 'react-router-dom'
import images from './images/logo.jpg'
import images1 from './images/dairi.jpg'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'




function Services(){
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

   <div className="servi">
    <h1>Services</h1>
   </div>

   <div className='servic'>
    <h2>We provide following services to the milk supplying farmers through Inputs/PIT Divisions of Sangh</h2>


   </div>

   <div className='ser-list'>
    <ul>
        <li>Artificial Insemination facilities at concessional rates.</li>
        <li>Supply of cattle feed at fair prices to maintain good health of the livestock.</li>
        <li>Supply mineral mixture with 25% subsidy.</li>
        <li>Arrange common programme for tick, gadfly and worm eradication.</li>
        <li>Supply of machines for hay, straw, fodder, seeds and milking machines to milk supplying farmers with 25% subsidy.</li>
        <li>Supply of Theileria vaccine on demand.</li>
        <li>Arrange camps for medical checkup of barren cattle, on demand.</li>
        <li>Provide guidance of experts in the field of veterinary science and arrange seminars.</li>
        <li>Supply of medicines for the cattle at fair prices.</li>
    </ul>

    <h1>Under National Dairy Scheme 1:</h1>
    <li>Ration balanced programme</li>
    <li>Village based milk procurement programme at village level</li>
    <li>Fodder development programme</li>
    <li>Clean milk production programme</li>
    <li>Environmental and social activities</li>
   </div>

   <div className='balance'>
    <h1>Balanced animal feeding programme:</h1>
    <p>Under this programme and using the software developed by NDDB, the farmers get knowhow of making balanced cattle feed, at the minimum cost, from the available feed in their cowshed/byre and to suit the animal weight, fat, milk quality & quantity, capability etc.

Today 70 % of the total expenditure is spent on the animal feed. Apart from the reduction in these expenses, there are improvements seen in the milk quantity and quality in terms of fat, SNF. Moreover the animal health and fertility improve. This programme is regularly in operation in the area under Pune District Co-operative Milk Producers’ Association. Under the programme, 10 days’ training is imparted to persons from each village in the area, along with the training material. These individuals have been assigned to the Dudh Utpadak Sangh in their respective village. Those desirous of having the programme in their village or in their Society, are requested to contact our Input Division.

</p>
    <h1>Fodder Development Programme:</h1>
    <p>The programme includes demonstrations of various machines, construction of Biomass Bunker, Murghas preparation and information about fodder & seeds. The machinery is made available to the farmers on nominal rent.</p>
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
          <NavLink className="imp" to='#corporate'>Corporate</NavLink>
          <NavLink className="imp" to='#corporate'>Corporate</NavLink>
          <NavLink className="imp" to='#corporate'>Corporate</NavLink>



      </div>

      <div className="account">
          <h4>My account</h4>
          <NavLink className="imp" to ="/myaccount">MyAccount</NavLink>
          <NavLink className="imp" to="/termscondition">Terms Condition</NavLink>
          <NavLink className="imp" to="#myiwshlist">My Wishlist</NavLink>
          <NavLink className="imp" to="#Track My order">Track My Order</NavLink>
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

export default Services;