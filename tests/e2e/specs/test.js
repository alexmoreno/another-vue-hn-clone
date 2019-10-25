// https://docs.cypress.io/api/introduction/api.html

describe("Another HN Vue Clone", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("loads", () => {
    cy.get(".home")
  })
  it("loads 30 items", () => {
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
})
