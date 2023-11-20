import React ,{useEffect,useState}from 'react'
import axios from '../axios'
import Navbar from '../components/Navbar'
// import CarInfo from '../components/CarInfo'
import Footer from '../components/Footer'
import '../stylesheets/CarList.css'
import Banner from '../components/Banner'
import { useLocation } from 'react-router-dom';


const CarList = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const brand = params.get('brand');
  const fuel = params.get('fuel');
  const type = params.get('type');
  const date = params.get('date');
  
  let query = ""; 
  if(brand)
  {
    query = brand;
  }
  else if(fuel){
    query = fuel
  }
  else if(type){
    query = type
  }
  else if(date)
  {
    query = date
  }

  const [cars, setCars] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get(`/cars/get/${query}`);
      setCars(data);
      console.log(data);
    };
    fetchdata();
  }, [query]);


  return (
    <div>
      <Navbar/>

      {cars &&
          cars?.data.map((cars) => (
            // console.log(cars.Name)
            <Banner
              key = {cars._id}
              id = {cars._id}
              name = {cars.Name}
              type = {cars.Type}
              image={cars.Image}
              price = {cars.Price}
              desc = {cars.Desc}
            />
          ))}
      <Footer/>
    </div>
  )
}

export default CarList