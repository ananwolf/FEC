const express = require('express');
const APIToken = require('../config.js');
const axios = require('axios');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function (req, res) {
  // TODO - your code here!

});

app.get('/FILL_ME_IN', function (req, res) {
  // TODO - your code here!

});

app.get('/getQA', (req, res) => {
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions?product_id=13023',
    method: 'GET',
    headers: { Authorization: APIToken.TOKEN}
  })
    .then((res) => {
      console.log(res.data.results);
      res.send(res.data.results);
    })
    .catch((err) => {
      res.send(err);
      res.send(404);
    });
});

app.get('/getReview', (req, res) => {
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/?product_id=13023',
    method: 'GET',
    headers: { Authorization: APIToken.TOKEN}
  })
    .then((response) => {
      console.log(response.data.results);
      res.send(response.data.results);
    })
    .catch((err) => {
      res.send(err);
      res.send(404);
    });
});
let PORT = process.env.PORT || 1128;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});