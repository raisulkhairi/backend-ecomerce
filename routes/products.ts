import express, { Router, Express } from 'express';
import productController from '../controllers/productController';

class productRoutes {
    productRoute: Router;
    constructor() {
        this.productRoute = Router()
        this.productController()
    }
    productController = () => {
        this.productRoute.post('/create', productController.create);
        this.productRoute.get('/get-product/:id', productController.get);
        // this.productRoute.get('/getcategory/:id', productController.getByCategory);
        this.productRoute.get('/all-product', productController.all);
        this.productRoute.put('/update-product/:id', productController.update);
        this.productRoute.delete('/delete-product/:id', productController.delete);
    }

}

const productRouter = new productRoutes().productRoute;
export {
    productRouter
} 