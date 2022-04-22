import React from "react";
import { getLinks, getRandomQuestion, getSubjectPMF } from "../utils/index";
import useLocalStorage from "use-local-storage";
import ConditionalRender from "../components/ConditionalRender";
import { SubjectWeightings } from "../types";
import DefaultSettings from "../defaults/index";
import SubjectsPMFGraph from "../components/SubjectsPMFGraph";

export default function Home() {
  const [SubjectWeightings, setSubjectWeightings] = useLocalStorage(
    "SubjectWeightings",
    DefaultSettings.subjectWeightings
  );

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
    </div>
  );
}
