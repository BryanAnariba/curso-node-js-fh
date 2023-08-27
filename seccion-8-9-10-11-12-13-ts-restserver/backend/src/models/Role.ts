import { Request, Response } from "express";
import { httpHandle } from "../utils/http.handle";

let statusCode: number = 0;

export const getItems = async ( req: Request, res: Response ) => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Get Roles Success', content: [] });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_GET_ROLES_ERROR', content: error });
    }
}

export const getItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Get Role Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_GET_ROLE_ERROR', content: error });
    }
}

export const createItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 201;
        return httpHandle( res, statusCode, { message: 'Create Role Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_CREATE_ROLE_ERROR', content: error });
    }
}

export const editItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Update Role Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_UPDATE_ROLE_ERROR', content: error });
    }
}

export const deleteItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Deleted Role Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_DELETE_ROLE_ERROR', content: error });
    }
}