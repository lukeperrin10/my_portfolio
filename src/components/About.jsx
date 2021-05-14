import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Grid } from 'semantic-ui-react';
import ProjectCard from './AboutCard';
import axios from 'axios';

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios.get('./data/about.json').then((response) => {
      setAbout(response.data);
    });
  });

  let aboutList = about.map((about) => {
    return (
      <div id={`about-${about.id}`} key={about.id}>
        <ProjectCard about={about} />
      </div>
    );
  });

  return (
    <Container>
      <Helmet>
        <style>{'body {background-color: lightgrey;}'}</style>
      </Helmet>
      <h1 id='about-header'>About Me</h1>
      <Grid>{aboutList}</Grid>
    </Container>
  );
};

export default About;
