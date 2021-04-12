describe("User can navigate to CV page", () => {
  before(() => {
    cy.visit("/");
    cy.get("#CV-tab").click();
  });

  it("user can expect to see som basic details", () => {
    cy.get("#header-cv").should("contain", "Luke Perrin");
    cy.get("#luke-cv-img").should("exist");
    cy.get("#cv-occupation").should("contain", "Aspiring Fullstack Developer");
    cy.get("#cv-experience").should("contain", "Experience");
  });

  it("User can see CV information", () => {
    cy.get("#cv-1").within(() => {
      cy.get(".header").should(
        "contain",
        "Alstom Transport AB 2019-2021 Sourcing Buyer"
      );
      cy.get(".description").should(
        "contain",
        "Responsible for purchase and sourcing activites for Parts Buisness Nordic, handling negotiations of prices and deliveries."
      );
    });
  });

  it("user can see second job", () => {
    cy.get("#cv-2").within(() => {
      cy.get(".header").should(
        "contain",
        "Alstom Transport AB 2017-2019 Repair Controller"
      );
      cy.get(".description").should(
        "contain",
        "Resposonible for all warranty material for X60B Stockholm commuter trains delivery project."
      );
    });
  });

  it("shows my education information", () => {
    cy.get("#cv-3").within(() => {
      cy.get(".header").should(
        "contain",
        "Craft Academy 2021-2021 Fullstack Developer"
      );
      cy.get(".description").should(
        "contain",
        "3 month intensive course to develop the skills to be a junior fullstack developer"
      );
    });
  });
});
