import { FC } from "react";
import { ListItem } from "@chakra-ui/react";
import { ProjectItemProps } from "./project-item.props";

export const ProjectItem: FC<ProjectItemProps> = () => {
  return <ListItem bg={"red.500"}>Project Item</ListItem>;
};
