describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('displays the Vite and React logos', () => {
    cy.get('.logo').should('have.length', 2);
    cy.get('.logo').eq(0).should('have.attr', 'src', '/vite.svg');
    cy.get('.logo').eq(1).should('have.attr', 'src', '/src/assets/react.svg');
  });

  it('increments the count when the button is clicked', () => {
    cy.get('button').contains('count is 0');
    cy.get('button').click();
    cy.get('button').contains('count is 1');
  });

  it('displays the HMR test message', () => {
    cy.get('p').contains('Edit src/App.tsx and save to test HMR');
  });

  it('displays the "read-the-docs" message', () => {
    cy.get('.read-the-docs').contains('Click on the Vite and React logos to learn more');
  });
});
