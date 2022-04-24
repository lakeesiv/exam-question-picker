import { Box } from "@chakra-ui/react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import useLocalStorage from "use-local-storage";
import DefaultSettings from "../defaults";
import { Log, SubjectWeightings } from "../types";
import { getSubjectPMF, getTimelineData } from "../utils";

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
      text: "Timeline of Today",
    },
  },
};

const Timeline = () => {
  const [Logs] = useLocalStorage<Log[] | []>("Logs", DefaultSettings.logs);
  const [data, setData] = useState<
    ChartData<"bar", number[], string> | undefined
  >(undefined);

  useEffect(() => {
    if (Logs) {
      const timelineData = getTimelineData(Logs);
      if (timelineData) {
        setData({
          labels: timelineData.hoursInADayString,
          datasets: [
            {
              label: "Timeline of Today",

              data: timelineData.hoursInADayCount,
              backgroundColor: "#2f2f2f",
            },
          ],
        });
      }
    }
  }, [Logs]);

  return (
    <div>
      {data && (
        <Box w="3xl" h="lg">
          <Bar data={data} options={options}></Bar>
        </Box>
      )}
    </div>
  );
};

export default Timeline;
