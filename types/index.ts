export type Subject = "2P1" | "2P2" | "2P3" | "2P4" | "2P5" | "2P6" | "2P7";
export type YearRange = [number, number];
export type Marks = [number, number]; // achived, total

export interface SubjectWeightings {
  "2P1": number;
  "2P2": number;
  "2P3": number;
  "2P4": number;
  "2P5": number;
  "2P6": number;
  "2P7": number;
}

export interface LogObject {
  subject: Subject;
  year: number;
  question: number;
  attempted?: boolean;
  marks?: Marks;
  secondsTaken?: number;
  comments?: string;
  timeOfSubmission?: Date;
}

export interface QuestionObject {
  subject: Subject;
  year: number;
  question: number;
}

export interface LinksObject {
  paper: string;
  cribs: string;
}
