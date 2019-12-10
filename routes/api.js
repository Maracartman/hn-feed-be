const express = require('express');
const exceptionHandler = require('../services/exceptions');
const { logger } = require('../services/loggin');
let app = express();

/**
 * Health check.
 */
app.get('/health', (req, res) => {
  logger.info('Requesting health status');
  res.status(200).send({ status: 'UP' });
});

/**
 * Returns the feed filtered by deleted elements and ordered by date
 */
app.get('/feed', (req, res) => {
  logger.info('Getting the latest feeds');
  res.send('OK');
});

module.exports = app;
