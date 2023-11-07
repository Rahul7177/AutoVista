import React from 'react'
import '../stylesheets/carinfo.css'
import volvo from '../assets/2024_Volvo.avif'
import { Link } from 'react-router-dom'

const CarInfo = () => {
  return (
    <div>
        <div className='carinfo-container'>
        <div className="carinfo-card">
            <Link to='/cardetails' className='link'>
                <img src={volvo} alt="img"/>
                <h2>2024 Volvo S60 Recharge</h2>
            </Link>
            </div>
            
        </div>

    </div>
  )
}

export default CarInfo