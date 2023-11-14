import React from 'react'
import Navbar from '../components/Navbar'
// import CarInfo from '../components/CarInfo'
import Footer from '../components/Footer'
import '../stylesheets/CarList.css'
import Banner from '../components/Banner'

const CarList = () => {
  return (
    <div>
      <Navbar/>
      {/* <div className='carinfo-cont'>
      <CarInfo/>
      <CarInfo/>
      <CarInfo/>
      <CarInfo/>
      <CarInfo/>
      <CarInfo/>
      <CarInfo/>
      <CarInfo/>
      <CarInfo/>
      </div> */}
      <Banner/>
      <Banner/>
      <Banner/>
      <Banner/>

      <Footer/>
    </div>
  )
}

export default CarList