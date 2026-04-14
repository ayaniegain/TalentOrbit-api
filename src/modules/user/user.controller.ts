import { Request, Response, NextFunction } from "express";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
}

export async function updateProfile(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, data: null });
  } catch (error) {
    next(error);
  }
}

export async function uploadResume(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ success: true, message: "Resume uploaded" });
  } catch (error) {
    next(error);
  }
}
