import { LinkProps as NextLinkProps } from "next/link";
import { LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface NavLinkProps extends NextLinkProps {
  children: ReactNode;
  activeProps?: LinkProps;
  linkProps?: LinkProps;
}
