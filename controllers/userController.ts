import express, { NextFunction, Request, Response } from 'express';
import userModel from '../models/userSchema';
import cartModel from '../models/cartSchema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import users from express();

class userController {

    //register
    static register = async (req: Request, res: Response, next: NextFunction) => {
        const { username, email, password }: any = req.body;
        const hash: any = await bcrypt.hash(password, 5);
        try {
            const user = await userModel.create({
                username,
                email,
                password: hash,
            });
                const cart = await cartModel.create()
                res.status(200).json({messsage : 'create cart successfull'})
            res.status(200).json({ message: 'register successful' })
        } catch (error) {
            next(error)
        }

    };

    //login
    static login = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { username, password }: any = req.body;
            const user = await userModel.findOne({ username })
            const payload = {
                id: user.id,
                username: user.username
            }
            if (!user) {
                throw { name: "LOGIN_FAIL" }
            }
            const pass = await bcrypt.compare(password, user.password)
            if (!pass) {
                throw { name: 'LOGIN_FAIL' }
            }
            const token = jwt.sign(payload, "secret_pass")
            res.status(200).json({ message: 'login successful', user, acces_token: token })
        } catch (err) {
            next(err)
        }
    };

    //get user
    static getUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const user = await userModel.findById(id);
            res.status(200).json({ message: 'get successfull ', data: user })
        } catch (error) {
            next(error);
        }
    }

    //get all user
    static getAllUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await userModel.find();
            res.status(200).json({ message: 'get all users successfull ', data: user })
        } catch (error) {
            next(error);
        }
    }
};

export default userController;