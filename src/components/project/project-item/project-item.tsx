import { FC } from "react";
import { ListItem, Img, Text, chakra } from "@chakra-ui/react";
import { ProjectItemProps } from "./project-item.props";
import { Routes } from "../../../routes";
import Link from "next/link";

export const ProjectItem: FC<ProjectItemProps> = ({
  title,
  shortDescription,
  previewImage,
  slug,
}) => {
  return (
    <ListItem>
      <Link href={`${Routes.Projects}/${slug}`}>
        <chakra.a
          cursor="pointer"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Img
            mb="1"
            objectFit="cover"
            rounded="md"
            boxSize="100%"
            src={previewImage}
            alt={title}
          />
          <Text
            _hover={{
              textDecoration: "underline",
            }}
            mb="1"
            fontWeight="500"
          >
            {title}
          </Text>
          <span>{shortDescription}</span>
        </chakra.a>
      </Link>
    </ListItem>
  );
};
