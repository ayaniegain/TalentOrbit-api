import express from "express";
import { getProfile, updateProfile, uploadResume } from "./user.controller.js";
import { verifyAccessToken } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", verifyAccessToken, getProfile);
router.patch("/me/:id", verifyAccessToken, updateProfile);
router.post("/me/resume/:id", verifyAccessToken, uploadResume);

export default router;
