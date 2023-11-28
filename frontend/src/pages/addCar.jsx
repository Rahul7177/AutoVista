import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/addcar.css'
const AddCar = () => {
    const navigate = useNavigate();
  const [carData, setCarData] = useState({
    Name: '',
    Type: '',
    Make: '',
    Price: 0,
    Image: '',
    Desc: '',
    FuelType: '',
    LaunchDate: '',
    Acceleration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://auto-vista-server.vercel.app/cars/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });

      if (!res.ok) {
        const error = new Error(res.statusText);
        error.response = res;
        throw error;
      }

      const addedCar = await res.json();
      console.log('Car added successfully:', addedCar);
      window.alert("Car added successfully!");
      navigate('/admin')
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error adding car:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className='addcar-container'>
      <div className='addcar-section'>  
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input type="text" name="Name" value={carData.Name} onChange={handleChange} required/>
        </label>
        <label>
          Type:
          <br/>
          <input type="text" name="Type" value={carData.Type} onChange={handleChange} required/>
        </label>
        <label>
          Make:
          <br/>
          <input type="text" name="Make" value={carData.Make} onChange={handleChange} required/>
        </label>
        <label>
          Price:
          <br/>
          <input type="number" name="Price" value={carData.Price} onChange={handleChange} required/>
        </label>
        <label>
          Fuel:
          <br/>
          <input type="text" name="FuelType" value={carData.FuelType} onChange={handleChange} required/>
        </label>
        <label>
          Year:
          <br/>
          <input type="text" name="LaunchDate" value={carData.LaunchDate} onChange={handleChange} required/>
        </label>
        <label>
          Acceleration:
          <br/>
          <input type="text" name="Acceleration" value={carData.Acceleration} onChange={handleChange} required/>
        </label>
        <label>
          Image:
          <br/>
          <input type="text" name="Image" value={carData.Image} onChange={handleChange} required/>
        </label>
        <label>
          Description:
          <br/>
          <textarea name="Desc" value={carData.Desc} onChange={handleChange} required/>
        </label>
        <button type="submit">Add Car</button>
      </form>
      </div>
    </div>
  );
};

export default AddCar;
