import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { ProjectList } from "../../components/project/project-list/project-list";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IProject } from "../../lib/models/projects";

interface ProjectsPageProps {
  projects: IProject[];
}

const Projects: NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <>
      <Heading mb="3">Projects</Heading>
      <ProjectList projects={projects} />
    </>
  );
};

export async function getStaticProps() {
  const querySnapshop = await getDocs(collection(db, "projects"));
  const projects = querySnapshop.docs.map((doc) => doc.data());

  return {
    props: { projects },
  };
}

export default Projects;
