import { Log, SubjectWeightings } from "../types";
import data from "./data.json";

const subjectWeightings: SubjectWeightings = {
  "2P1": 9,
  "2P2": 3,
  "2P3": 7,
  "2P4": 9,
  "2P5": 5,
  "2P6": 6,
  "2P7": 5,
};
const logs: Log[] = JSON.parse(data.Logs);
const DefaultSettings = { subjectWeightings, logs };

export default DefaultSettings;
