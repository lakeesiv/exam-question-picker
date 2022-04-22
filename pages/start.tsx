import {
  Box,
  Button,
  Heading,
  HStack,
  NumberInput,
  NumberInputField,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { StopwatchResult, useStopwatch } from "react-timer-hook";
import useLocalStorage from "use-local-storage";
import Stopwatch from "../components/Stopwatch";
import DefaultSettings from "../defaults";
import { Log, Marks, Question, SubjectWeightings, YearRange } from "../types";
import { addLog, getLinks, getRandomQuestion } from "../utils";

const pickQuestionHandler = (
  s: SubjectWeightings,
  y: YearRange,
  setCurrentQuestion: React.Dispatch<React.SetStateAction<Question | null>>
) => {
  const q = getRandomQuestion(s, y);
  setCurrentQuestion(q);
};

const sumbitHandler = (
  stopwatch: StopwatchResult,
  question: Question,
  comments: string,
  marks: Marks,
  setLogs: any
) => {
  const { hours, minutes, seconds, reset } = stopwatch;
  reset();
  const log: Log = {
    ...question,
    comments,
    marks,
    timeTaken: `${hours}:${minutes}:${seconds}`,
  };
  console.table(log);
  addLog(log, setLogs);
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
  const [comments, setComments] = useState("");
  const [marks, setMarks] = useState<Marks>([0, 0]);

  let textAreaHandler = (e: any) => {
    let inputValue = e.target.value;
    setComments(inputValue);
  };

  return (
    <Box>
      {currentQuestion && (
        <Button
          mr="4"
          mt={4}
          onClick={() =>
            sumbitHandler(stopwatch, currentQuestion, comments, marks, setLogs)
          }
        >
          Sumbit and Move on
        </Button>
      )}
      <Button
        bgColor="red.800"
        mt={4}
        onClick={() =>
          pickQuestionHandler(SubjectWeightings, Years, setCurrentQuestion)
        }
      >
        {currentQuestion ? "Skip" : "Start"}
      </Button>
      {currentQuestion && (
        <div>
          <VStack mb={8}>
            <Heading>
              {currentQuestion?.subject} {currentQuestion?.year} Q
              {currentQuestion?.question}
            </Heading>
            <HStack>
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
            </HStack>
          </VStack>
          <Stopwatch stopwatch={stopwatch}></Stopwatch>
          <Heading fontSize="25" py="4">
            Comments:
          </Heading>
          <Textarea
            onChange={textAreaHandler}
            placeholder="Enter any comments here"
            size="md"
          />
          <Heading fontSize="25" py="4">
            Marks (achieved/total):
          </Heading>
          <HStack>
            <NumberInput
              onChange={(valueString) =>
                setMarks((marks) => [parseInt(valueString), marks[1]])
              }
              max={50}
            >
              <NumberInputField />
            </NumberInput>
            <NumberInput
              onChange={(valueString) =>
                setMarks((marks) => [marks[0], parseInt(valueString)])
              }
              max={50}
            >
              <NumberInputField />
            </NumberInput>
          </HStack>
        </div>
      )}
    </Box>
  );
};

export default Start;
