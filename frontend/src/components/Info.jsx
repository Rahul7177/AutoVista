import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/info.css'
import dollor from '../assets/pricing2.png'
import cart from '../assets/cart.png'
import car from '../assets/car.png'

const Info = () => {
  return (
<div className='info-container'>

<div class="benefits-section">

  <h1>Why Us?</h1>
  <div className='benefit-container'>
  <div class="benefit">
    <img src={dollor} alt="Transparent Pricing Icon"/>
    <h3>Transparent pricing</h3>
    <p>No surprises here. See how much you'll pay on cars you like.</p>
  </div>
  <div class="benefit">
    <img src={car} alt="Minutes Not Hours Icon"/>
    <h3>Minutes, not hours</h3>
    <p>Time saving tools to help you find the right car in a snap.</p>
  </div>
  <div class="benefit">
    <img src={cart} alt="Shop Your Way Icon"/>
    <h3>Shop your way</h3>
    <p>Your own pace, your own space. Shop online where and when it's convenient for you.</p>
  </div>
  </div>
  <div class="sign-up-button">
      <Link to='/signup'>Sign Up</Link>
    </div>
</div>

</div>
  )
}

export default Info