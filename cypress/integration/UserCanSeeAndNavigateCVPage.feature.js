describe("User can navigate to CV page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#CV-tab").click();
  });

  it("User can see CV information on page", () => {
    cy.get("#header-cv").should("contain", "Luke Perrin");
    cy.get("#luke-cv-img").should("exist");
    cy.get('#cv-occupation').should('contain', 'Aspiring Fullstack Developer')
    cy.get("#cv-actual").within(() => {
      cy.get("#cv-experience").should(
        "contain",
        "This is just example text for testing"
      );
      cy.get("#cv-education").should("contain", "Examples of my education");
      cy.get("#cv-extra-information").should(
        "contain",
        "Some extra information"
      );
      cy.get("#cv-interests").should("contain", "A list of my interests");
    });
  });
});
