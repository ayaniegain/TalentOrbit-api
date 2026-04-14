import express from "express";
import { getRecruiter, updateRecruiter, getRecruiterJobs } from "./recruiter.controller.js";

const router = express.Router();

router.get("/me", getRecruiter);
router.patch("/me", updateRecruiter);
router.get("/me/jobs", getRecruiterJobs);

export default router;
