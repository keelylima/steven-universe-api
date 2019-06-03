const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./StevenController');

const server = express();
server.use(cors());
server.use(bodyParser.json());