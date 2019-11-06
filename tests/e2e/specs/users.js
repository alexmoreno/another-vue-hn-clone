// https://docs.cypress.io/api/introduction/api.html
describe("Users", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should render a user page when a username is clicked inside a itemView", () => {
    cy.get(".item__item:first .item__item-comments").click()
    cy.get(".comment__item").should("have.length.gte", 1)
    cy.get(".comment__created-by:first").click()
    cy.url().should("include", "/user")
    cy.get(".user").should("have.length.gte", 1)
  })
  it("should render a user page when a username is clicked at home", () => {
    cy.get(".item__meta:first .item__meta-user").click()
    cy.url().should("include", "/user")
    cy.get(".user").should("have.length.gte", 1)
  })
})
