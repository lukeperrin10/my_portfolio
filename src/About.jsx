import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Grid} from "semantic-ui-react";
import ProjectCard from "./components/AboutCard";
import axios from "axios";

class About extends Component {
  state = {
    about: [],
  };
  componentDidMount() {
    axios.get("./data/about.json").then((response) => {
      this.setState({ about: response.data });
    });
  }

  render() {
    const { about } = this.state;

    let aboutList = about.map((about) => {
      return (
        <div id={`about-${about.id}`} key={about.id}>
          <ProjectCard about={about} />
        </div>
      );
    });

    return (
     
      <Container>
        <Helmet><style>{'body {background-color: lightgrey;}'}</style></Helmet>
        <h1 id="about-header">About Me</h1>
        <Grid>{aboutList}</Grid>
      </Container>
    );
  }
}

export default About;
