const express = require('express');
const { searchRestaurant } = require('./controller');

const router = express.Router();

router.get('/city', async (req, res) => {
  try {
    const { name } = req.query;
    const responseMaps = await searchRestaurant(name);
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
