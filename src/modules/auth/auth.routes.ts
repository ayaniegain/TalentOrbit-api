import express from "express";
import { register, getAllUsers, login, refresh, logout } from "./auth.controller.js";
import { verifyAccessToken } from "../../middleware/auth.middleware.js";

const router = express.Router();
router.get("/", verifyAccessToken, getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", verifyAccessToken, logout);
 
export default router;
