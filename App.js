import React from "react";

import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Allproduct from "./Allproduct";
import './index.css';
import NavBar from "./NavBar";
import Icecream from './Icecream';
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
// import ProductList from "./ProductList";
import Star from './Star';
import BlackCurrantIcecream from "./BlackCurrantIcecream";
import CartList from "./CartList";


import image11 from './images/icecream.jpg'
import image12 from './images/icecream1.jpg'
import image13 from './images/icecream2.jpg'
import image14 from './images/icecream4.jpg'
import image15 from './images/vanila.jpg'
import image16 from './images/icecream5.jpg'
import image17 from './images/icecream6.jpg'



import images2 from './images/basundi.jpg'
import images3 from './images/doodhpeda.jpg'
import images4 from './images/elachisonpapdi.jpg'
import images5 from './images/gheesonpapdi.jpg'
import images6 from './images/junnu.jpg'
import images7 from './images/mysorepark.jpg'
import images8 from './images/sonpapdi.jpg'
import images9 from './images/rasgulla.jpg'



import {useState} from 'react';
const App=()=>{

  const [icecream,setIcecream]=useState([
    {
      url: 'images/icecream.jpg',
      name: 'Black Curaant Icecream',
      category:'Icecream',
      price:200
    },
    {

      url: 'images/icecream1.jpg',
      name: 'Black Curaant Icecream',
      category:'Icecream',
      price:200

    },

    {
      url: 'images/icecream2.jpg',
      name: 'Black Curaant Icecream',
      category:'Icecream',
      price:200
    },

  {
    url: 'images/icecream3.jpg',
      name: 'Black Curaant Icecream',
      category:'Icecream',
      price:200
  },

  {

    url: 'images/icecream4.jpg',
      name: 'Black Curaant Icecream',
      category:'Icecream',
      price:200
  },

  {
    url: 'images/icecream5.jpg',
      name: 'Black Curaant Icecream',
      category:'Icecream',
      price:200
  },

  {
    url: 'images/icecream6.jpg',
      name: 'Black Curaant Icecream',
      category:'Icecream',
      price:200
  }

  ])

  const [sweets,setSweet]=useState([
    {
      url: 'images/basundi.jpg',
      name: 'Basundi',
      category: 'Sweets',
      price: '350'
     },

     {
      url:'images/doodhpeda.jpg',
      name:'Doodhpeda',
      category:'Sweets',
      price:'300'
     },

     {
      url:'images/elachisonpapdi.jpg',
      name:'Elachi Sonpapdi',
      category: 'Sweets',
      price: '260'
     },

     {
      url:'images/gheesonpapdi.jpg',
      name:'Ghee Sonpapdi',
      category:'Sweets',
      price:450
     },

     {
      url:'images/junnu.jpg',
      name:'Junne',
      category:'Sweets',
      price:320
     },

     {
      url:'images/rasgulla.jpg',
      name:'Rusgulla',
      category:'Sweets',
      price:270
     }



  ])


  const [cart,setCart]=useState([])

   console.log(cart)  
  const addToCart=(data)=>{

    
    setCart([...cart, {...data, quantity:1}])

  }
  return(

    
    <BrowserRouter>

    
  

   {/* <NavBar/>
   <Home/>


   <Allproduct/> */}

   
   
   
   
   
   <Routes>
    <Route path="/" count={cart.length} element={<NavBar/>}/>

    
    <Route path="/home" element={<Home/>}/>
    <Route path="/allproduct" element={<Allproduct/>}/>
    {/* <Route path="/icecream"  element={<IceCream/>}/> */}
    <Route path="/sweets" sweets={sweets} addToCart={addToCart} element={<Sweets/>}/>
    <Route path="/cartlist"  element={<CartList cart={cart}/>}/>

    <Route path="/icecream" count={cart.length} element={<Icecream icecream={icecream} addToCart={addToCart}/>} />
    <Route path="/milk" element={<Milk/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/myaccount" element={<MyAccount/>}/>
    <Route path="/termscondition" element={<TermsCondition/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/ourparlour" element={<OurParlour/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/awards" element={<Awards/>}/>
    <Route path="/blackcurranticecream" element={<BlackCurrantIcecream/>}/>
   </Routes>
 
    </BrowserRouter>
  )
}
export default App;


