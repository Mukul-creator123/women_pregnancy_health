const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER USER
// Define and export functions here
const registerUser = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, emergencyNumber, emergencyEmail, pincode } = req.body;

    const existingUser = await User.findOne({ email: email.trim().toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const user = new User({
      fullName,
      email: email.trim().toLowerCase(),
      phoneNumber,
      password, // Save plain password; `pre('save')` will hash it
      emergencyNumber,
      emergencyEmail,
      pincode,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt with:', email);

  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() });

    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    console.log('User found:', user.email, user.password, password);

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);  // Make sure bcrypt.compare is used correctly

    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If password matches, generate JWT token (if necessary)
    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.log('Login error:', error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};


// Export both functions
module.exports = {
  registerUser,
  loginUser
};
