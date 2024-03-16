/// <reference types="cypress" />




// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


Cypress.Commands.add('InstaStatus', () => {
  cy.get("div[class='MuiBox-root css-3l3kwa']").each(($stat, index) => {
    cy.wrap($stat).should('be.visible')
    //clickCounter++;
    if (index % 6 === 0) {
      cy.get('div.story-indicator-container.right-indicator').click();
    }
  })
});

Cypress.Commands.add('hitLikeCommentbuttons', () => {
  cy.get(".MuiCardContent-root.css-1y1jzyb-MuiCardContent-root").each(($pic) => {
    cy.wrap($pic).should('be.visible').find('button[type="button"]').each(($actions) => {
      cy.wrap($actions).should('be.visible');
    })
  })
});


Cypress.Commands.add("checkAccount", () => {
  cy.get("#suggestion-container").each(($acct, index) => {
    cy.wrap($acct).children().should('be.visible')
  })
})

Cypress.Commands.add("suggestion", () => {
  cy.get('h5[class="MuiTypography-root MuiTypography-h5 css-8jquxi-MuiTypography-root"]')
    .should('be.visible')
    .should('have.text', 'Suggestions for you')
    .next().should('be.visible').should('have.text', 'See All')
})


Cypress.Commands.add("checkFeeds", () => {
  /* forEach((index)=>{
    if(index<=4){
      cy.get("div.MuiBox-root.css-mifb2i#suggestion-container").eq(index)
      .children().children().should('be.visible')
      .find(".MuiBox-root.css-1isemmb")
    }
  }) */
  for (let i = 0; i < 4; i++) {
    cy.get("div.MuiBox-root.css-mifb2i#suggestion-container")
      .eq(i)
      .should('be.visible')
      .invoke('text')
      .as('data')
      .then(() => {
        cy.get('@data').then((data) => {
          cy.log('Retrieved data:', data)
          cy.get("div.MuiBox-root.css-mifb2i#suggestion-container")
            .eq(i).should('have.text', data)
          //expect(data).to.include('Followed by himanshu + 5...Follow'); //this too works 
        });
      });
  }

})


Cypress.Commands.add("assertRightHeadersUrl", (headers) => {
  headers.forEach(header => {
    switch (header) {
      case 'Home':
        cy.get(`svg[aria-label="${header}"]`).click();
        cy.url().should('eq', 'http://localhost:3000/');
        break;
      case 'Messenger':
        cy.get(`svg[aria-label="${header}"]`).click();
        cy.url().should('eq', 'http://localhost:3000/inbox');
        break;
      case 'New post':
        cy.visit('/')
        cy.get(`svg[aria-label="${header}"]`).click();
        cy.get('div.MuiBox-root.css-4mrcga').should('exist');
        break;
      case 'Find people':
        cy.visit('/')
        cy.get(`svg[aria-label="${header}"]`).click();
        cy.url().should('eq', 'http://localhost:3000/explore');
        break;
      case 'Activity Feed':
        cy.get(`svg[aria-label="${header}"]`).click();;
        cy.url().should('include', 'http://localhost:3000/explore#');
        break;
      default:
        // Handle any unexpected headers
        break;
    }
  });
});

Cypress.Commands.add("theMessage", ()=>{
  cy.get('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4.5 css-rzi2g4-MuiGrid-root"]').invoke('text').then((asst)=>{
    console.log('qwerty', asst)
    cy.log(asst)
    cy.get('div[class="MuiBox-root css-1isemmb"]').eq(0).click();
    cy.get('#user-detail').should('have.text', 'Adwet Naithani');
    cy.get('#action-container').find('button[type="button"]').should('be.visible')
    cy.fixture('assertion.json').then((ass)=>{
      cy.get('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4.5 css-rzi2g4-MuiGrid-root"]').should('have.text', ass.message)
    })
    
  })
})

Cypress.Commands.add('chatContainer', ()=>{
  cy.get('#chat-container').should('be.visible')
  .find('button[aria-label="menu"]').should('be.visible')
  cy.get('.MuiPaper-root > .MuiInputBase-root > .MuiInputBase-input').should('be.visible')
  cy.get('#chat-container')
  .find('button[aria-label="gallery"]').should('be.visible')
  .next('button[aria-label="directions"]').should('be.visible')
})













