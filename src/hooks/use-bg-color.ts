import { useColorModeValue } from "@chakra-ui/react";

export const useBgColor = () => {
  const bg = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("white", "gray.800");
  return { bg, color };
};
