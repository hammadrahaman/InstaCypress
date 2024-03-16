/// <reference types="cypress" />

/// <reference types="cypress" />
export { }


describe("Checks on webpage", () => {
  beforeEach(function () {
    cy.visit('/')
  })

  it("Insta Status Checks", () => {
    cy.InstaStatus()
  })


  it("Hit Like comments", () => {
    cy.hitLikeCommentbuttons();
  })


  it("Check Accounts", () => {
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