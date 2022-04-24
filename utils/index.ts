import {
  thirdYearMechanicsQuestions,
  validMechanicsQuestions,
} from "../defaults/mechanics";
import {
  Links,
  Log,
  Question,
  Subject,
  SubjectWeightings,
  YearRange,
} from "../types";

export const getSubjectPMF = (ranks: SubjectWeightings) => {
  const weightings = Object.values(ranks);
  const sum = weightings.reduce((a, b) => a + b, 0);

  return weightings.map((w) => w / sum);
};
const weightedRandomChoice = <T>(items: T[], weights: number[]) => {
  // https://stackoverflow.com/a/55671924/15032172
  var i;

  for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0;

  var random = Math.random() * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;

  return items[i];
};
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomValueFromArray = <T>(array: T[]) => {
  return array[randomIntFromInterval(0, array.length - 1)];
};
const getRandomSubject = (subjectWeights: SubjectWeightings) => {
  const pmf = getSubjectPMF(subjectWeights);
  const subjects = Object.keys(subjectWeights) as Subject[];
  const subject = weightedRandomChoice(subjects, pmf);

  return subject;
};
export const getRandomQuestion = (
  subjectWeights: SubjectWeightings,
  yearRange: YearRange
): Question => {
  const year = randomIntFromInterval(yearRange[0], yearRange[1]);
  const subject = getRandomSubject(subjectWeights);

  if (subject === "2P1") {
    const randomInt = randomIntFromInterval(1, 10);

    if (
      Object.keys(validMechanicsQuestions).includes(String(year)) &&
      randomInt >= 3
    ) {
      const questions = validMechanicsQuestions[year];
      const question = randomValueFromArray(questions);
      console.log(questions);
      return {
        year,
        subject,
        question,
      };
    } else if (randomInt < 3) {
      const years = Object.keys(thirdYearMechanicsQuestions);
      const year = parseInt(randomValueFromArray(years));
      const subject = "3C5";
      const question = thirdYearMechanicsQuestions[year.toString() as any];

      return {
        year,
        subject,
        question,
      };
    }
  }

  const question = randomIntFromInterval(1, 6);

  return { subject, year, question } as Question;
};
export const getLinks = (question: Question): Links => {
  const { subject, year } = question;
  let base = `https://cribs-static.netlify.app/IB/tripos/${subject}/`;

  if (subject === "3C5") {
    base = `https://cribs-static.netlify.app/IIA/tripos/C/3C5/`;
  }

  return {
    paper: `${base}QP_${year}.pdf`,
    cribs: `${base}CRIB_${year}.pdf`,
  };
};
export const addLog = (log: Log, setLogs: any) => {
  setLogs((logs: Log[]) => [
    ...logs,
    { ...log, dateOfSubmission: new Date().toISOString() },
  ]);
};
export const getTodaysLogs = (logs: Log[]) => {
  const today = new Date().toISOString().split("T")[0];
  try {
    return logs.filter((log) => log.dateOfSubmission.split("T")[0] === today);
  } catch (error) {}
};
export const getLogTimeTaken = (log: Log) => {
  const date = log.dateOfSubmission;
  const time = new Date(date).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "UTC",
  });
  return time;
};
const getNumberOfOccurences = (array: any[], value: any) => {
  return array.filter((a) => a === value).length;
};
export const getTimelineData = (logs: Log[]) => {
  const todaysLogs = getTodaysLogs(logs);
  if (todaysLogs) {
    const times = todaysLogs.map((log) => getLogTimeTaken(log));
    const hours = times.map((time) => parseInt(time.split(":")[0]));
    const hoursInADay = [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ];
    const hoursInADayString = [
      "4am",
      "5am",
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12am",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
      "8pm",
      "9pm",
    ];
    const hoursInADayCount = hoursInADay.map((hour) =>
      getNumberOfOccurences(hours, hour)
    );

    return { hoursInADayString, hoursInADayCount };
  }
};
