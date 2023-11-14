import React from 'react'
import '../stylesheets/banner.css'
import carimg from '../assets/Volvo_full.avif'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-section'>
            <div className='car-img'>
                <img src={carimg} alt="img" />
            </div>
            <div className='info'>
                    <div className='title'>
                        Volvo S60 Recharge
                    </div>
                    <div className='price'>
                        Price : $45000
                    </div>
                    <div className='date'>
                        Launch Date : August 2023
                    </div>
                    <div className='type'>
                        Type : Sedan
                    </div>
                    <div className='desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi voluptatem tempore quas praesentium nesciunt facilis odio, in possimus quidem iure hic enim ad optio rerum, molestiae sequi nihil illum!
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Banner