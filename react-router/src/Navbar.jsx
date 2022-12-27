import React from "react";
import { NavLink } from "react-router-dom"
const Navbar = () => {
    return <>
        <nav>
            <NavLink to="/" activeClassName="active_nav">About</NavLink>
            <NavLink to="/contact" activeClassName="active_nav">Contact</NavLink>
            <NavLink to="/services" activeClassName="active_nav">Services</NavLink>
            <NavLink to="/user/Himanshu" activeClassName="active_nav">User</NavLink>
            <NavLink to="/search" activeClassName="active_nav">Search</NavLink>
        </nav>
    </>
}

export default Navbar