import React from "react";
import useLocalStorage from "use-local-storage";
import DataList from "../components/DataList";
import DataTable from "../components/DataTable";
import DefaultSettings from "../defaults";
import { Log } from "../types";

const Data = () => {
  const [Logs, setLogs] = useLocalStorage<Log[] | []>(
    "Logs",
    DefaultSettings.logs
  );

  return <div>{Logs[0].subject && <DataList logs={Logs} />}</div>;
};

export default Data;
