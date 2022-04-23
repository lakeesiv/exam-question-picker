import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "use-local-storage";
import Activity from "../components/Activity";
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
    <VStack pt="12">
      <Heading>Activity</Heading>
      <Activity Logs={Logs}></Activity>
      <Box p={2} px={4} bgColor="red.700" borderRadius="xl">
        <Heading py={4}>{daysTilExam} until exams</Heading>
      </Box>
    </VStack>
  );
}
