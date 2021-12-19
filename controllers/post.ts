import { NextFunction, Request, Response } from "express";
import postModel from "../models/postSchema";

class postController {
    static createPost = async (req: Request, res: Response, next: NextFunction) => {
        const { title, content } = req.body;
        const url = req.protocol + "://" + req.get("host");

        try {
            const result = await postModel.create(
                {
                    title,
                    content,
                    imgpath: url + "/images" + req.file?.filename,
                }  
            );
            res.status(201).json({success : true , result : result})
        } catch (error) {
            next(error);
        }
    };

    static getPosts = async (req: Request, res: Response, next: NextFunction)=>{
        try {
            const result = await postModel.find({});
            if(result.length === 0){
                throw {name : 'NOT_FOUND'};
            }else{
                res.status(200).json({message : 'success',result : result});
            }
        } catch (error) {
            next(error);     
        }
    } ;
}
export default postController;