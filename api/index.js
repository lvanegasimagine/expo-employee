const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 8000;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('tiny'));

mongoose.connect('mongodb+srv://lvanegas1429:Luisvanegas1429@cluster0.30kwaik.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log("Error Connecting to MongoDB", err);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

const Employee = require('./models/employee');
const Attendance = require('./models/attendance');

app.post("/addEmployee", async (req, res) => {
    try {
        const { employeeName, employeeId, designation, phoneNumber, dateOfBirth, joiningDate, activeEmployee, salary, address } = req.body;

        const newEmployee = new Employee({
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address
        })

        await newEmployee.save();

        res.status(201).json({ message: "Employee Added Successfully" })

        console.log("Employee Added Successfully")
    } catch (error) {
        console.log("Error Creating Employee", error)
        res.status(500).json({ message: "Failed to add an employee" })
    }
})

//endpoint to fetch all the employees
app.get("/employees", async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the employees" });
    }
  });