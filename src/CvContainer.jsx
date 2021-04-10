import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";


const CVContainer = ({ cv}) => {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <img id="luke-cv-img" src={('./data/me.jpg')} />
        </Grid.Column>
        <Grid.Column width={13}>
          <Header id="header-cv">Luke Perrin</Header>
          <h5 id="cv-occupation">Aspiring Fullstack Developer</h5>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <section id="cv-actual">
            <h4 id="cv-experience">Experience</h4>           
            <div id="job1"><h4>{cv.company}{cv.year}<br></br>{cv.jobtitle}</h4>
            <p id="description">{cv.responsibilities}</p>
            </div>
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
