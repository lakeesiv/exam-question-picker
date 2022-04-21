import React from "react";
import { myRanks, getWeightings } from "../utils/index";
import useLocalStorage from "use-local-storage";

const onClick = () => {
  console.log(getWeightings(myRanks));
};

export default function Home() {
  const [ranks, setRanks] = useLocalStorage("ranks", {});

  return (
    <div>
      <button onClick={() => console.log(getWeightings(ranks))}>Hi</button>
    </div>
  );
}
