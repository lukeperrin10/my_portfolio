import React from "react";
import { Container } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import "./index.css";

const Hello = () => {
  return (
    <Container>
      <Helmet><style>{'body {background-color: lightgrey;}'}</style></Helmet>
      <h1 id="hello">Hi and welcome to my portfolio</h1>
      <p>
        This is an ongoing site that will be update regulary so stick aruond and
        see what happens!
      </p>
    </Container>
  );
};

export default Hello;
