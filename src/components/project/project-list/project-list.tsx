import { FC } from "react";
import { List } from "@chakra-ui/react";
import { ProjectItem } from "../project-item/project-item";
import { ProjectListProps } from "./projcet-list.props";

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <List
      gap="3"
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
    >
      {projects.map(({ slug, title, previewImage, shortDescription }) => (
        <ProjectItem
          key={slug}
          slug={slug}
          title={title}
          shortDescription={shortDescription}
          previewImage={previewImage}
        />
      ))}
    </List>
  );
};
