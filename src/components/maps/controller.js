const axios = require('axios');
require('dotenv').config();

const searchRestaurant = async (cityName) => {
  try {
    const response = await axios.get(
      `${process.env.URL_API}?query=restaurants%20in%20${cityName}&key=${process.env.API_KEY_MAPS}`
    );
    return response.data.results;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  searchRestaurant,
};
