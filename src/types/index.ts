// custom TypeScript interfaces
import { Document } from "mongoose";

// 1. Interface
export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  role: "admin" | "user";
}