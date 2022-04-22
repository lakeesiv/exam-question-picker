import React, { useState } from "react";
import {
  addLog,
  getLinks,
  getRandomQuestion,
  getSubjectPMF,
} from "../utils/index";
import useLocalStorage from "use-local-storage";
import Stopwatch from "../components/Stopwatch";
import DefaultSettings from "../defaults/index";
import SubjectsPMFGraph from "../components/SubjectsPMFGraph";
import { useStopwatch } from "react-timer-hook";
import { Log, SubjectWeightings } from "../types";
import SimpleSidebar from "../components/Sidebar";

export default function Home() {
  const [SubjectWeightings, setSubjectWeightings] =
    useLocalStorage<SubjectWeightings>(
      "SubjectWeightings",
      DefaultSettings.subjectWeightings
    );
  const [Logs, setLogs] = useLocalStorage<Log[] | []>("Logs", []);
  const stopwatch = useStopwatch({ autoStart: false });

  return (
    <div>
      <button
        onClick={() =>
          addLog({ question: 1, subject: "2P1", year: 2018 }, setLogs)
        }
      >
        Hi
      </button>
      <button
        onClick={() => {
          const question = getRandomQuestion(SubjectWeightings, [1999, 2018]);
          console.log(question, getLinks(question));
        }}
      >
        Question
      </button>
      <SubjectsPMFGraph
        subjectWeightings={SubjectWeightings}
      ></SubjectsPMFGraph>
      <Stopwatch stopwatch={stopwatch} />
    </div>
  );
}
