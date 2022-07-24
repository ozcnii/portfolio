import { NextPage } from "next";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IProject } from "../../lib/models/projects";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface ProjectPageProps {
  project: IProject;
}

const Project: NextPage<ProjectPageProps> = ({ project }) => {
  return <div>Project page {JSON.stringify(project)}</div>;
};

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const projectsPaths = querySnapshot.docs.map((doc) => ({
    params: { slug: doc.data().slug },
  }));

  return {
    paths: projectsPaths,
    fallback: false,
  };
}

interface IPageParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<IPageParams>) => {
  const ref = collection(db, "projects");
  const q = query(ref, where("slug", "==", params?.slug));

  const querySnapshot = await getDocs(q);
  const project = querySnapshot.docs.map((doc) => doc.data());

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};

export default Project;
