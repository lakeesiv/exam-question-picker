import React from "react";
import { getLinks, getRandomQuestion, getSubjectPMF } from "../utils/index";
import useLocalStorage from "use-local-storage";
import Stopwatch from "../components/StopWatch";
import DefaultSettings from "../defaults/index";
import SubjectsPMFGraph from "../components/SubjectsPMFGraph";
import { useStopwatch } from "react-timer-hook";

export default function Home() {
  const [SubjectWeightings, setSubjectWeightings] = useLocalStorage(
    "SubjectWeightings",
    DefaultSettings.subjectWeightings
  );
  const stopwatch = useStopwatch({ autoStart: false });

  return (
    <div>
      <button onClick={() => console.log(getSubjectPMF(SubjectWeightings))}>
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
