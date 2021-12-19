import express, { Request } from 'express';

interface i_auth extends Request {
    userData?:String;
}
export default i_auth;
