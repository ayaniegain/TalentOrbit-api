// custom TypeScript interfaces
import { Document } from "mongoose";

// 1. Interface
export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

export interface IUserProfile extends Document {
  userId: string; // Reference to User
  phone?: string;
  address?: string;
  bio?: string;
  skills?: string[];
  experience?: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
}