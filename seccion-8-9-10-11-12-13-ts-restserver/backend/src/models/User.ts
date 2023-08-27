import { Request, Response } from "express";
import { httpHandle } from "../utils/http.handle";

let statusCode: number = 0;

export const getItems = async ( req: Request, res: Response ) => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Get Users Success', content: [] });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_GET_USER_ERROR', content: error });
    }
}

export const getItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Get User Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_GET_USER_ERROR', content: error });
    }
}

export const editItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Update User Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_UPDATE_USER_ERROR', content: error });
    }
}

export const deleteItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Deleted User Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_DELETE_USER_ERROR', content: error });
    }
}

export const register = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 201;
        return httpHandle( res, statusCode, { message: 'Register User Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_REGISTER_USER_ERROR', content: error });
    }
}

export const login = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Login User Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_LOGIN_USER_ERROR', content: error });
    }
}