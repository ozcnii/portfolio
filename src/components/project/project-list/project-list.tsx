import { FC } from "react";
import { List } from "@chakra-ui/react";
import { ProjectItem } from "../project-item/project-item";
import { ProjectListProps } from "./projcet-list.props";

const projects = [
  {
    slug: "a1",
    title: "Some title 0",
    shortDescription: "Some short description",
    previewImage:
      "https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&quality=85&auto=format&fit=max&s=ece1ea9d22adb87f37b4361ae1c23eb2",
  },
  {
    slug: "a2",
    title: "Some title 1",
    shortDescription: "Some short description",
    previewImage:
      "https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&quality=85&auto=format&fit=max&s=ece1ea9d22adb87f37b4361ae1c23eb2",
  },
  {
    slug: "a3",
    title: "Some title 2",
    shortDescription: "Some short description",
    previewImage:
      "https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&quality=85&auto=format&fit=max&s=ece1ea9d22adb87f37b4361ae1c23eb2",
  },
  {
    slug: "a4",
    title: "Some title 3",
    shortDescription: "Some short description",
    previewImage:
      "https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&quality=85&auto=format&fit=max&s=ece1ea9d22adb87f37b4361ae1c23eb2",
  },
];

export const ProjectList: FC<ProjectListProps> = () => {
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
