import React from "react";
import { Container } from "semantic-ui-react";

const CVContainer = ({ cv }) => {
  return (
    <Container text>
      <div id="cv-actual">
        <section id="work">
          <h5 id="occupation">
            {cv.company}
            {cv.year}
            {cv.jobtitle}
          </h5>
          <p id="description">{cv.responsibilities}</p>
        </section>
        <section id="education">
          <h5 id="studies">{cv.school}</h5>
          <p id="studydescription">{cv.description}</p>
        </section>
      </div>
      </Container>
  );
};

export default CVContainer;
