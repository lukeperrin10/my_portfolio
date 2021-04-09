import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Image,
} from "semantic-ui-react";

const AboutCard = ({ about }) => {
  return (
    <Card>
      <Image src={about.image} wrapped ui={false} />
      <CardContent>
        <CardHeader>{about.name}</CardHeader>
        <CardDescription>{about.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AboutCard;