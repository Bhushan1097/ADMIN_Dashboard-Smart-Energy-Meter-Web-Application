const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const app = express();
const port = 3000;

// Import user model
// const User = require('./models/user.js'); // Adjust the path to your project structure
// const Consumption = require('./models/consumption.js'); // Import Consumption model

// Connect to MongoDB
// main()
//     .then(() => {
//         console.log("Connection to MongoDB successful");
//     })
//     .catch((err) => {
//         console.log(err); // Log connection errors
//     });

// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/SmartEnergyMeter");
// }

// Set the view engine to EJS and use ejsMate
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

// Middleware to serve static files and parse form data
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/",(req,res)=>{
    res.send("admin page working properly ");
})

// Dashboard Route (Admin view)
app.get('/dashboard', (req, res) => {
    try {
        res.render('pages/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching admin dashboard data");
    }
});

app.get('/manage-users', (req, res) => {
    try {
        res.render('pages/manage-users');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching admin dashboard data");
    }
});

// Users List Route (Admin view)
app.get('/billing', async (req, res) => {
    try {
        res.render('pages/billing-history');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching user data");
    }
});

// Consumption Data Route (Admin view)
app.get('/analytics', async (req, res) => {
    try {
        res.render('pages/analytics');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching consumption data");
    }
});

// Profile Route (Admin view)
app.get('/profile', async (req, res) => {
    res.render('pages/profile');
});

// Support Route (Admin view)
app.get('/support', (req, res) => {
    res.render('pages/support');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
