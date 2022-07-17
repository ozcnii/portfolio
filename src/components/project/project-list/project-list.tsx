import { FC } from "react";
import { ProjectItem } from "../project-item/project-item";
import { ProjectListProps } from "./projcet-list.props";

export const ProjectList: FC<ProjectListProps> = () => {
  return (
    <>
      Project List
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </>
  );
};
