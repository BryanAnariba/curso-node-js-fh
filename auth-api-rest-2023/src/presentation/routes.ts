import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  static get routes(): Router {
    const router: Router = Router();

    // TODO: definicion de todas las rutas
    router.use('/api/auth', AuthRoutes.routes);

    return router;
  }
}