import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { StopwatchResult } from "react-timer-hook";

interface StopwatchProps {
  stopwatch: StopwatchResult;
}
const Stopwatch: React.FC<StopwatchProps> = ({ stopwatch }) => {
  const { seconds, minutes, hours, isRunning, start, pause, reset } = stopwatch;
  return (
    <VStack textAlign="center" justifyContent="center">
      <Box
        w="sm"
        h="xxs"
        bgColor={isRunning ? "green.600" : "red.600"}
        textAlign="center"
        justifyItems="center"
        borderRadius="xl"
      >
        <Text fontSize="80" fontFamily="mono" textColor="gray.900">
          {hours}:{minutes}:{seconds}
        </Text>
      </Box>
      <HStack spacing="8" pt="2" pb="4">
        <Button onClick={start}>Start</Button>
        <Button onClick={pause}>Pause</Button>
        <Button onClick={reset as any}>Reset</Button>
      </HStack>
    </VStack>
  );
};

export default Stopwatch;
