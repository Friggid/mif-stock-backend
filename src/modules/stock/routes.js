import { Router } from 'express';

import * as StockController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();

routes.post('/stocks', StockController.createStock);
routes.get('/stocks', requireJwtAuth, StockController.getAllStocks);

export default routes;
