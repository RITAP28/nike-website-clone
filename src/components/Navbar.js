import React from 'react';
import './Navbar.css';


const Navbar = () => {
//     const handleChange = () => {
    
// }
    return (
        <div className="container__navbar">
            <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1920px-Logo_NIKE.svg.png" alt="Nike__logo" />
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Customise</li>
                <li>Sales</li>
                <li>SNKRS</li>
            
            <input type="search" placeholder='Search' value="Search"  />
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            </ul>
        </div>
    )
};

export default Navbar;