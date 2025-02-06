const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Înregistrare
router.post('/register', registerUser);

// Autentificare
router.post('/login', loginUser);

module.exports = router;