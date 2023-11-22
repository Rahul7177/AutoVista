import React,{useState,useEffect} from 'react';
import logo from '../assets/logo.png';
import '../stylesheets/navbar.css';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    console.log(searchQuery);
    const handleSearch = (e) => {
      
      navigate(`/cardetails?name=${searchQuery}`);
    };

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
                    <Link to='/carlist?type=Sedan'>Sedans</Link>
                    <Link to="/carlist?type=SUV">SUVs</Link>
                    <Link to="/carlist?type=Truck">Trucks</Link>
                    {/* <Link to="/carlist?type=">Convertibles</Link> */}
                    <Link to="/carlist?type=Mustang">Mustangs</Link>
                </div>
            </div>
            <div className="navbar-link-dropdown">
                <a className="dropbtn" href='/'>Used<i className="fas fa-caret-down"></i></a>
                <div className="dropdown-content">
                    <a href="/">Used Sedans</a>
                    <a href="/">Used SUVs</a>
                    <a href="/">Used Trucks</a>
                    <a href="/">Used Mustangs</a>
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

            <a href="/">Sell Your Car</a>
        </div>

        <div className='nav-right'>
        <div className="navbar-search">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass search_icon" onClick={handleSearch}></i>
        </div>

        <div className="navbar-link-dropdown account">
                <a className="dropbtn user-i" href='/'><i className="fas fa-user"></i></a>
                <div className="dropdown-content">
                    <Link to='/profile'>Profile</Link>
                    <Link to='/'>My Listings</Link>
                    {/* <Link to='/logout'>Log Out</Link> */}
                </div>
        </div>
        </div>
    </nav>
</div>
)
}

export default Navbar
