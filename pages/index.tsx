import React from "react";
import useLocalStorage from "use-local-storage";
import DefaultSettings from "../defaults/index";
import { Log, SubjectWeightings, YearRange } from "../types";
import { addLog, getRandomQuestion } from "../utils/index";
import Activity from "../components/Activity";

export default function Home() {
  const [SubjectWeightings, setSubjectWeightings] =
    useLocalStorage<SubjectWeightings>(
      "SubjectWeightings",
      DefaultSettings.subjectWeightings
    );
  const [Logs, setLogs] = useLocalStorage<Log[] | []>(
    "Logs",
    DefaultSettings.logs
  );
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
      <Activity></Activity>
    </div>
  );
}
