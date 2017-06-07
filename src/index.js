/* eslint-disable no-console */
import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import { StockRoutes, PortfolioRoutes, UserRoutes } from './modules';

const app = express();
/*
* DATABASE
*/
dbConfig();
/*
* MIDLEWARE
*/
middlewareConfig(app);

app.use('/api', [StockRoutes, PortfolioRoutes, UserRoutes]);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App Listen to port: ${PORT}`);
  }
});
