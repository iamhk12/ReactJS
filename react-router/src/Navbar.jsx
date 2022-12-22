import React from "react";
import { NavLink } from "react-router-dom"
const Navbar = () => {
    return <>

        <NavLink to="/" activeClassName="active_nav">About</NavLink>
        <NavLink to="/contact" activeClassName="active_nav">Contact</NavLink>
    </>
}

export default Navbar