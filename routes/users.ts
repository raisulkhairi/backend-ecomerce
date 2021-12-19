import express, { Router } from 'express'
import userController from '../controllers/userController';

class userRoutes {
    userRoute: Router;
    constructor() {
        this.userRoute = Router()
        this.userController()
    }
    userController = () => {
        this.userRoute.post('/register', userController.register)
        this.userRoute.get('/login', userController.login);
        this.userRoute.get('/find/:id', userController.getUser);
        this.userRoute.get('/find-all', userController.getAllUser);
    }
}

const userRouter = new userRoutes().userRoute;
export {
    userRouter
}