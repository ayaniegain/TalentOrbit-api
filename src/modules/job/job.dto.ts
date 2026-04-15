export interface JobCreateDto {
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
}

export interface JobUpdateDto {
  title?: string;
  category?: string[];
  jobDescription?: string;
  location?: string;
  salaryRange?: {
    min: number;
    max: number;
  };
  companyLogo?: string;
  companyName?: string;
  companyWebsite?: string;
}
