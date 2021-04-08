describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "My First Project");
      cy.get(".description").should(
        "contain",
        "My first major project included creating a website where you can store contact information"
      );
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "FizzBuzz");
      cy.get(".description").should("contain","One of the first things we did with Ruby was to create the FizzBuzz game");
    });
  });

  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Future Projects");
      cy.get(".description").should(
        "contain",
        "Right now I am still learning the capabilities of the different languages that I am learning, but I am looking foward to what I can do with them once I am done."
      );
    });
  });
});
