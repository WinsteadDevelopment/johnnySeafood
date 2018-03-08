require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname));

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
