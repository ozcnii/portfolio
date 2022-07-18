import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useBgColor } from "../../hooks/use-bg-color";

export const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { bg } = useBgColor();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button bg={bg} onClick={toggleColorMode}>
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
