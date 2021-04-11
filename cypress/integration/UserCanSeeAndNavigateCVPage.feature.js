describe("User can navigate to CV page", () => {
  before(() => {
    cy.visit("/");
    cy.get("#CV-tab").click();
  });

  it("User can see CV information", () => {
    cy.get("#header-cv").should("contain", "Luke Perrin");
    cy.get("#luke-cv-img").should("exist");
    cy.get("#cv-occupation").should("contain", "Aspiring Fullstack Developer");
    cy.get("#cv-experience").should("contain", "Experience");
    cy.get("#occupation").should(
      "contain",
      "Alstom Transport AB 2019-2021 Sourcing Buyer"
    );
    cy.get("#description").should(
      "contain",
      "Responsible for purchase and sourcing activites for Parts Buisness Nordic, handling negotiations of prices and deliveries."
    );

    cy.get("#education").within(() => {
      cy.get("#studies").should(
        "contain",
        "Craft Academy 2021-2021 Fullstack Developer"
      );
      cy.get("#studydescription").should(
        "contain",
        "3 month intensive course to develop the skills to be a junior fullstack developer"
      );
    });
  });
});
