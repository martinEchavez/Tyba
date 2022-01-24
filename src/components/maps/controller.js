const axios = require('axios');
require('dotenv').config();

const searchRestaurant = async (city) => {
  try {
    console.log(city);
    const response = await axios.get(
      `${process.env.URL_API}?query=restaurants%20in%20${city}&key=${process.env.API_KEY_MAPS}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  searchRestaurant,
};
