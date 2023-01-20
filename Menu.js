import React from "react";
import {NavLink} from "react-router-dom"

const Menu=()=>{

    return (
        <div className="menu_style">
            <NavLink activeClassName='active_class'>
                AboutUs
                </NavLink>
            <NavLink activeClassName='active_class' to="contact">
                ContactUs
                </NavLink><br/>
            
        </div>
    )
}

export default Menu;