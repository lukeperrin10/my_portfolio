describe("User can navigate to CV page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#CV-tab").click();
  });

  it("User can see CV information for first job on page", () => {
    cy.get("#header-cv").should("contain", "Luke Perrin");
    cy.get("#luke-cv-img").should("exist");
    cy.get("#cv-occupation").should("contain", "Aspiring Fullstack Developer");
    cy.get("#cv-experience").should("contain", "Experience");
    cy.get("#job1").should(
      "contain",
      "Alstom Transport AB 2019-2021 Sourcing Buyer"
    );
    cy.get("#description").should(
      "contain",
      "Responsible for purchase and sourcing activites for Parts Buisness Nordic, handling negotiations of prices and deliveries."
    );
  });

  it("User can see CV information for Education"),
    () => {
      cy.get("#education1").should(
        "contain",
        "Craft Academy | 2021 | Fullstack Developer"
      );
    };
});
