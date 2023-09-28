/**E2E Tests */

describe('login test', ()=>{
  beforeEach('visits page', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('allows user to fill in username', () => {

    cy.get('form').within(() => {

      // Only yield inputs within form
      cy.get('input[name="username"]').type('Pamela').should('have.value', 'Pamela');
      cy.get('input[name="password"]').type('Secret').should('have.value', 'Secret');;
      cy.get('button').click();
    })

  })

})