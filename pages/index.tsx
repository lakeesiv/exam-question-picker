import React from "react";
import { getSubjectPMF } from "../utils/index";
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

const onClick = () => {
  console.log(getSubjectPMF(mySubjectWeightings));
};

export default function Home() {
  const [SubjectWeightings, setSubjectWeightings] = useLocalStorage(
    "SubjectWeightings",
    {}
  );

  return (
    <div>
      <ConditionalRender
        condition={Object.keys(SubjectWeightings).length !== 0}
      >
        <button
          onClick={() =>
            console.log(getSubjectPMF(SubjectWeightings as SubjectWeightings))
          }
        >
          Hi
        </button>
      </ConditionalRender>
      <ConditionalRender
        condition={Object.keys(SubjectWeightings).length === 0}
      >
        <button onClick={() => setSubjectWeightings(mySubjectWeightings)}>
          Set
        </button>
      </ConditionalRender>
    </div>
  );
}
