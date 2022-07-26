import express from 'express';
import { productsRoute } from './products.routes';



const routes = express.Router()

routes.use('/products', productsRoute)

export { routes }