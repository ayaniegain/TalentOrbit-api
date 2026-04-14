import express from "express";
import { getProfile, updateProfile, uploadResume } from "./user.controller.js";

const router = express.Router();

router.get("/me", getProfile);
router.patch("/me", updateProfile);
router.post("/me/resume", uploadResume);

export default router;
