export interface Interview {
    role: string;
    company: string;
    jobDescription: string;
    interviewType: "Behavioral" | "Technical" | "Screening";
    questions: string[];
  }
  