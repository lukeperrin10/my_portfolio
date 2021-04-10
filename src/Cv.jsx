import axios from "axios";
import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import CvContainer from "./CvContainer";

class Cv extends Component {
  state = {
    cv: [],
  };
  componentDidMount() {
    axios.get("./data/cv.json").then((response) => {
      this.setState({ cv: response.data });
    });
  }

  render() {
    const { cv } = this.state;

    let cvInfo = cv.map((cv) => {
      return (
        <div id={`{cv-${cv.id}`} key={cv.id}>
          <CvContainer cv={cv} />
        </div>
      );
    });

    return (
      <Container>
        <Grid>{cvInfo}</Grid>
      </Container>
    )
  }
}

export default Cv;
