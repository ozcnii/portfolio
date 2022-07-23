import { NextPage } from "next";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Project: NextPage = ({ project }) => {
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

export async function getStaticProps({ params }) {
  const ref = collection(db, "projects");
  const q = query(ref, where("slug", "==", "first-project"));

  const querySnapshot = await getDocs(q);
  const project = querySnapshot.docs.map((doc) => doc.data());

  console.log(params, ref, q, project);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
}

export default Project;
