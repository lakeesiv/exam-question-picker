import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Log } from "../types";

interface DataTableProps {
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

  return (
    <Tr>
      <Td>{subject}</Td>
      <Td isNumeric>{year}</Td>
      <Td isNumeric>{question}</Td>
      <Td>{comments}</Td>
      <Td>{marks ? `${marks[0]}/${marks[1]}` : "undefined"}</Td>
      <Td>{timeTaken}</Td>
      <Td>{dateOfSubmission}</Td>
    </Tr>
  );
};

const DataTable: React.FC<DataTableProps> = ({ logs }) => {
  return (
    <TableContainer>
      <Table size="md" maxWidth="100">
        <Thead>
          <Tr>
            <Th>Subject</Th>
            <Th isNumeric>Year</Th>
            <Th isNumeric>Question</Th>
            <Th>Comments</Th>
            <Th>Marks</Th>
            <Th>Time Taken</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {logs.map((log, i) => (
            <Entry log={log} key={i} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
