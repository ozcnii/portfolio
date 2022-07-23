import Head from "next/head";
import { FC } from "react";
import { Routes } from "../../routes";
import { MainLayoutProps } from "./main-layout.props";
import { NavLink } from "../nav-link/nav-link";
import { ThemeToggler } from "../theme-toggler/theme-togger";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useBgColor } from "../../hooks/use-bg-color";

const headerHight = 14;
const mainContentMarginTop = headerHight + 2;

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { bg } = useBgColor();
  return (
    <>
      <Head>
        <title>q</title>
      </Head>

      <chakra.header
        px="3"
        backdropFilter="auto"
        backdropBlur="10px"
        h={headerHight}
        position="fixed"
        top={0}
        left={0}
        right={0}
        mx="auto"
        maxW="container.md"
      >
        <Flex h="full" justify="space-between" alignItems="center">
          <chakra.nav h="full" alignItems="center" display="flex" gap="3">
            <NavLink activeProps={{ color: "cyan.400" }} href={Routes.Home}>
              Home
            </NavLink>

            <Box display={{ base: "none", md: "flex" }} gap="3">
              <NavLink
                activeProps={{ color: "cyan.400" }}
                href={Routes.Projects}
              >
                Rrojects
              </NavLink>
            </Box>
          </chakra.nav>

          <Flex gap="3">
            <ThemeToggler />
            <Box display={{ base: "flex", md: "none" }}>
              <Menu isLazy>
                {({ isOpen }) => (
                  <>
                    <MenuButton bg={bg} as={Button} isActive={isOpen}>
                      <HamburgerIcon />
                    </MenuButton>
                    <MenuList>
                      <NavLink
                        activeProps={{ color: "cyan.400" }}
                        href={Routes.Projects}
                      >
                        <MenuItem>Rrojects</MenuItem>
                      </NavLink>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </chakra.header>

      <chakra.main mb="5" mt={mainContentMarginTop}>
        <Container>{children}</Container>
      </chakra.main>
    </>
  );
};
