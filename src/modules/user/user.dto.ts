export interface UserProfileUpdateDto {
  phone?: string;
  address?: string;
  bio?: string;
  skills?: string[];
  experience?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
}

export interface ResumeUploadDto {
  resumeUrl: string;
}
