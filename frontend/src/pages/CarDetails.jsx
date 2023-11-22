import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Banner from '../components/Banner'
import { useLocation } from 'react-router-dom';
import axios from '../axios'
import '../stylesheets/carbanner.css'
import Carbanner from '../components/Carbanner';


const CarDetails = () => {

  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(`/cars/${name}`);
        const data = response.data;
        setCar(data[0]);
      } catch (error) {
        setError(error.message);
        console.log(error.message)
      }
    };

    fetchCarData();
  }, [name]);

  useEffect(() => {
    if (car) {
      console.log(car);
      console.log(car.Image);
    }
  }, [car]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!car) {
    return <div style={{ fontSize: '2rem' }}>Not Found</div>;
  }

  return (
    <div>
      <Navbar/>
        <Carbanner img={car.Image} name={car.Name} type={car.Type} make={car.Make} fuel={car.FuelType} date={car.LaunchDate} price={car.Price} desc={car.Desc}/>
        {/* <Specifications/> */}
      <Footer/>
    </div>
  )
}

export default CarDetails