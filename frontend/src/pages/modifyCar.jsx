import React, { useState } from 'react';
import '../stylesheets/modifycar.css'
import { useNavigate } from 'react-router-dom';

const ModifyCar = () => {
  const navigate = useNavigate();
  const [carName, setCarName] = useState('');
  const [updatedCarData, setUpdatedCarData] = useState({
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
  const [message, setMessage] = useState('');

  const handleModify = async () => {
    try {
      const response = await fetch(`https://auto-vista-server.vercel.app/cars/modify/${carName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCarData),
      });

      if (!response.ok) {
        throw new Error('Failed to modify car');
      }

      const modifiedCar = await response.json();
      setMessage(`Car "${modifiedCar.Name}" modified successfully!`);
      window.alert("Car details modified successfully!");
      navigate('/admin')
    } catch (error) {
      setMessage('Error modifying car');
      console.error('Error modifying car:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className='modify-container'>
      <div className='modify-section'>
      <h2>Modify Car</h2>
      <label>
        Enter Car Name:
        <br/>
        <input
          type="text"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Enter car name"
        />
      </label>
      <br />
      <label>
        Modify Car Name:
        <br/>
        <input
          type="text"
          name="Name"
          value={updatedCarData.Name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Modify Car Type:
        <br/>
        <input
          type="text"
          name="Type"
          value={updatedCarData.Type}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify Car Make:
        <br/>
        <input
          type="text"
          name="Make"
          value={updatedCarData.Make}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify Car Price:
        <br/>
        <input
          type="number"
          name="Price"
          value={updatedCarData.Price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify Car Image:
        <br/>
        <input
          type="text"
          name="Image"
          value={updatedCarData.Image}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify Car Description:
        <br/>
        <textarea
          name="Desc"
          value={updatedCarData.Desc}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify Car Fuel Type:
        <br/>
        <input
          type="text"
          name="FuelType"
          value={updatedCarData.FuelType}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify Car Launch Date:
        <br/>
        <input
          type="text"
          name="LaunchDate"
          value={updatedCarData.LaunchDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify Car Acceleration:
        <br/>
        <input
          type="text"
          name="Acceleration"
          value={updatedCarData.Acceleration}
          onChange={handleChange}
        />
      </label>
      <br />

      <button onClick={handleModify}>Modify Car</button>
      <p>{message}</p>
      </div>
    </div>
  );
};

export default ModifyCar;
