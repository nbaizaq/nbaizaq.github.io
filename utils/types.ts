export interface CvExperience {
  title: string;
  start: Date;
  end?: Date;
  company: string;
  responsibilities: string[];
  techStack: string[];
  employmentType?: "full-time" | "part-time";
  website?: string;
}
