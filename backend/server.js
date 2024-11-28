const express = require("express");
const multer = require("multer");
const cors = require("cors");
const User = require("./models/User");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/eventApp", {

}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});



const upload = multer({ 
  storage: multer.memoryStorage(), 
  limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB
});
const app = express();

app.use(cors()); // Allow CORS for all routes
app.use(express.json()); // For parsing application/json (if you send other fields)

app.post('/api/events', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No image file uploaded.");
  }

  console.log("Request Body:", req.body); // Logs form fields (e.g., eventTitle, description)
  console.log("Uploaded File:", req.file); // Logs the uploaded file details

  res.send("Form submitted successfully");
});

app.delete('/api/reset-user', async (req, res) => {
  const { email } = req.body; // Get email from the request body
  try {
    const result = await User.deleteOne({ email });
    if (result.deletedCount > 0) {
      return res.status(200).send({ message: 'User reset successfully' });
    } else {
      return res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error resetting user:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});




app.post('/new&User', async (req, res) => {
  const { name, email, passWd, confirmPassword } = req.body;
  
  // Check if passwords match
  if (passWd !== confirmPassword) {
    return res.status(400).send({ msg: 'Passwords do not match.' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: 'User with this email already exists.' });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password: passWd, // You should hash the password here
    });

    await newUser.save();
    return res.status(201).send({ msg: 'User created successfully!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});