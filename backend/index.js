const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Cars = require("./Cars");

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())


const connection_url = "mongodb+srv://rahul31:rahul0000@cluster0.j7zikas.mongodb.net/Database?retryWrites=true&w=majority";

mongoose.connect(connection_url);



app.get("/",(req,res) => {res.send("Home page")});


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


app.listen(port, () => console.log("Listening on port : ",port));
