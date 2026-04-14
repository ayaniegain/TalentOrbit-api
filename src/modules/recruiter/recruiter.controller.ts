import { Request, Response, NextFunction } from "express";

export async function getRecruiter(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
}

export async function updateRecruiter(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
}

export async function getRecruiterJobs(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: [] });
  } catch (error) {
    next(error);
  }
}
