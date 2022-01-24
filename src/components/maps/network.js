const express = require('express');
const { authentication } = require('../../middleware/authentication');
const { searchRestaurant } = require('./controller');

const router = express.Router();

router.get('/city', authentication, async (req, res) => {
  try {
    const { cityName } = req.query;
    const responseMaps = await searchRestaurant(cityName);
    res.status(200).send({
      responseMaps,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

module.exports = router;
