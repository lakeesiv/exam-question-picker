import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../components/Theme/theme";
import React from "react";
import SimpleSidebar from "../components/Sidebar";
import useLocalStorage from "use-local-storage";
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
