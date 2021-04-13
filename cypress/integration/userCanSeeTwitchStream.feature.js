import { TwitchChat } from "react-twitch-embed";

describe("User can see twitch stream embedded", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to show twitch stream", () => {
    cy.get("#twitchstream").should("exist");
    cy.get("#twitchchat").click();
    cy.get('#twitchchat').type('Hello');
  });
});
