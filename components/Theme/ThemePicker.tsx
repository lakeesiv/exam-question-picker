import React from "react";
import { useColorMode, Box } from "@chakra-ui/react";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemePicker: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <DarkModeToggle
      onChange={toggleColorMode}
      checked={colorMode === "dark" ? true : false}
      size={60}
      speed={2.35}
    />
  );
};

export default ThemePicker;
