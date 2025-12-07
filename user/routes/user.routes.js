const express = require('express');
const router = express.Router();

const { register, login, getProfile, logout } = require('../controller/user.controller');

const { auth } = require('../middleware/authMiddlware.js'); // FIXED

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);
router.post('/logout', logout);

module.exports = router;
