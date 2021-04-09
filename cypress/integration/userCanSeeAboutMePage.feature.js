describe("User can see about me information", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#about-tab").click();
  });

  it("displays about me information", () => {
    cy.get("#about-header").should("contain", "About Me");
    cy.get("#about-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".description").should(
        "contain",
        "I'm Luke, a Swedish guy that used to be Welsh. I moved to Sweden in 2010 and haven't really looked back. I live in Stockholm with my partner and our young son. Recently I decided on a career change and wanted to move in to something that has always been an interes, working with computers. Now with no experience or knowledge in coding bar a some half worked through Udemy courses I signed up for a Fullstack devleoper course at Craft Academy. And started my three month intensive journey to become a web developer."
      );
    });
  });
});
