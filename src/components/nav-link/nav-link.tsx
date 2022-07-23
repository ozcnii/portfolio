import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { FC } from "react";
import { NavLinkProps } from "./nav-link.props";
import { useRouter } from "next/router";

export const NavLink: FC<NavLinkProps> = ({
  children,
  activeProps,
  linkProps,
  ...props
}) => {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  if (isActive) {
    return (
      <NextLink {...props}>
        <Link {...activeProps}>{children}</Link>
      </NextLink>
    );
  }

  return (
    <NextLink {...props}>
      <Link {...linkProps}>{children}</Link>
    </NextLink>
  );
};
