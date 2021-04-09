import React, { Component } from "react";
import { Container, Grid, GridRow } from "semantic-ui-react";
import ProjectCard from "./AboutCard";
import axios from "axios";
import UndrawCoding from "react-undraw-illustrations/lib/components/UndrawCoding";


class About extends Component {
  state = {
    about: [],
  }
    componentDidMount() {
    axios.get("./data/about.json").then((response) => {
      this.setState({ about: response.data})
    })
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
        
        <h1 id="about-header">About Me</h1>
        <Grid>{aboutList}</Grid>
        <Grid>
          <Grid.Row columns={6}>
            <Grid.Column>
              <UndrawCoding />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </Container>
    )
  }
}

export default About;
