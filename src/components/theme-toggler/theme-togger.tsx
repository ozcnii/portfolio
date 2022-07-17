import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import { useBgColor } from "../../hooks/use-bg-color";

export const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { bg } = useBgColor();
  return (
    <Button bg={bg} onClick={toggleColorMode}>
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
