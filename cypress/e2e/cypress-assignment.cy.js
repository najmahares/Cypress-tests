describe('Automation Practice End-to-End Suite', () => {
  
  beforeEach(() => {
    cy.visit('https://blogspot.com');
  });

  it('should complete all form interactions and validation checkpoints', () => {
    cy.get('#name').type('John Doe').should('have.value', 'John Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#phone').type('1234567890');
    cy.get('#textarea').type('123 Testing Lane, Automation City');

    cy.get('#country').select('japan').should('have.value', 'japan');

    cy.get('#sunday').check().should('be.checked');
    cy.get('#monday').check();
    cy.get('#monday').uncheck().should('not.be.checked');

    cy.get('#male').check().should('be.checked');

    cy.get('#singleFileInput').selectFile({
      contents: Cypress.Buffer.from('mock file data'),
      fileName: 'test-document.pdf',
      mimeType: 'application/pdf'
    });
    
    cy.get('#singleFileForm').submit(); 
    cy.get('#singleFileStatus')
      .scrollIntoView()
      .should('be.visible')
      .and('contain', 'test-document.pdf');
  });
});
