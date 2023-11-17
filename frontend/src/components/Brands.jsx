import React from 'react'
import { Link} from 'react-router-dom';
import '../stylesheets/brands.css';
import audi from '../assets/Audi.avif';
import bmw from '../assets/BMW.avif';
import ford from '../assets/Ford.avif';
import honda from '../assets/Honda.avif';
import hyundai from '../assets/Hyundai.avif';
import jaguar from '../assets/Jaguar.avif';
import kia from '../assets/Kia.avif';
import benz from '../assets/Mercedes-Benz.avif';
import porsche from '../assets/Porsche.avif';
import toyota from '../assets/Toyota.avif';
import volks from '../assets/Volkswagen.avif';
import lambo from '../assets/lamborghini.png';


const Brands = () => {
    
  return (
    <div className='brand-container'>
    <div className="brand-section">
        <div className="brand-header">
            <h1>Shop your favorite brand</h1>
        </div>
        <div className="brand-grid">
            
            <Link to={`/carlist?brand=Audi`} className='brand-link'>
            <div className="brand-card">
                <img src={audi} alt=""/>
                Audi
            </div>
            </Link>

            <Link to='/carlist?brand=BMW' className='brand-link'>
            <div className="brand-card">
                <img src={bmw} alt=""/>
                BMW
            </div>
            </Link>

            <Link to='/carlist?brand=Lamborghini' className='brand-link'>
            <div className="brand-card">
                <img src={lambo} alt=""/>
                Lamborghini
            </div>
            </Link>

            <Link to='/carlist?brand=Ford' className='brand-link'>
            <div className="brand-card">
                <img src={ford} alt=""/>
                Ford
            </div>
            </Link>

            <Link to='/carlist?brand=Honda' className='brand-link'>
            <div class="brand-card" id="bugatti-card">
                <img src={honda} alt=""/>
                Honda
            </div>
            </Link>

            <Link to='/carlist?brand=Hyundai' className='brand-link'>
            <div className="brand-card" id="ferrari-card">
                <img src={hyundai} alt=""/>
                Hyundai
            </div>
            </Link>

            <Link to='/carlist?brand=Jaguar' className='brand-link'>
            <div className="brand-card" id="porsche-card">
                <img src={jaguar} alt="" />
                Jaguar
            </div>
            </Link>

            <Link to='/carlist?brand=Kia' className='brand-link'>
            <div className="brand-card" id="porsche-card">
                <img src={kia} alt="" />
                Kia
            </div>
            </Link>

            <Link to='/carlist?brand=Mercedes-Benz' className='brand-link'>
            <div className="brand-card" id="porsche-card">
                <img src={benz} alt="" />
                Mercedes Benz
            </div>
            </Link>

            <Link to='/carlist?brand=Porsche' className='brand-link'>
            <div className="brand-card" id="porsche-card">
                <img src={porsche} alt="" />
                Porsche
            </div>
            </Link>

            <Link to='/carlist?brand=Toyota' className='brand-link'>
            <div className="brand-card" id="porsche-card">
                <img src={toyota} alt="" />
                Toyota
            </div>
            </Link>

            <Link to='/carlist?brand=Volkswagen' className='brand-link'>
            <div className="brand-card" id="porsche-card">
                <img src={volks} alt="" />
                Volkswagen
            </div>
            </Link>
        </div>
        {/* <div class="see-more" onclick="showMoreBrands()">
            See more <i className="fas fa-caret-down"></i>
        </div> */}
    </div>

</div>
  )
}

export default Brands