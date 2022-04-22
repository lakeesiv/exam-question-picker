import React from "react";
import { myRanks, getWeightings } from "../utils/index";
import useLocalStorage from "use-local-storage";
import ConditionalRender from "../components/ConditionalRender";
import { Ranks } from "../types";

const onClick = () => {
  console.log(getWeightings(myRanks));
};

export default function Home() {
  const [ranks, setRanks] = useLocalStorage("ranks", {});

  return (
    <div>
      <ConditionalRender condition={Object.keys(ranks).length !== 0}>
        <button onClick={() => console.log(getWeightings(ranks as Ranks))}>
          Hi
        </button>
      </ConditionalRender>
      <ConditionalRender condition={Object.keys(ranks).length === 0}>
        <button onClick={() => setRanks(myRanks)}>Set</button>
      </ConditionalRender>
    </div>
  );
}
