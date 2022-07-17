import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { ProjectList } from "../../components/project/project-list/project-list";

const Projects: NextPage = () => {
  return (
    <>
      <Heading>Projects</Heading>
      <ProjectList />
    </>
  );
};

export default Projects;
