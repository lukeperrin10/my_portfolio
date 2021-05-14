import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('./data/projects.json').then((response) => {
      setProjects(response.data);
    });
  });

  const projectsList = projects.map((project) => {
    return (
      <div id={`project-${project.id}`} key={project.id}>
        <ProjectCard project={project} />
      </div>
    );
  });

  return (
    <Container>
      <h1 id='projects-header'>My Projects</h1>
      <Grid>{projectsList}</Grid>
    </Container>
  );
};

export default Projects;
