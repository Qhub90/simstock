const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  axios.get('https://sandbox.iexapis.com/stable/stock/IBM/quote?token=Tpk_14df39e2e3914d7b9630329a551deef6')
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });});
