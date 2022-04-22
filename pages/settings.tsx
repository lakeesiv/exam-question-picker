import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "use-local-storage";
import SubjectsPMFGraph from "../components/SubjectsPMFGraph";
import DefaultSettings from "../defaults";
import { SubjectWeightings, YearRange } from "../types";

const Settings = () => {
  const [SubjectWeightings] = useLocalStorage<SubjectWeightings>(
    "SubjectWeightings",
    DefaultSettings.subjectWeightings
  );

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
    </VStack>
  );
};

export default Settings;
