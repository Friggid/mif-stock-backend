import { Router } from 'express';
import * as StockController from './controller';

const routes = new Router();

routes.post('/stocks', StockController.createStock);
routes.get('/stocks', StockController.getAllStocks);

export default routes;
