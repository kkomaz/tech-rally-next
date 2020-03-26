require('dotenv').config();
const express = require('express');
const http = require('http');
const next = require('next');
const bodyParser = require('body-parser');

// mongodb setup
const mongoose = require('mongoose');

const mongoDB = process.env.DATABASE;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// Next configs
const dev = process.env.NODE_ENV !== 'production';

// Routes
const routes = require('./routes');

const app = next({
  dev,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  // MongoDB
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  // server.use(thoughtsAPI);
  routes(server);

  // Everything else handled by next.js
  server.get('*', (req, res) => handle(req, res));

  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`);
  });
});
