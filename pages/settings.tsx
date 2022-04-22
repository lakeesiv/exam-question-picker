import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "use-local-storage";
import ConditionalRender from "../components/ConditionalRender";
import SubjectsPMFGraph from "../components/SubjectsPMFGraph";
import DefaultSettings from "../defaults";
import { SubjectWeightings, YearRange } from "../types";

const Settings = () => {
  const [SubjectWeightings] = useLocalStorage<SubjectWeightings>(
    "SubjectWeightings",
    DefaultSettings.subjectWeightings
  );
  let allData = null;
  if (typeof window !== "undefined") {
    allData = { ...localStorage };
  }

  const [Years] = useLocalStorage<YearRange>("Years", [1999, 2019]);

  return (
    <VStack py="10">
      <SubjectsPMFGraph
        subjectWeightings={SubjectWeightings}
      ></SubjectsPMFGraph>
      <Divider py="2" />
      <Box py="3" px="3" borderRadius="lg" bgColor="gray.800">
        Year Range: {Years[0]} - {Years[1]}
      </Box>
      <Divider />
      <ConditionalRender condition={allData as any}>
        <HStack py="4">
          <a
            type="button"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(allData)
            )}`}
            download="data.json"
          >
            <Button>Download All Data</Button>
          </a>
        </HStack>
      </ConditionalRender>
    </VStack>
  );
};

export default Settings;
