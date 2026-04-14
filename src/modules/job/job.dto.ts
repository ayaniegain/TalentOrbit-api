export interface JobCreateDto {
  title: string;
  description: string;
  location: string;
}

export interface JobUpdateDto {
  title?: string;
  description?: string;
  location?: string;
}
