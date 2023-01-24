import React, { useState } from "react";

import images13 from './images/icecream1.jpg'
import { FaMinusCircle,FaPlusCircle,FaShoppingCart } from 'react-icons/fa';



function BlackCurrantIcecream(){

    const [num,setNum]=useState(0);

    const incNum=()=>{
        setNum(num+1);
    }

    const decNum=()=>{

        if(num>0){
            setNum(num-1);
        }
        else{
        setNum(0);
        }
    }

    return(

        <div>

            <div className="section">

                <div className="iceimg">
                    <img src={images13} alt=""/>
                </div>

                <div className='inform'>
                    <h1>Black Currant Icecream</h1>

                    <p className='pri'>₹220.00 – ₹840.00</p>

                    <p>Among all milk products ice cream is also rich source of calcium, phosphorus and other minerals of vital importance in building good bones and teeth. It is a very desirable food item for growing children and person who need to put on weight. In Katraj Dairy various types of Ice cream are available like Butterscotch, Mango, Vanilla, Pista, Chocolate and Strawberry. Ice cream is available in 35ml, 50ml, 70ml, 100ml Cups and 500ml, 1000ml, 2000ml, 4000ml& 100ml cone; Also available in Fruit N’ Nuts 500 ml tub.
Shelf Life : 6 months from manufacturing when stored at -18 0 C or below</p>
                  <hr/>

                  <h1>Quantity</h1>

                  <button className="but" onClick={incNum}><FaPlusCircle/></button>
                          <button className="but">{num}</button>
                          <button className="but" onClick={decNum}><FaMinusCircle/></button> <br/><br/>
                          <button className="shopi"><FaShoppingCart/>Add to Cart</button>

                </div>
            </div>

            


             </div>
    )
}

export default BlackCurrantIcecream;

