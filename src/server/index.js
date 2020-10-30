const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config');
const logging = require('./utils/logging.utils');

const app = express();

const environment = process.env.NODE_ENV || 'dev';
const environmentConfig = config[environment];

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/api/search/repositories', async (req, res) => {
  try {
    await logging.logSearchRequest(req.query.searchTerm || null);
    res.send({ results: [{ name: 'result' }] });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(environmentConfig.node_port, () => console.log(`Listening on port ${environmentConfig.node_port}!`));

module.exports = app;
