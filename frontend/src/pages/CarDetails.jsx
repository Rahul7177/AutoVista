import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import instance from '../axios';
import Loader from '../components/loader'; // Import the Loader component
import '../stylesheets/carbanner.css';
import Carbanner from '../components/Carbanner';

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await instance.get(`/cars/${name}`);
        const data = response.data;
        setCar(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after data fetching completes (success or error)
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

  if (loading) {
    return <Loader />; // Show loader while loading data
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!car) {
    return <div style={{ fontSize: '2rem' }}>Not Found</div>;
  }

  return (
    <div>
      <Navbar />
      <Carbanner
        img={car.Image}
        name={car.Name}
        type={car.Type}
        make={car.Make}
        fuel={car.FuelType}
        date={car.LaunchDate}
        price={car.Price}
        desc={car.Desc}
      />
      {/* <Specifications/> */}
      <Footer />
    </div>
  );
};

export default CarDetails;
