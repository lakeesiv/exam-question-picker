import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "use-local-storage";
import Activity from "../components/Activity";
import DefaultSettings from "../defaults/index";
import { Log } from "../types";

export default function Home() {
  const [Logs] = useLocalStorage<Log[] | []>("Logs", DefaultSettings.logs);

  return (
    <VStack pt="12">
      <Heading>Activity</Heading>
      <Activity Logs={Logs}></Activity>
    </VStack>
  );
}
