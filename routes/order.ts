import { Express, Router } from "express";
import orderController from "../controllers/orderController";

class orderRouter {
    orderRoute: Router;
    constructor() {
        this.orderRoute = Router()
        this.orderController()
    }
    orderController = () => {

    }
}