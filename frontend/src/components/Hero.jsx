import React from 'react';
import '../stylesheets/hero.css';
import bg from '../assets/car2.mp4'

const Hero = () => {
  return (
    <div className='hero-container'>
		<video src={bg} alt="video" muted loop autoPlay />
    <section class="hero">
        <h1>Discover </h1><br/><h2>your perfect DRIVE</h2>
        <div class="search-bar">
            <i class="fa-solid fa-magnifying-glass search_icon"></i>
            <input type="text" placeholder="Search model, or type"/>
        </div>
        <div class="shop-buttons">
            <button>Shop New</button>
            <button>Shop Used</button>
            <button>Shop Electric</button>
        </div>
    </section>
</div>
  )
}

export default Hero