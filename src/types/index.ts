// custom TypeScript interfaces
import { Document } from "mongoose";

// 1. Interface
export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  role: "admin" | "user";
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