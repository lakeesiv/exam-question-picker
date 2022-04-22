import React from "react";
import { Bar } from "react-chartjs-2";
import { SubjectWeightings } from "../types";
import { getSubjectPMF } from "../utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Box } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    title: {
      display: true,
      text: "PMF of Subjects",
    },
  },
};

interface SubjectsPMFGraphProps {
  subjectWeightings: SubjectWeightings;
}

const SubjectsPMFGraph: React.FC<SubjectsPMFGraphProps> = ({
  subjectWeightings,
}) => {
  const labels = Object.keys(subjectWeightings);
  const pmf = getSubjectPMF(subjectWeightings);

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [{ label: "PMF", data: pmf, backgroundColor: "#2f2f2f" }],
  };

  return (
    <Box w="lg" h="lg">
      <Bar data={data} options={options}></Bar>
    </Box>
  );
};

export default SubjectsPMFGraph;
