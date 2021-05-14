import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Grid, Header } from 'semantic-ui-react';
import CvContainer from './CvContainer';

const Cv = () => {
  const [cv, setCv] = useState([]);

  useEffect(() => {
    axios.get('./data/cv.json').then((response) => {
      setCv(response.data);
    });
  });
  let cvInfo = cv.map((cv) => {
    return (
      <div id={`cv-${cv.id}`} key={cv.id}>
        <CvContainer cv={cv} />
      </div>
    );
  });

  return (
    <Container>
      <Helmet>
        <style>{'body {background-color: lightgrey;}'}</style>
      </Helmet>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <img id='luke-cv-img' src={'./data/me.jpg'} alt='Luke' />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header id='header-cv'>Luke Perrin</Header>
            <h5 id='cv-occupation'>Aspiring Fullstack Developer</h5>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <h3 id='cv-experience'>Experience</h3>
      <Grid>{cvInfo}</Grid>
    </Container>
  );
};

export default Cv;
