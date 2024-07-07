import React, { useEffect, useState } from 'react';
import axios from '../axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { useLocation } from 'react-router-dom';
import Loader from '../components/loader'; // Import the Loader component
import '../stylesheets/CarList.css';

const CarList = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const brand = params.get('brand');
  const fuel = params.get('fuel');
  const type = params.get('type');
  const date = params.get('date');
  const name = params.get('name');
  
  let query = ""; 
  if (brand) {
    query = brand;
  } else if (fuel) {
    query = fuel;
  } else if (type) {
    query = type;
  } else if (date) {
    query = date;
  } else if (name) {
    query = name;
  }

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://auto-vista-server.vercel.app/cars/get/${query}`);
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Always set loading to false after data fetching completes
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <Navbar />
      
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        cars.length > 0 ? (
          cars.map((car) => (
            <Banner
              key={car._id}
              id={car._id}
              name={car.Name}
              type={car.Type}
              image={car.Image}
              price={car.Price}
              desc={car.Desc}
            />
          ))
        ) : (
          <p>No cars found</p>
        )
      )}

      <Footer />
    </div>
  );
};

export default CarList;
