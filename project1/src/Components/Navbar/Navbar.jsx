import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setmenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="nav-menu">
                <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setmenu("home")}>Home</Link>
                <a href='#explore-menu' className={menu === "menu" ? "active" : ""} onClick={() => setmenu("menu")}>Menu</a>
                <a href='#app-download' className={menu === "mobile app" ? "active" : ""} onClick={() => setmenu("mobile app")}>Mobile app</a>
                <a href='#footer' className={menu === "contact us" ? "active" : ""} onClick={() => setmenu("contact us")}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search} alt="" className="search" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="/" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar