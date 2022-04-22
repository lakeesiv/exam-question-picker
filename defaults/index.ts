import { Log, SubjectWeightings } from "../types";

const subjectWeightings: SubjectWeightings = {
  "2P1": 9,
  "2P2": 3,
  "2P3": 7,
  "2P4": 9,
  "2P5": 5,
  "2P6": 6,
  "2P7": 5,
};

const logs: Log[] = [
  {
    subject: "2P4",
    year: 1999,
    question: 1,
    comments: "Went really well got 100%, pretty easy",
    timeTaken: "13:54",
    dateOfSubmission: "21-04-2022",
  },
  {
    subject: "2P7",
    year: 2003,
    question: 2,
    comments:
      "First two parts went well, well spotted on realizng the fluxes were zero. Last past did not get but it was onl 4 marks so not a huge deal",
    timeTaken: "11:00",
    dateOfSubmission: "21-04-2022",
  },
  {
    subject: "2P4",
    year: 2006,
    question: 5,
    comments:
      "Right techniques but many silly errors\n\nb) Substituted expression for U_2 wrong\nc) rho somehow disappered",
    timeTaken: "10:55",
    dateOfSubmission: "21-04-2022",
  },
  {
    subject: "2P7",
    year: 2000,
    question: 1,
    comments:
      "went decently\nmissed part in part b where we used incompressiblit\nother then that it is all good",
    timeTaken: "11:00",
    dateOfSubmission: "21-04-2022",
  },
  {
    subject: "2P1",
    year: 2018,
    question: 2,
    comments:
      "Gave up, lots of issues with this\nmessed up vel diagram, and did some progress with accel diagram, revisit",
    timeTaken: "13:28",
    dateOfSubmission: "22-04-2022",
  },
];
const DefaultSettings = { subjectWeightings, logs };

export default DefaultSettings;
