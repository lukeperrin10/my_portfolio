describe("User can navigate to CV page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#CV-tab").click();
  });

  it("User can see CV information on page", () => {
    cy.get("#header-cv").should("contain", "Luke Perrin");
    cy.get("#luke-cv-img").should("exist");
    cy.get("#cv-occupation").should("contain", "Aspiring Fullstack Developer");
    cy.get("#cv-actual").within(() => {
      cy.get("#cv-experience").within(() => {
        cy.get("#job1").should("contain", "My latest job");
        cy.get("#job2").should("contain", "My previous job");
        cy.get("#job3").should("contain", "My job before my previous job");
      });
      cy.get("#cv-education").within(() => {
        cy.get("#education1").should("contain", "My latest education");
        cy.get("education2").should("contain", "My previous education");
      });

      cy.get("#cv-extra-information").should(
        "contain",
        "Some extra information"
      );
      cy.get("#cv-interests").should("contain", "A list of my interests");
    });
  });
});
