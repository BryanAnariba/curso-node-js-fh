import { Request, Response } from "express";
import { httpHandle } from "../utils/http.handle";

let statusCode: number = 0;

export const getItems = async ( req: Request, res: Response ) => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Get Products Success', content: [] });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_GET_PRODUCTS_ERROR', content: error });
    }
}

export const getItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Get Product Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_GET_PRODUCT_ERROR', content: error });
    }
}

export const createItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 201;
        return httpHandle( res, statusCode, { message: 'Create Product Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_CREATE_PRODUCT_ERROR', content: error });
    }
}

export const editItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Update Category Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_UPDATE_PRODUCT_ERROR', content: error });
    }
}

export const deleteItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        return httpHandle( res, statusCode, { message: 'Deleted Product Success', content: {} });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return httpHandle( res, statusCode, { message: 'HTTP_DELETE_PRODUCT_ERROR', content: error });
    }
}