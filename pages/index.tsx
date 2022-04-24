import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "use-local-storage";
import Activity from "../components/Activity";
import Timeline from "../components/Timeline";
import DefaultSettings from "../defaults/index";
import { Log } from "../types";

const numberOfDaysBetween = (date1: Date, date2: Date) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(date1.getTime() - date2.getTime());
  return Math.round(differenceMs / oneDay);
};

export default function Home() {
  const [Logs] = useLocalStorage<Log[] | []>("Logs", DefaultSettings.logs);
  const daysTilExam = numberOfDaysBetween(new Date(), new Date("2022-06-07"));

  return (
    <VStack pt="4">
      <Box
        p={2}
        px={4}
        mr={2}
        bgColor="red.700"
        borderRadius="xl"
        alignSelf="flex-end"
      >
        <Heading fontSize={18} py={4}>
          {daysTilExam} days until exams
        </Heading>
      </Box>
      <Heading>Activity</Heading>
      <Activity Logs={Logs}></Activity>
      <Timeline></Timeline>
    </VStack>
  );
}
