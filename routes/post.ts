import  {Express,Router}  from "express";
import postController from "../controllers/post";
import upload from "../middleware/file";
class  postRouter {
    postRoute : Router;
    constructor(){
        this.postRoute = Router()
        this.postController()
    }
    postController=()=>{
        this.postRoute.post("/upload",postController.createPost);
        this.postRoute.get("get-image", postController.getPosts);
    }
}