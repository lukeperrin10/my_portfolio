import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Image,
} from 'semantic-ui-react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <Helmet>
        <style>{'body {background-color: lightgrey;}'}</style>
      </Helmet>
      <Card>
        <Image src={project.image} wrapped ui={false} />
        <CardContent>
          <CardHeader>{project.name}</CardHeader>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
