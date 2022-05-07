import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { Log } from "../types";
import { getLinks } from "../utils";

interface DataListProps {
  logs: Log[];
}

interface EntryProps {
  log: Log;
}

const Entry: React.FC<EntryProps> = ({ log }) => {
  const {
    subject,
    year,
    question,
    comments,
    marks,
    timeTaken,
    dateOfSubmission,
  } = log;

  const { paper, cribs } = getLinks({ subject, year, question });

  return (
    <Box bgColor="gray.800" w="lg" h="sm" m="4" p="8" borderRadius="3xl">
      <VStack>
        <Heading fontSize={40}>
          {subject} {year} Q{question}
        </Heading>
        <HStack mt={8}>
          <a target="_blank" rel="noreferrer" href={paper}>
            <Button size="xs" bgColor="green.700">
              Open Paper
            </Button>
          </a>
          <a target="_blank" rel="noreferrer" href={cribs}>
            <Button size="xs" bgColor="blue.700">
              Open Crib
            </Button>
          </a>
        </HStack>
        <Text whiteSpace="pre-line" fontSize={18} py="4">
          {comments}
        </Text>
        <HStack>
          <Box bgColor="gray.900" px="4" py="2" borderRadius="lg">
            <Text fontSize={18}>Time : {timeTaken}</Text>
          </Box>
          {marks ? (
            marks[0] ? (
              <Box bgColor="gray.900" px="4" py="2" borderRadius="lg">
                <Text fontSize={18}>{`Marks : ${marks[0]}/${marks[1]}`}</Text>
              </Box>
            ) : undefined
          ) : undefined}
        </HStack>
        <Text>{dateOfSubmission}</Text>
      </VStack>
    </Box>
  );
};

const DataList: React.FC<DataListProps> = ({ logs }) => {
  return (
    <Grid templateColumns="repeat(2,1fr)">
      {logs.map((log, i) => (
        <Entry log={log} key={i} />
      ))}
    </Grid>
  );
};

export default DataList;
