import React from 'react'
import '../stylesheets/banner.css'
import { Link} from 'react-router-dom';

const Banner = ({id,image,name,type,price,desc}) => {
  return (
      <div className='banner-container'>
        <Link to={`/cardetails?name=${name}`} className='banner-link' >
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
        </Link>
    </div>
  )
}

export default Banner