import { NextFunction, Request, Response } from "express";
import { title } from "process";
import productModel from '../models/productSchema';

class productController {

    //create product
    static create = async (req: Request, res: Response, next: NextFunction) => {
        const { title, desc, img, categories, size, color, price } = req.body;
        try {

            const result = await productModel.create(
                {
                    title,
                    desc,
                    img,
                    categories,
                    size,
                    color,
                    price
                });
            res.status(200).json({ message: 'create successfull', data: result });
        } catch (error) {
            next(error);
        };
    };

    //get product
    static get = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const result = await productModel.findOne({ id });
            res.status(200).json({ message: 'get product successfull', product : result });
        } catch (error) {
            next(error);
        };
    };

    //get all product
    static all = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await productModel.find();
            res.status(200).json({ message: 'get all data successfull', data: result })
        } catch (error) {
            next(error);
        }
    }

    // update product
    static update = async (req: Request, res: Response, next: NextFunction) => {
        const { id }: any = req.params;
        const { product_name, deskripsi, price, type } = req.body;
        try {
            const result = await productModel.findOneAndUpdate(id,
                {
                    $set: req.body
                },
                {   new: true }
            );
            res.status(200).json({ message: 'update product successfull', data: result })
        } catch (error) {
            next(error);
        };
    };

    //delete product
    static delete = async (req: Request, res: Response, next: NextFunction) => {
        const { id }: any = req.params;
        try {
            await productModel.findOneAndDelete(id);
            res.status(200).json({ message: 'delete product successfull' })
        } catch (error) {
            next(error);
        };
    };

};

export default productController;