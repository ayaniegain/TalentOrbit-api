import { Request, Response, NextFunction } from "express";

export async function applyToJob(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json({ success: true, message: "Applied successfully" });
  } catch (error) {
    next(error);
  }
}

export async function getMyApplications(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: [] });
  } catch (error) {
    next(error);
  }
}

export async function updateApplicationStatus(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
}
