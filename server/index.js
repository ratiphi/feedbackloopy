'use strict';

// DEPENDENCIES
const express = require('express');

// STATE
const app = express();

app.get('/', (req, res) => {
  res.send({
    hi: 'there'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);