const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./StevenController');

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send(controller.getAll());
})

// server.post('/', (req, res) => {
//     res.send(201)
// })

// server.delete('/users/:id',(req, res) => {
//     res.sendStatus(204);
// })

server.listen(3000)
console.log('servidor rodando na porta 3010');