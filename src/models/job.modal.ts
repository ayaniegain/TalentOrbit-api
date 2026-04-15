import mongoose, { Schema, Document } from 'mongoose';
import { IJob } from '../types/index.js';



const JobSchema = new Schema<IJob>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a job title'],
      trim: true,
      maxlength: [100, 'Job title cannot be more than 100 characters'],
    },
    category: {
      type: [String],
      required: [true, 'Please provide at least one category'],
    },
    jobDescription: {
      type: String,
      required: [true, 'Please provide a job description'],
    },
    location: {
      type: String,
      required: [true, 'Please provide a location'],
      trim: true,
    },
    salaryRange: {
      min: {
        type: Number,
        required: [true, 'Please provide minimum salary'],
      },
      max: {
        type: Number,
        required: [true, 'Please provide maximum salary'],
      },
    },
    companyLogo: {
      type: String,
      required: [true, 'Please provide a company logo'],
    },
    companyName: {
      type: String,
      required: [true, 'Please provide a company name'],
      trim: true,
    },
    companyWebsite: {
      type: String,
      required: [true, 'Please provide a company website'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IJob>('Job', JobSchema);
