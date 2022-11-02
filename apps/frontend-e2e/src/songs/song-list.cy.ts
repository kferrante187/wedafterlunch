import po from './song-list.selectors';

describe('The Song List', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9999/songs', {
      body: {
        data: [
          {
            id: '1',
            title: 'Dreams',
            artist: 'Fleetwood Mac',
            album: 'Rumors',
          },
          { id: '99', title: 'Song #1', artist: 'Fugazi' },
        ],
      },
    });

    cy.visit('/tools/songs');
  });

  it('should show the song list by default', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/tools/songs');
      // these examples, not really needed
      expect(loc.href).to.eq('http://localhost:4200/tools/songs');
      expect(loc.port).to.eq('4200');
      expect(loc.protocol).to.eq('http:');
    });
  });

  describe('variations', () => {
    it('should have two songs listed', () => {
      po.getSongListItems().should('have.length', 2);
    });
    it('should display a song with an album correctly', () => {
      po.getSongListItem('0')
        .find('[data-testid="header"]')
        .should('contains.text', 'Dreams');

      po.getSongListItem('0')
        .find('[data-testid="summary"]')
        .should('contain.text', 'Dreams is by Fleetwood Mac');

      po.getSongListItem('0')
        .find('[data-testid="footer"]')
        .should('not.exist');
    });
    it('should display a song with no album correctly', () => {
      //

      po.getSongListItem('1').find('[data-testid="footer"]').should('exist');
    });
  });
}); // end
