import { FaShoppingCart } from "react-icons/fa";
import images from './images/logo.jpg'
import images9 from './images/product9.jpg'
import { FaStar } from "react-icons/fa"
import {Link, NavLink} from 'react-router-dom'


// import images11 from './images/icecream.jpg'
// import images12 from './images/icecream1.jpg'
// import images13 from './images/icecream2.jpg'
// import images14 from './images/icecream4.jpg'
// import images15 from './images/vanila.jpg'
// import images16 from './images/icecream5.jpg'
// import images17 from './images/icecream6.jpg'
// import images18 from './images/icecream5.jpg'

function Icecream({icecream,addToCart}){
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
<li><NavLink className="nav-bar-link" to="/cartList"><p id="count"><FaShoppingCart/>CartList
</p></NavLink>  </li>

</ul>
</div>



          <div className="flex">

               {
     icecream.map((icecreamItem,icecreamIndex)=>{

       return(


            
      <div style={{width:'50%'}}>

                   <div className="icecream-item">
                    <img src={icecreamItem.url} width="100%"/>
                    <p>{icecreamItem.name}|{icecreamItem.category}</p>
                    <p>Rs {icecreamItem.price}</p>
                    <button onClick={()=>addToCart(icecreamItem)}>Add To Cart</button>
               
                </div>    

                </div>
          )

     })
}




          </div>

          </div>
     )
}

export default Icecream;