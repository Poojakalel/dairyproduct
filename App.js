import React from "react";

import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Allproduct from "./Allproduct";
import './index.css';
import NavBar from "./NavBar";
import IceCream from "./IceCream";
import Sweets from "./Sweets";
import Milk from './Milk';
import ContactUs from './ContactUs';
import MyAccount from './MyAccount';
import TermsCondition from "./TermsCondition";
import Services from "./Services";
import Feedback from "./Feedback";
import OurParlour from "./OurParlour";
import Events from "./Events";
import Awards from "./Awards";

const App=()=>{
  return(
    <BrowserRouter>



   {/* <NavBar/>
   <Home/>
   <Allproduct/> */}
   
   
   
   
   
   <Routes>
    <Route path="/" element={<NavBar/>}/>
    
    <Route path="/home" element={<Home/>}/>
    <Route path="/allproduct" element={<Allproduct/>}/>
    <Route path="/icecream" element={<IceCream/>}/>
    <Route path="/sweets" element={<Sweets/>}/>
    <Route path="/milk" element={<Milk/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/myaccount" element={<MyAccount/>}/>
    <Route path="/termscondition" element={<TermsCondition/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/ourparlour" element={<OurParlour/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/awards" element={<Awards/>}/>
   </Routes>
 
    </BrowserRouter>
  )
}
export default App;


