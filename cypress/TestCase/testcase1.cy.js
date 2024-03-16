/// <reference types="cypress" />

/// <reference types="cypress" />
export { }


describe("Checks on webpage", () => {
  beforeEach(function () {
    cy.visit('/')
  })

  it("test case1", () => {
    cy.InstaStatus()
  })


  it("test case2", () => {
    cy.hitLikeCommentbuttons();
  })


  it("test case1", () => {
    cy.checkAccount()
  })

  it("suggestion test case4", () => {
    cy.suggestion();
    cy.checkFeeds();
    cy.assertRightHeadersUrl(['Home', 'Messenger', 'New post', 'Find people', 'Activity Feed']);
  })

  it("The messenger in instagram", ()=>{
    cy.visit('/inbox')
    cy.theMessage();
    cy.chatContainer();
  })

})