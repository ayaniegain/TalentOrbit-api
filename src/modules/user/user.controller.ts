import { Request, Response, NextFunction } from "express";
import { getUserProfile, updateUserProfile, uploadUserResume } from "./user.service.js";
import { UserProfileUpdateDto } from "./user.dto.js";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.id;
    console.log("Authenticated user ID:", userId); 
    
    if (!userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }
    const profile = await getUserProfile(userId);
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    next(error);
  }
}

export async function updateProfile(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }
    // Check if the authenticated user can only update their own profile
    if (req.user?.id !== userId) {
      return res.status(403).json({ success: false, message: "Cannot update other user's profile" });
    }
    // Ensure only users with role "user" can update profiles
    if (req.user?.role !== "user") {
      return res.status(403).json({ success: false, message: "Only users can update profiles" });
    }
    const data: UserProfileUpdateDto = req.body;
    const profile = await updateUserProfile(userId, data);
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    next(error);
  }
}

export async function uploadResume(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }
    // Check if the authenticated user can only update their own profile
    if (req.user?.id !== userId) {
      return res.status(403).json({ success: false, message: "Cannot update other user's profile" });
    }
    // Ensure only users with role "user" can update profiles
    if (req.user?.role !== "user") {
      return res.status(403).json({ success: false, message: "Only users can update profiles" });
    }
    const { resumeUrl } = req.body;
    const profile = await uploadUserResume(userId, resumeUrl);
    res.status(200).json({ success: true, message: "Resume uploaded", data: profile });
  } catch (error) {
    next(error);
  }
}
