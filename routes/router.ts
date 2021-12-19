import express, { Router } from 'express';
import { userRouter } from './users';
import { productRouter } from './products';
import { cartRouter } from './cart';
import auth from '../middleware/authjwt';

class Routes {
    router: Router;
    constructor() {
        this.router = Router()
        this.userRouter()
        this.productRouter()
        this.authentication()
        this.cartRouter()
    }
    userRouter = () => {
        this.router.use('/user', userRouter);
    }
    productRouter = () => {
        this.router.use('/product', productRouter);
    }
    cartRouter = () => {
        this.router.use('/cart', cartRouter);
    }
    authentication = () => {
        this.router.use(auth.authentication);
    }
}

export default new Routes().router;