const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config/config');

const environment = process.env.NODE_ENV || 'dev';
const environmentConfig = config[environment];

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/api/test', (req, res) => res.send({ message: 'Hello world!' }));

app.listen(environmentConfig.node_port, () => console.log(`Listening on port ${environmentConfig.node_port}!`));

module.exports = app;
