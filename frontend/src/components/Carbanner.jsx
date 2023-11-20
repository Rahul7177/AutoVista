import React from 'react'



const Carbanner = ({img,name,type,make,fuel,date,price,desc}) => {
  return (
    <div className='carbanner-container'>
        <div className='carbanner-section'>
            <h1>{name}</h1>
            <div className='image-section'>
              <img src={img} alt="CarImage" />
                <div className='specs-cards'>
                    <div>Brand : {make}</div>
                    <div>Fuel : {fuel}</div>
                    <div>Year : {date}</div>
                </div>
            </div>
            <div className='specs-section'>
                 <div className='s-price'><span>Price : </span>$ {price} (approx)</div>
                 <div className='s-row'>
                    <div className='s-brand'><span>Brand : </span>{make}</div>
                    <div className='seperator'>|</div>
                    <div className='s-type'><span>Type : </span>{type}</div>
                    <div className='seperator'>|</div>
                    <div className='s-fuel-type'><span>Fuel Type : </span>{fuel}</div>
                    <div className='seperator'>|</div>
                    <div className='s-year'><span>Launch Year : </span>{date}</div>
                 </div>
                 <div className='s-verdict'><span>Verdict : </span>{desc}</div>
                  
            </div>
        </div>
    </div>
  )
}

export default Carbanner