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
export interface IJob extends Document {
  title: string;
  category: string[];
  jobDescription: string;
  location: string;
  salaryRange: {
    min: number;
    max: number;
  };
  companyLogo: string;
  companyName: string;
  companyWebsite: string;
  createdAt: Date;
  updatedAt: Date;
}