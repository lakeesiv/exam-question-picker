import React from "react";
import { myRanks, getWeightings } from "../utils/index";

const onClick = () => {
  console.log(getWeightings(myRanks));
};

export default function Home() {
  return (
    <div>
      <button onClick={onClick}>Hi</button>
    </div>
  );
}
