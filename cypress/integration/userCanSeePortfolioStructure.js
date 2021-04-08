describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("/");
    cy.get("#header").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", "Made with React 17.0.2");
    cy.get("#hello").should("contain", "Hello World");
  });
});
