import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

const CVContainer = ({ cv }) => {
  return (
    <Grid>
      <Grid.Column width={40}>
        <section id="cv-actual">
          <div>
            <h4 id="job1">
              {cv.company}
              {cv.year}
              {cv.jobtitle}
            </h4>
            <p id="description">{cv.responsibilities}</p>
            <br></br>
          </div>
        </section>
      </Grid.Column>
    </Grid>
  );
};

export default CVContainer;
