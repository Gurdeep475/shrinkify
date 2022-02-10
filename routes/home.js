const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home");

router.get('',homeController.getHomePage)

router.post('',homeController.postHomePage)

router.get('/:shortUrl',homeController.shortToFull)

module.exports = router;