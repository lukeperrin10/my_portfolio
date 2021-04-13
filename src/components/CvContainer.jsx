import React from "react";
import { Container, Header, ModalDescription } from "semantic-ui-react";

const CVContainer = ({ cv }) => {
  return (
    <Container text>
     <Header> 
      {cv.company}
      {cv.year}
      {cv.jobtitle}
      </Header>
      <ModalDescription>
      {cv.responsibilities}
    </ModalDescription>
    </Container>
  );
};

export default CVContainer;
