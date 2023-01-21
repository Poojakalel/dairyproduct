import React from "react";
import images11 from './images/fullcreammilk.jpg'
import images10 from './images/Service-Banner.jpg'
import images from './images/logo.jpg'
import { NavLink} from 'react-router-dom'

import images12 from './images/standardmilk.jpg'
import images13 from './images/tondlamilk.jpg'
import images14 from './images/uhtdoublemilk.jpg'
import images15 from './images/uhtmilk.jpg'

function Milk(){
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


        <div className="infor">
            <h1>Milk</h1>

            <p>We procure about 1.03 Million litres of raw milk per day as of March 31st, 2021 from about 1,09,670 farmers. Fresh milk from buffalos and cows is brought to the nearest chilling centers and then to the nearest processing plants without breaking the cold chain. The chilled milk is then pasteurized. This process kills pathogenic microbes that cause spoilage of milk and any harmful bacteria. Dodla milk is packed in high-quality food grade pouches which are user-friendly. The product undergoes stringent quality checks before packing. Dodla offers different types of milk in pouches as per customer requirements, such as Full Cream Milk, Toned Milk, Standardised Milk, Double Toned Milk and UHT Milk.

Dodla UHT [Ultrahigh Temperature Processed] Toned and Double Toned milk are packed in flexible pouches that have a shelf life up to 90 days. UHT Milk needs no refrigeration until it is opened and there is no need to boil the milk before it is consumed. UHT milk is also easy to carry while travelling. </p>

</div>

    <div className="milkifo">
        <div className="contain">
            <div className="prop">
                <img src={images11} alt=""/>
                <div className="descr">
                    <h3>Fresh Milk</h3>
                </div>
        
            <div className="ruler">
                <hr width="20%" align="left" padding="20%"/>
            </div>

            <div className="packing">
                <span>Packing</span>
            </div>

            <div className="liter">
                <h3>1ltr|500ml|175ml</h3>
            </div>
        </div>

        <div className="prop">
                <img src={images12} alt=""/>
                <div className="descr">
                    <h3>Fresh Milk</h3>
                </div>
        
            <div className="ruler">
                <hr width="20%" align="left" padding="20%"/>
            </div>

            <div className="packing">
                <span>Packing</span>
            </div>

            <div className="liter">
                <h3>1ltr|500ml|175ml</h3>
            </div>
        </div>

        <div className="prop">
                <img src={images13} alt=""/>
                <div className="descr">
                    <h3>Fresh Milk</h3>
                </div>
        
            <div className="ruler">
                <hr width="20%" align="left" padding="20%"/>
            </div>

            <div className="packing">
                <span>Packing</span>
            </div>

            <div className="liter">
                <h3>1ltr|500ml|175ml</h3>
            </div>
        </div>

        <div className="prop">
                <img src={images14} alt=""/>
                <div className="descr">
                    <h3>Fresh Milk</h3>
                </div>
        
            <div className="ruler">
                <hr width="20%" align="left" padding="20%"/>
            </div>

            <div className="packing">
                <span>Packing</span>
            </div>

            <div className="liter">
                <h3>1ltr|500ml|175ml</h3>
            </div>
        </div>

        <div className="prop">
                <img src={images15} alt=""/>
                <div className="descr">
                    <h3>Fresh Milk</h3>
                </div>
        
            <div className="ruler">
                <hr width="20%" align="left" padding="20%"/>
            </div>

            <div className="packing">
                <span>Packing</span>
            </div>

            <div className="liter">
                <h3>1ltr|500ml|175ml</h3>
            </div>
        </div>
    </div>
</div>





</div>
    )
}

export default Milk;