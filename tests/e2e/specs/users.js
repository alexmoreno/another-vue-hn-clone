// https://docs.cypress.io/api/introduction/api.html
describe("Users", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should render a user page when a username is clicked", () => {
    cy.get(".item__item:first a:nth-of-type(2)").click()
    cy.get(".comment__item").should("have.length.gte", 1)
    cy.get(".comment__created-by:first").click()
    cy.url().should("include", "/user")
    cy.get(".user").should("have.length.gte", 1)
  })
})
