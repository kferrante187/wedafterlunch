describe('The song list when there is no data returned from the API', () => {
  describe('No Data', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:9999/songs', {
        body: {
          data: [],
        },
        delay: 2000,
      });
      cy.visit('/tools/songs');
    });

    it('should not display the song list, but it should show a message', () => {
      cy.get('[data-testid="empty-songs"]').should('exist');
    });
  });

  describe('Alert should not be shown when there is data!', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:9999/songs', {
        body: {
          data: [{ id: '1', title: 'Blah', artist: 'Blah' }],
        },
        delay: 3000,
      });
      cy.visit('/tools/songs');
    });

    it('should not show a message', () => {
      cy.get('[data-testid="empty-songs"]').should('not.exist');
    });
  });

  describe('Alert should not be shown when there is data!', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:9999/songs', {
        body: {
          data: [{ id: '1', title: 'Blah', artist: 'Blah' }],
        },
        delay: 1,
      }).as('songsData');
      cy.visit('/tools/songs');
    });

    it('should not show a message', () => {
      cy.get('[data-testid="loading"]').should('exist');

      cy.wait('@songsData').get('[data-testid="loading"]').should('not.exist');
    });
  });
});
