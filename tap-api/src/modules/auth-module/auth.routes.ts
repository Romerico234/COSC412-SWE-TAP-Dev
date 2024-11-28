import { Router } from "express";
import { AuthController } from "./auth.controller";

const router: Router = Router();
const authController = new AuthController();

router.post("/register", (req, res, next) => {
    authController.register(req, res, next);
});
router.post("/login", (req, res, next) => {
    authController.login(req, res, next);
});

export default router;
