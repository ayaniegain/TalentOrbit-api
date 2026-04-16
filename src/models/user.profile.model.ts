// mongoose schemas
import { Schema, model, Document } from "mongoose";
import { IUserProfile } from "../types/index.js";

// 2. Schema
const userProfileSchema = new Schema<IUserProfile>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    skills: [{
      type: String,
      trim: true,
    }],
    experience: {
      type: String,
      trim: true,
    },
    resumeUrl: {
      type: String,
      trim: true,
    },
    linkedinUrl: {
      type: String,
      trim: true,
    },
    githubUrl: {
      type: String,
      trim: true,
    },
    portfolioUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// 3. Model
const UserProfile = model<IUserProfile>("UserProfile", userProfileSchema);

export default UserProfile;