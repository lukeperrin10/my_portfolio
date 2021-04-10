describe("User can navigate to CV page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#CV-tab").click();
  });

  it("User can see CV information for first job on page", () => {
    cy.get("#header-cv").should("contain", "Luke Perrin");
    cy.get("#luke-cv-img").should("exist");
    cy.get("#cv-occupation").should("contain", "Aspiring Fullstack Developer");
    cy.get("#cv-actual").within(() => {
      cy.get("#cv-experience").should("contain", "Experience");
      cy.get("#job1").should(
        "contain",
        "Alstom Transport AB | 2019-2021 | Sourcing Buyer"
      );
      cy.get("#description").should(
        "contain",
        "Responsible for purchase and sourcing activites for Parts Buisness Nordic, handling negotiations of prices and deliveries."
      );
    });
    it("User can see CV information for second job on page"),
      () => {
        cy.get("#job2").should(
          "contain",
          "Alstom Transport | AB 2017-2019 | Repair Controller"
        );
        cy.get("#description2").should(
          "contain",
          "Responsible for all Warranty material used in connection to X60B Stockholm Commuter trains during warranty period"
        );
      };
    it("User can see CV information about third job"),
      () => {
        cy.get("#job3").should(
          "contain",
          "Warehouse Operator | Studentconsulting | 2016-2017"
        );
        cy.get("#description3").should(
          "contain",
          "Responsible for picking and packing orders for both private customers and enterprises."
        );
      };
  });
});
