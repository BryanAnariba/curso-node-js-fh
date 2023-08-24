import { Router } from "express";

const router: Router = Router();

router.get( '', ( req, res ) => {
    return res.status( 200 ).json({ data: '@Products Routes Works' });
});

export {
    router,
}