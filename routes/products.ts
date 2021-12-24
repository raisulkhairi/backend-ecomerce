import express, { Router, Express } from 'express';
import productController from '../controllers/productController';
import upload from '../middleware/file';

class productRoutes {
    productRoute: Router;
    constructor() {
        this.productRoute = Router()
        this.productController()
    }
    productController = () => {
        this.productRoute.post('/create',upload.single('img'), productController.create);
        this.productRoute.get('/get-product/:id', productController.get);
        this.productRoute.get('/getcategory/:kategori', productController.byKategori);
        this.productRoute.get('/all-product', productController.all);
        this.productRoute.put('/update-product/:id', productController.update);
        this.productRoute.delete('/delete-product/:id', productController.delete);
    }

}

const productRouter = new productRoutes().productRoute;
export {
    productRouter
} 