import React from 'react';
import '../Styles/navbar.css';

import { NavLink } from 'react-router-dom'
const NavBar = () => {


    const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)

    return (
        <>

            <div className="navbar">
                <h5>Pizzería Mamma Mía!</h5>
                <div className="linksNavbar">
                    <NavLink className={setActiveClass} end to='/'>Home</NavLink>
                    {' - '}
                    <NavLink className={setActiveClass} end to='/carrito'>Carrito</NavLink>
                </div>
            </div>
        </>
    )
};

export default NavBar;