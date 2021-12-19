import { NextFunction, Request, Response } from "express";
import orderModel from '../models/orderSchema';

class orderController{

    //create order
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await orderModel.create({ $set: req.body });
            res.status(200).json({ message: 'create order successfull', data: result });

        } catch (error) {
            next(error);
        }
    }

     //get user cart 
    static get = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const result = await orderModel.findOne({ id });
            res.status(200).json({ message: 'get user order successfull', result: result });
        } catch (error) {
            next(error);
        };
    };

    //get all 
    static getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await orderModel.find();
            res.status(200).json({ message: 'get all order successfull', result: result })
        } catch (error) {
            next(error);
        }
    }

    //update cart
    static update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            await orderModel.findByIdAndUpdate(id,
                {
                    $set: req.body
                },
                { new: true }
            );
            res.status(200).json({ message: ' update order successfull' });
        } catch (error) {
            next(error);
        }
    }

    //delete cart
    static delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            await orderModel.findByIdAndDelete(id);
            res.status(200).json({ message: ' delete order successfull' });
        } catch (error) {
            next(error);
        }
    }
}

export default orderController;