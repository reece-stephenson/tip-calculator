/**
 * Accessability Tests
 */


describe('Accessibility testing with AXE tool', () => {
    beforeEach(() => {
    //First the site that needs to be visited is called using the cy.visit() function.
    cy.visit('https://tipcalc.bbdgrad.com/')
    
    
    //After visiting the page, the cy.injectAxe() method is called to load the
    //axe-core runtime into the loaded page.
    cy.injectAxe();
    })
    
    
    it('Test for any accessibility issues on page', () => {
        //The axe modules starts to search for the accessibility issues on page
        cy.checkA11y();
    })
    
    
})