import { Box, Button, Heading, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import useLocalStorage from "use-local-storage";
import ConditionalRender from "../components/ConditionalRender";
import Stopwatch from "../components/Stopwatch";
import DefaultSettings from "../defaults";
import { Log, YearRange, SubjectWeightings, Question } from "../types";
import { getLinks, getRandomQuestion } from "../utils";

const pickQuestionHandler = (
  s: SubjectWeightings,
  y: YearRange,
  setCurrentQuestion: React.Dispatch<React.SetStateAction<Question | null>>
) => {
  const q = getRandomQuestion(s, y);
  setCurrentQuestion(q);
};

const Start = () => {
  const [SubjectWeightings] = useLocalStorage<SubjectWeightings>(
    "SubjectWeightings",
    DefaultSettings.subjectWeightings
  );
  const [Logs, setLogs] = useLocalStorage<Log[] | []>(
    "Logs",
    DefaultSettings.logs
  );
  const [Years] = useLocalStorage<YearRange>("Years", [1999, 2019]);

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const stopwatch = useStopwatch({ autoStart: false });
  return (
    <Box>
      <Button
        onClick={() =>
          pickQuestionHandler(SubjectWeightings, Years, setCurrentQuestion)
        }
      >
        New Question
      </Button>
      {currentQuestion && (
        <div>
          <Heading>
            {currentQuestion?.subject} {currentQuestion?.year} Q
            {currentQuestion?.question}
          </Heading>

          <a
            target="_blank"
            rel="noreferrer"
            href={getLinks(currentQuestion!).paper}
          >
            <Button bgColor="green.700">Open Paper</Button>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={getLinks(currentQuestion!).cribs}
          >
            <Button bgColor="blue.700">Open Crib</Button>
          </a>
          <Stopwatch stopwatch={stopwatch}></Stopwatch>
        </div>
      )}
    </Box>
  );
};

export default Start;
