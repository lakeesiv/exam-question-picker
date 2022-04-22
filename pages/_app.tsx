import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../components/Theme/theme";
import React from "react";
import SimpleSidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
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
