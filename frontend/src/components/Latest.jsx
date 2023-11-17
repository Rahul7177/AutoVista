import React from 'react'
import { Link } from 'react-router-dom';
import volvo from '../assets/2024_Volvo.avif';
import mist from '../assets/2024-Mitsubishi-Eclipse_Cross.avif';
import bmw from '../assets/2024-BMW-X3_M.avif';
import '../stylesheets/latest.css'

const Latest = () => {
  return (
    <div className='latest-container'>
    <div className='latest-section'>
      	<div className="latest-header">
    		<h1>Latest Launches</h1>
		    </div>

		<div className="latest-grid">

           <div className="latest-card">
          <Link to='/cardetails' className='link'> 
                <img src={volvo} alt=""/>
                <h2>2024 Volvo S60 Recharge</h2>
          </Link>            
            </div>
            

            <div className="latest-card">
            <Link to='/cardetails' className='link'>
                <img src={mist} alt=""/>
                <h2>2024 Mistubishi Eclipse Cross</h2>
            </Link>
            </div>
            

            <div className="latest-card">
            <Link to='/cardetails' className='link'>
                <img src={bmw} alt=""/>
                <h2>2024 BMW X3 M</h2>
            </Link>
            </div>
            
		</div>

      <div className="see-more" onclick="showMore()">
        <Link to='/carlist?date=2023' className='link'>See All</Link>
      </div>
    </div>

    </div>
  )
}

export default Latest