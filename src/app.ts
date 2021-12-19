import express, { Application } from "express";
import dbConnect from '../conifgs/dbConnect';
import router from '../routes/router';
import cors from 'cors';
import  BodyParser  from "body-parser";
import { errorHandler } from '../middleware/errorHandler'

class App {
    app: Application;
    constructor() {
        this.app = express()
        this.plugin()
        this.router()
        this.errorHandler()
    }
    plugin = () => {
        this.app.use(express.json());
        // this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors());
        this.app.use(BodyParser.json());
        dbConnect.dbConnect()
    }
    router = () => {
        this.app.use(router);
    }
    errorHandler = () => {
        this.app.use(errorHandler.error)
    }
}

const app = new App().app;
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server run http://localhost:${port}`)
});