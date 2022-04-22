import { Box } from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import ReactTooltip from "react-tooltip";
import { Log } from "../types";

const isBetween = (x: number, a: number, b: number) => x >= a && x <= b;

function getDates(startDate: string, stopDate: string, logs: Log[]) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var s = moment(stopDate);

  while (currentDate <= s) {
    const cur = moment(currentDate).format("YYYY-MM-DD");
    const count = logs.filter((log) => log.dateOfSubmission === cur).length;
    if (isBetween(count, 1, 3)) {
      var level = 1;
    } else if (isBetween(count, 1, 5)) {
      level = 1;
    } else if (isBetween(count, 6, 10)) {
      level = 2;
    } else if (count >= 11) {
      level = 4;
    } else {
      level = 12;
    }
    dateArray.push({
      date: cur,
      level: level,
      count: count,
    });
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}

interface ActivityProps {
  Logs: Log[];
}

const Activity: React.FC<ActivityProps> = ({ Logs }) => {
  // const [Logs, setLogs] = useLocalStorage<Log[] | []>("Logs", []);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(getDates("2022-04-01", "2022-09-01", Logs));
    console.log(Logs);
  }, [Logs]); // eslint-disable-line

  return (
    <Box w="xxl" p="4">
      <ActivityCalendar
        data={data}
        blockSize={20}
        color="#00FF00"
        labels={{
          legend: {
            less: "Less",
            more: "More",
          },
          months: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          totalCount: "{{count}} questions in {{year}}",
          weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        }}
      >
        <ReactTooltip html />
      </ActivityCalendar>
    </Box>
  );
};

export default Activity;
