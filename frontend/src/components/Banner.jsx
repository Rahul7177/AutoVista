import React from 'react'
import '../stylesheets/banner.css'
import carimg from '../assets/Volvo_full.avif'

const Banner = ({id,image,name,type,price,desc}) => {
  return (
    <div className='banner-container'>
        <div className='banner-section'>
            <div className='car-img'>
                <img src={image} alt="img" />
            </div>
            <div className='info'>
                    <div className='title'>
                        {name}
                    </div>
                    <div className='price'>
                        Price : ${price}
                    </div>
                    <div className='type'>
                        Type : {type}
                    </div>
                    <div className='desc'>
                        {desc}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Banner