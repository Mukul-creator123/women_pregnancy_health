const express = require('express');
const router = express.Router();
const { registerUser,loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser); // 👈 Add this

module.exports = router;
