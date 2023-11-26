require('dotenv').config({path:'../config.env'});
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Cars = require("./Cars");
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors({ 
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(require('./auth'));

const connection_url = process.env.MONGO_URL;


mongoose.connect(connection_url);


app.get("/",(req,res) => {res.send("Home page")
});

app.get("/cars/get", async (req, res) => {
  try {
    const data = await Cars.find({}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Audi", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Audi'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/BMW", async (req, res) => {
  try {
    const data = await Cars.find({Make:'BMW'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Lamborghini", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Lamborghini'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Ford", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Ford'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Honda", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Honda'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Hyundai", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Hyundai'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Jaguar", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Jaguar'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Kia", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Kia'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Mercedes-Benz", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Mercedes-Benz'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Porsche", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Porsche'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Toyota", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Toyota'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Volkswagen", async (req, res) => {
  try {
    const data = await Cars.find({Make:'Volkswagen'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Electric", async (req, res) => {
  try {
    const data = await Cars.find({FuelType:'Electric'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Sedan", async (req, res) => {
  try {
    const data = await Cars.find({Type:'Sedan'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/SUV", async (req, res) => {
  try {
    const data = await Cars.find({Type:'SUV'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Truck", async (req, res) => {
  try {
    const data = await Cars.find({Type:'Truck'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/Mustang", async (req, res) => {
  try {
    const data = await Cars.find({Type:'Mustang'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/get/2023", async (req, res) => {
  try {
    const data = await Cars.find({LaunchDate:'2023'}).exec();
    res.status(200).send(data);
    // console.log(data);
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).send(err.message);
  }
});

app.get("/cars/:name", async (req, res) => {
  const carName = req.params.name;

  try {
    const car = await Cars.find({ Name: carName }).exec();

    if (!car) {
      return res.status(404).send("Car not found");
    }

    res.status(200).send(car);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});
app.get("/cars/get/:name", async (req, res) => {
  const carName = req.params.name;

  try {
    const car = await Cars.find({ Name: carName }).exec();

    if (!car) {
      return res.status(404).send("Car not found");
    }

    res.status(200).send(car);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});


app.post("/cars/add", async (req, res) => {
  const carData = req.body;

  try {
    const newCar = new Cars(carData);
    const savedCar = await newCar.save();
    res.status(201).send(savedCar);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});


app.put('/api/cars/modify/:name', async (req, res) => {
  const carName = req.params.name;
  const updatedCarData = req.body;

  try {
    const updatedCar = await Cars.findOneAndUpdate({ Name: carName }, updatedCarData, {
      new: true,
    });

    if (!updatedCar) {
      return res.status(404).send('Car not found');
    }

    res.status(200).send(updatedCar);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
})


// Assuming you have the Cars model and app setup already

app.delete('/api/cars/delete/:name', async (req, res) => {
  const carName = req.params.name;

  try {
    const deletedCar = await Cars.findOneAndDelete({ Name: carName });

    if (!deletedCar) {
      return res.status(404).send('Car not found');
    }

    res.status(200).send(deletedCar);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});




app.listen(port, () => console.log("Listening on port : ",port));
