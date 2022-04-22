import React from "react";
import { mySubjectWeightings, getSubjectPMF } from "../utils/index";
import useLocalStorage from "use-local-storage";
import ConditionalRender from "../components/ConditionalRender";
import { SubjectWeightings } from "../types";

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
