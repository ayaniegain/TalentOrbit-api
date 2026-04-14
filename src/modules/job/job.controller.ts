import { Request, Response, NextFunction } from "express";

export async function getJobs(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: [] });
  } catch (error) {
    next(error);
  }
}

export async function createJob(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
}

export async function updateJob(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
}

export async function deleteJob(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, message: "Job deleted" });
  } catch (error) {
    next(error);
  }
}
