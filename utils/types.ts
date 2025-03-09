export interface CvExperience {
  title: string;
  start: Date;
  end?: Date;
  company: string;
  location?: string;
  responsibilities: string[];
  techStack: string[];
  employmentType?: EmploymentType;
  website?: string;
}

export interface CvEducation {
  start: Date;
  end?: Date;
  university: string;
  location: string;
  degree: string;
  major: string;
  minor?: string;
  gpa?: string;
  courses?: string[];
  academicLeaves?: {
    start: Date;
    end: Date;
    reasons?: {
      title: string;
      employmentType?: EmploymentType;
      company?: string;
    }[];
  }[];
}

export type EmploymentType = "full-time" | "part-time";
