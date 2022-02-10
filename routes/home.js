const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home");

exports.homePage = router.get('',homeController.getHomePage)

exports.homePage = router.post('/:shrinkUrl',homeController.postHomePage)