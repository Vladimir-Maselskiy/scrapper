const express = require('express');
const logger = require('morgan');
const cors = require('cors');
// require('dotenv').config();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const { rateRouter } = require('./routes/api');

const app = express();

const formatsLogger =
  app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/rates', rateRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;