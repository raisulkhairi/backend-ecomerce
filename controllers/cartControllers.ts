import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { runInNewContext } from "vm";
import cartModel from '../models/cartSchema';
import productModel from '../models/productSchema';

class cartController {
    //create cart
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await cartModel.create({ $set: req.body });
            res.status(200).json({ message: 'create cart successfull', data: result });

        } catch (error) {
            next(error);
        }
    }

    //get user cart 
    static get = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const result = await cartModel.findOne({ id });
            res.status(200).json({ message: 'get user cart successfull', result: result });
        } catch (error) {
            next(error);
        };
    };

    //get all 
    static getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await cartModel.find();
            res.status(200).json({ message: 'get all cart successfull', result: result })
        } catch (error) {
            next(error);
        }
    }

    //update cart
    static update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            await cartModel.findByIdAndUpdate(id,
                {
                    $set: req.body
                },
                { new: true }
            );
            res.status(200).json({ message: ' update cart successfull' });
        } catch (error) {
            next(error);
        }
    }

    //delete cart
    static delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            await cartModel.findByIdAndDelete(id);
            res.status(200).json({ message: ' delete cart successfull' });
        } catch (error) {
            next(error);
        }
    }

    //add product to cart
    static addToCart = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {productId,user_id,quantity} =req.body;
            const result = await cartModel.create(
                {   
                    user_id,
                    productId,
                    quantity,
                }
            );
            res.status(200).json({message : 'add product to cart successfull',result : result})

        
        } catch (error) {
            next(error);
        }
    }
}

export default cartController; 