import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Image,
} from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} wrapped ui={false} />
      <CardContent>
        <CardHeader>{project.name}</CardHeader>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
