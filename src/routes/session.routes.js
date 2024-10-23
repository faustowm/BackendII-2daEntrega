import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { register, login, logout, getCurrentUser  } from '../controllers/user.controller.js';
import passport from 'passport';

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/current", isAuthenticated, getCurrentUser);
router.get("/user", isAuthenticated, getCurrentUser);

router.get("/check-auth", isAuthenticated, (req, res) => {
    res.json({ isAuthenticated: true, user: req.user });
});
export default router;