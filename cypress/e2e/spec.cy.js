/**E2E Tests */

describe('login test', ()=>{
  beforeEach('user can visit page', () => {
    cy.visit('https://tipcalc.bbdgrad.com/')
  });

  it('allows user to fill in bill amount and tip percentage fields', () => {

    cy.get('#amount').type('100').should('have.value','100');
    cy.get('#percentage').type('10').should('have.value','10');

  });

  it('allows user to fill in the Number of People Field', () => {

    cy.get('#people').clear();
    cy.get('#people').type('2').should('have.value','2');

  });

  it('returns the expected values based on bill and tip percentage input', () => {

    cy.get('#amount').type('100').should('have.value','100');
    cy.get('#percentage').type('10').should('have.value','10');

    cy.get('#tip').should('contain.text', 'R10.00');
    cy.get('#total').should('contain.text', 'R110');

  });

  it('returns correct split value when entering Number of People', () => {

    cy.get('#amount').type('100').should('have.value','100');
    cy.get('#percentage').type('10').should('have.value','10');

    cy.get('#people').clear().type('2').should('have.value', '2');
    cy.get('#split').should('contains.text', 'R55.00');

  });

  it('Displays an error when incorrect input is applied to Bill Amount', () => {

    cy.get('#amount').type('-1');
    cy.get('#percentage').type('1');
    cy.get('#errorMessage').should('contain.text', 'Please insert a valid bill amount.');

  });

  it('Displays an error when incorrect input is applied to Tip Amount', () => {

    cy.get('#amount').type('1');
    cy.get('#percentage').type('-1');
    cy.get('#errorMessage').should('contain.text', 'Please insert a valid tip percentage.');

  });

})