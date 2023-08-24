import { Router } from "express";

const router: Router = Router();

router.get( '', ( req, res ) => {
    return res.status(200).json({ data: '@Auth Routes Works' });
})

export {
    router,
}