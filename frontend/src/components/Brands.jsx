import React from 'react'
import '../stylesheets/brands.css';
import audi from '../assets/Audi.avif';
import bmw from '../assets/BMW.avif';
import chev from '../assets/Chevrolet.avif';
import ford from '../assets/Ford.avif';
import honda from '../assets/Honda.avif';
import hyundai from '../assets/Hyundai.avif';
import jaguar from '../assets/Jaguar.avif';
import kia from '../assets/Kia.avif';
import benz from '../assets/Mercedes-Benz.avif';
import porsche from '../assets/Porsche.avif';
import toyota from '../assets/Toyota.avif';
import volks from '../assets/Volkswagen.avif';

const Brands = () => {
  return (
    <div className='brand-container'>
    <div className="brand-section">
        <div className="brand-header">
            <h1>Shop your favorite brand</h1>
        </div>
        <div className="brand-grid">

            <div className="brand-card">
                <img src={audi} alt=""/>
                Audi
            </div>
            <div className="brand-card">
                <img src={bmw} alt=""/>
                BMW
            </div>
            <div className="brand-card">
                <img src={chev} alt=""/>
                Chevrolet
            </div>
            <div className="brand-card">
                <img src={ford} alt=""/>
                Ford
            </div>
            <div class="brand-card" id="bugatti-card">
                <img src={honda} alt=""/>
                Honda
            </div>
            <div className="brand-card" id="ferrari-card">
                <img src={hyundai} alt=""/>
                Hyundai
            </div>
            <div className="brand-card" id="porsche-card">
                <img src={jaguar} alt="" />
                Jaguar
            </div>
            <div className="brand-card" id="porsche-card">
                <img src={kia} alt="" />
                Kia
            </div>
            <div className="brand-card" id="porsche-card">
                <img src={benz} alt="" />
                Mercedes Benz
            </div>
            <div className="brand-card" id="porsche-card">
                <img src={porsche} alt="" />
                Porsche
            </div>
            <div className="brand-card" id="porsche-card">
                <img src={toyota} alt="" />
                Toyota
            </div>
            <div className="brand-card" id="porsche-card">
                <img src={volks} alt="" />
                Volkswagen
            </div>
        </div>
        {/* <div class="see-more" onclick="showMoreBrands()">
            See more <i className="fas fa-caret-down"></i>
        </div> */}
    </div>

</div>
  )
}

export default Brands