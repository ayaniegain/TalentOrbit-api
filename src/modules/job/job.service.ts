import Job from '../../models/job.modal.js';
import { JobCreateDto, JobUpdateDto } from './job.dto.js';

export async function listJobs() {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return jobs;
  } catch (error) {
    throw error;
  }
}

export async function createNewJob(data: JobCreateDto) {
  try {
    // Validate salary range
    if (data.salaryRange.min > data.salaryRange.max) {
      throw new Error('Minimum salary cannot be greater than maximum salary');
    }

    const newJob = new Job(data);
    const savedJob = await newJob.save();
    return savedJob;
  } catch (error) {
    throw error;
  }
}

export async function editJob(id: string, data: JobUpdateDto) {
  try {
    if (data.salaryRange && data.salaryRange.min > data.salaryRange.max) {
      throw new Error('Minimum salary cannot be greater than maximum salary');
    }

    const updatedJob = await Job.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    
    if (!updatedJob) {
      throw new Error('Job not found');
    }

    return updatedJob;
  } catch (error) {
    throw error;
  }
}

export async function removeJob(id: string) {
  try {
    const deletedJob = await Job.findByIdAndDelete(id);
    
    if (!deletedJob) {
      throw new Error('Job not found');
    }

    return deletedJob;
  } catch (error) {
    throw error;
  }
}
