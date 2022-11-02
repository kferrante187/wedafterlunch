describe('api error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9999/songs', {
      statusCode: 500,
    });
    cy.visit('/tools/songs');
  });

  it('shows an error thingy', () => {
    //
  });
});
