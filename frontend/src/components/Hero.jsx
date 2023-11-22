import React,{useState} from 'react';
import '../stylesheets/hero.css';
import { Link } from 'react-router-dom';
import bg from '../assets/car2.mp4'
import {useNavigate} from 'react-router-dom';


const Hero = () => {

  const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    console.log(searchQuery);
    const handleSearch = (e) => {
      // if(searchQuery === 'Audi' || 'BMW')
      // {
        navigate(`/carlist?brand=${searchQuery}`);
      // }
      // else{
      // navigate(`/cardetails?name=${searchQuery}`);
      // }
    };
  return (
    <div className='hero-container'>
		<video src={bg} alt="video" muted loop autoPlay />
    <section class="hero">
        <h1>Discover </h1><br/><h2>your perfect DRIVE</h2>
        <div class="search-bar">
            <input type="text" placeholder="Search model, or type" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
            <i class="fa-solid fa-magnifying-glass search_icon" onClick={handleSearch}></i>
        </div>
        <div class="shop-buttons">
        <Link to='/carlist'><button>Shop New</button></Link>
        <Link to='/carlist'><button>Shop Used</button></Link>
        <Link to='/carlist?fuel=Electric'><button>Shop Electric</button></Link>
        </div>
    </section>
</div>
  )
}

export default Hero