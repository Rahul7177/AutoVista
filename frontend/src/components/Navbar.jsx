import React from 'react';
import logo from '../assets/logo.png';
import '../stylesheets/navbar.css';
import { Link} from 'react-router-dom';


const Navbar = () => {
  return (
<div className='nav-container'>
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to='/'><img src={logo} alt="Logo"/></Link>
        </div>
        <div className="navbar-links">
            <div className="navbar-link-dropdown">
                <a className="dropbtn" href='/'>New <i className="fas fa-caret-down"></i></a>
                <div className="dropdown-content">
                    <a href="/">Sedans</a>
                    <a href="/">SUVs</a>
                    <a href="/">Trucks</a>
                    <a href="/">Convertibles</a>
                    <a href="/">Mustangs</a>
                </div>
            </div>
            <div className="navbar-link-dropdown">
                <a className="dropbtn" href='/'>Used<i className="fas fa-caret-down"></i></a>
                <div className="dropdown-content">
                    <a href="/">Used Nanos</a>
                    <a href="/">Used Mustangs</a>
                    <a href="/">Used Trucks</a>
                    <a href="/">Used Sedans</a>
                </div>
            </div>
            <div className="navbar-link-dropdown">
                <a className="dropbtn" href='/'>Electric <i className="fas fa-caret-down"></i></a>
                <div className="dropdown-content">
                    <a href="/">Electric SUVs</a>
                    <a href="/">Electric Sedans</a>
                    <a href="/">Electric Mustangs</a>
                    <a href="/">Electric Trucks</a>
                </div>
            </div>
            <div className="navbar-link-dropdown">
                <a className="dropbtn" href='/'>Research <i className="fas fa-caret-down"></i></a>
                <div className="dropdown-content">
                    <a href="/">Car Reviews</a>
                    <a href="/">Pricing & Deals</a>
                    <a href="/">Car Leans</a>
                    <a href="/">Car Comparisons</a>
                    <a href="/">Quiz Play</a>
                </div>
            </div>
            <a href="/">Sell Your Car</a>
        </div>
        <div className="navbar-search">
            <input type="text" placeholder="Search"/>
            <i className="fa-solid fa-magnifying-glass search_icon"></i>
        </div>
        <div className="navbar-login">
            <Link to="/login"><i className="fas fa-user"></i>Log In</Link>
        </div>
    </nav>
</div>
)
}

export default Navbar