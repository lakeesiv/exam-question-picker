export type Subject =
  | "2P1"
  | "2P2"
  | "2P3"
  | "2P4"
  | "2P5"
  | "2P6"
  | "2P7"
  | "3C5";
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

export interface Log {
  subject: Subject;
  year: number;
  question: number;
  marks?: Marks;
  timeTaken?: string;
  comments?: string;
  dateOfSubmission?: string;
}

export interface Question {
  subject: Subject;
  year: number;
  question: number;
}

export interface Links {
  paper: string;
  cribs: string;
}
