import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

const CVContainer = ({ cv }) => {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image id="luke-cv-img" src={cv.image} />
        </Grid.Column>
        <Grid.Column width={13}>
          <Header id="header-cv">{cv.name}</Header>
          <h5 id="cv-occupation">Aspiring Fullstack Developer</h5>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <section id="cv-actual">
            <p id="cv-experience">{cv.experience}</p>
            <li id="cv-education">{cv.education}</li>
            <p id="cv-extra-information">{cv.extrainformation}</p>
            <ul id="cv-interests">{cv.interests}</ul>
          </section>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CVContainer;
