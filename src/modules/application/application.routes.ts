import express from "express";
import { applyToJob, getMyApplications, updateApplicationStatus } from "./application.controller.js";

const router = express.Router();

router.post("/jobs/:id/apply", applyToJob);
router.get("/me", getMyApplications);
router.patch("/:id/status", updateApplicationStatus);

export default router;
