'use strict';

const express = require('express');
const mongoose = require('mongoose');
const exampleRouter = require('./routes/example')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://mongodb:27017/test');
}
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use('/example', exampleRouter)

app.get('/', (req, res) => {
  res.send('Hey, listen!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);