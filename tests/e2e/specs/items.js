// https://docs.cypress.io/api/introduction/api.html
describe("Items", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("loads", () => {
    cy.get(".home")
  })
  it("loads 20 items", () => {
    cy.get(".item__item").should("have.length", 20)
  })

  it("should go to next page and get back", () => {
    cy.get(".navigation a.next").click()
    cy.url().should("contain", "/home/2")
    cy.get(".navigation a.previous").click()
    cy.url().should("contain", "/home")
  })
  it("should not go to previous page if first page", () => {
    cy.get(".navigation a.previous").should("not.exist")
  })
  it("should load comments and get back", () => {
    cy.get(".item__item:first .item__item-comments").click()
    cy.get(".comment__item").should("have.length.gte", 1)
    cy.get(".header__news-link").click()
    cy.url().should("contain", "/home")
  })
})
