import React from "react";
import { getRandomQuestion, getSubjectPMF } from "../utils/index";
import useLocalStorage from "use-local-storage";
import ConditionalRender from "../components/ConditionalRender";
import { SubjectWeightings } from "../types";

const mySubjectWeightings: SubjectWeightings = {
  "2P1": 9,
  "2P2": 3,
  "2P3": 7,
  "2P4": 9,
  "2P5": 5,
  "2P6": 6,
  "2P7": 5,
};

export default function Home() {
  const [SubjectWeightings, setSubjectWeightings] = useLocalStorage(
    "SubjectWeightings",
    mySubjectWeightings
  );

  return (
    <div>
      <button onClick={() => console.log(getSubjectPMF(SubjectWeightings))}>
        Hi
      </button>
      <button
        onClick={() =>
          console.log(getRandomQuestion(SubjectWeightings, [1999, 2018]))
        }
      >
        Question
      </button>
    </div>
  );
}
