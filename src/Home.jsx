import React from "react";
import { Container } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import "./index.css";
import {
  TwitchPlayer,
  TwitchChat,
  TwitchEmbed,
  TwitchClip,
} from "react-twitch-embed";

const Hello = () => {
  return (
    <Container>
      <Helmet>
        <style>{"body {background-color: lightgrey;}"}</style>
      </Helmet>
      <h1 id="hello">Hi and welcome to my portfolio</h1>
      <p>
        This is an ongoing site that will be update regulary so stick around and
        see what happens!
      </p>

      <div>
        <Container>
          <TwitchPlayer id="twitchstream" channel="welshthor" theme="dark" />
        </Container>
        <Container>
          <TwitchChat id="twitchchat" channel="welshthor" theme="dark" />
        </Container>
      </div>
    </Container>
  );
};

export default Hello;
