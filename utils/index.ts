import { SubjectWeightings } from "../types";

export const getSubjectPMF = (ranks: SubjectWeightings) => {
  const weightings = Object.values(ranks);
  const sum = weightings.reduce((a, b) => a + b, 0);

  return weightings.map((w) => w / sum);
};

export const mySubjectWeightings: SubjectWeightings = {
  "2P1": 9,
  "2P2": 3,
  "2P3": 7,
  "2P4": 9,
  "2P5": 5,
  "2P6": 6,
  "2P7": 5,
};
