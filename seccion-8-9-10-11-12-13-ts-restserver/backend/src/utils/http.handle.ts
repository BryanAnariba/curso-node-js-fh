import { Response } from "express";
import { Data } from "../interfaces/data.interface";

export const httpHandle = ( res: Response, statusCode: number, data: Data ): Response => {
    return res.status( statusCode ).json({ statusCode: statusCode, data: data });
}