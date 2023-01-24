import React from 'react';
import { FaMinusCircle,FaPlusCircle } from 'react-icons/fa';

const CartAmountToggle=({amount,setDecrease,setIncrease})=>{


    return(
        <div className='cart-button'>
            <div className='amount-toggle'>
                <button className='but' onClick={()=>setDecrease()}>
                    <FaMinusCircle/>
                </button>
                <div className='amount-style'>{amount}</div>
                <button className='but' onClick={()=>setIncrease()}>
                    <FaPlusCircle/>
                </button>
            </div>
        </div>
    )

    
};

export default CartAmountToggle;