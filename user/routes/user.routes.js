const express = require('express');
const app = express();
const router = express.Router();
const userController = require('../controller/user.controller');


router.post('/register', userController.register);

module.exports = router;