import { Router } from 'express';
import * as PortfolioController from './controller';

const routes = new Router();

routes.post('/portfolio/new', PortfolioController.createPortfolio);

export default routes;
