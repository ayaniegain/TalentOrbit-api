import { Request, Response, NextFunction } from "express";
import * as jobService from "./job.service.js";
import { JobCreateDto, JobUpdateDto } from "./job.dto.js";
import { log } from "node:console";

export async function getJobs(req: Request, res: Response, next: NextFunction) {
  try {
    log("Received request to list jobs");
    const jobs = await jobService.listJobs();
    res.status(200).json({ 
      success: true, 
      message: "Jobs retrieved successfully",
      data: jobs 
    });
  } catch (error) {
    next(error);
  }
}

export async function createJob(req: Request, res: Response, next: NextFunction) {
  try {
    const jobData: JobCreateDto = req.body;

    // Validate required fields
    if (!jobData.title || !jobData.category || !jobData.jobDescription || 
        !jobData.location || !jobData.salaryRange || !jobData.companyLogo || 
        !jobData.companyName || !jobData.companyWebsite) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields" 
      });
    }

    const newJob = await jobService.createNewJob(jobData);
    
    res.status(201).json({ 
      success: true, 
      message: "Job created successfully",
      data: newJob 
    });
  } catch (error) {
    next(error);
  }
}

export async function updateJob(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params as { id: string };

    log("Received update request for job ID:", id);
    const updateData: JobUpdateDto = req.body;

    if (!id) {
      return res.status(400).json({ 
        success: false, 
        message: "Job ID is required" 
      });
    }

    const updatedJob = await jobService.editJob(id, updateData);
    
    res.status(200).json({ 
      success: true, 
      message: "Job updated successfully",
      data: updatedJob 
    });
  } catch (error) {
    next(error);
  }
}

log("Job controller loaded successfullyu");

export async function deleteJob(req: Request, res: Response, next: NextFunction) {
  try {
    log("Received delete request for job ID:", req);
    const { id } = req.params as { id: string };

    log("id from params:", id);

    if (!id) {
      return res.status(400).json({ 
        success: false, 
        message: "Job ID is required" 
      });
    }

    await jobService.removeJob(id);
    
    res.status(200).json({ 
      success: true, 
      message: "Job deleted successfully" 
    });
  } catch (error) {
    next(error);
  }
}
