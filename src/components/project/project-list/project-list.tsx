import { FC } from "react";
import { List } from "@chakra-ui/react";
import { ProjectItem } from "../project-item/project-item";
import { ProjectListProps } from "./projcet-list.props";

export const ProjectList: FC<ProjectListProps> = () => {
  return (
    <List
      gap="3"
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
    >
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </List>
  );
};
