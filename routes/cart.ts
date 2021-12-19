import { Express, Router } from "express";
import cartController from "../controllers/cartControllers";

class cartRoutes {
    cartRoute: Router;
    constructor() {
        this.cartRoute = Router()
        this.cartController()
    }
    cartController = () => {
        this.cartRoute.post('/create', cartController.create);
        this.cartRoute.get('/get-user-cart/:id', cartController.get);
        this.cartRoute.post('/update-cart/:id', cartController.update);
        this.cartRoute.post('/delete-cart/:id', cartController.delete);
        this.cartRoute.post('/add-to-cart', cartController.addToCart);
    }
}

const cartRouter = new cartRoutes().cartRoute;
export {
    cartRouter
}