import jwt from 'jsonwebtoken';
import express, { NextFunction, Request, Response } from 'express';
import auth from '../interface/authInterface';

class authJwt {
  static authentication(req: auth, res: Response, next: NextFunction) {
    try {
      const { acces_token }: any = req.headers;
      if (!acces_token) {
        throw { name: "MISSING_TOKEN" };
      };
      const decoded: any = jwt.verify(acces_token, "secret_pass");
      req.userData = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'you are not authenticated' })
    }
  };
}
export default authJwt;