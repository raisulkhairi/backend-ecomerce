import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

class errorHandler {
  static error(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    let code: number = 0;
    let name: string = err.name;
    let message: string = '';

    switch (name) {
      case 'ALREADY_EXISTS':
        code = 409;
        message = 'Already exists!';
        break;
      case 'MONGOOSE_ERROR':
        code = 500;
        message = 'Mongoose error!';
        break;
      case 'LOGIN_FAIL':
        code = 401;
        message = 'Email and password combination not found!';
        break;
      case 'MISSING_TOKEN':
        code = 401;
        message = 'Missing access token!';
        break;
      case 'INVALID_TOKEN':
        code = 401;
        message = 'Invalid access token!';
        break;
      case 'NOT_FOUND':
        code = 404;
        message = 'Resource not found!';
        break;
      case 'FORBIDDEN':
        code = 403;
        message = 'No access!';
        break;
      default:
        code = 500;
        message = 'Internal server error!';
    }
    res.status(code).json({ message: message });
  }
}
export {errorHandler};
