import React from "react";
import { addLog, getLinks, getRandomQuestion } from "../utils/index";
import useLocalStorage from "use-local-storage";
import Stopwatch from "../components/Stopwatch";
import DefaultSettings from "../defaults/index";
import SubjectsPMFGraph from "../components/SubjectsPMFGraph";
import { useStopwatch } from "react-timer-hook";
import { Log, SubjectWeightings, YearRange } from "../types";

export default function Home() {
  const [SubjectWeightings, setSubjectWeightings] =
    useLocalStorage<SubjectWeightings>(
      "SubjectWeightings",
      DefaultSettings.subjectWeightings
    );
  const [Logs, setLogs] = useLocalStorage<Log[] | []>("Logs", []);
  const [Years, setYears] = useLocalStorage<YearRange>("Years", [1999, 2019]);

  return (
    <div>
      <button
        onClick={() =>
          addLog(getRandomQuestion(SubjectWeightings, Years), setLogs)
        }
      >
        Add Random
      </button>
    </div>
  );
}
