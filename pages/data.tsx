import React from "react";
import useLocalStorage from "use-local-storage";
import DataTable from "../components/DataTable";
import DefaultSettings from "../defaults";
import { Log } from "../types";

const Data = () => {
  const [Logs, setLogs] = useLocalStorage<Log[] | []>(
    "Logs",
    DefaultSettings.logs
  );

  return <div>{Logs[0].subject && <DataTable logs={Logs} />}</div>;
};

export default Data;
