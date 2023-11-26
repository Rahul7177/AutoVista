
import React, { useState } from 'react';
import '../stylesheets/deletecar.css'
import { useNavigate } from 'react-router-dom';

const DeleteCar = () => {
  const navigate = useNavigate();
  const [carName, setCarName] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://autovista.vercel.app/api/cars/delete/${carName}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete car');
      }

      const deletedCar = await response.json();
      setMessage(`Car "${deletedCar.Name}" deleted successfully!`);
      window.alert("Car deleted successfully!");
      navigate('/admin');
    } catch (error) {
      setMessage('Error deleting car');
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className='delete-container'>
      <div className='delete-section'>
      <h2>Delete Car</h2>
      <label>
        Enter Car Name:
        <input
          type="text"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Enter car name"
        />
      </label>
      <br />
      <button onClick={handleDelete}>Delete Car</button>
      <p>{message}</p>
      </div>
    </div>
  );
};

export default DeleteCar;
