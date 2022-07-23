import { NextPage } from "next";
import { useRouter } from "next/router";

const Project: NextPage = () => {
  const {
    query: { slug },
  } = useRouter();
  return <div>Project page {slug}</div>;
};

export default Project;
