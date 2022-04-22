import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import useLocalStorage from "use-local-storage";
import SimpleSidebar from "../components/Sidebar";
import theme from "../components/Theme/theme";
import DefaultSettings from "../defaults/index";
import { Log, SubjectWeightings, YearRange } from "../types";

function MyApp({ Component, pageProps }: AppProps) {
  const [SubjectWeightings, setSubjectWeightings] =
    useLocalStorage<SubjectWeightings>(
      "SubjectWeightings",
      DefaultSettings.subjectWeightings
    );
  const [Logs, setLogs] = useLocalStorage<Log[] | []>(
    "Logs",
    DefaultSettings.logs
  );
  const [Years, setYears] = useLocalStorage<YearRange>("Years", [1999, 2019]);
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <SimpleSidebar>
        <Component {...pageProps} />
      </SimpleSidebar>
    </ChakraProvider>
  ) // prettier-ignore
}
export default MyApp;
