import express from 'express';
import { productsRoute } from './products.routes';
import { userRoute } from './user.routes';



const routes = express.Router()

routes.use('/products', productsRoute)
routes.use('/user', userRoute)

export { routes }