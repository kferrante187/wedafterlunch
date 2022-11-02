import po from './count-by.selectors';
describe('Count By Prefs', () => {
  beforeEach(() => {
    cy.visit('/tools/prefs');
  });
  it('the count by prefs component is displayed', () => {
    po.getComponent().should('exist');
  });
  describe('initial state', () => {
    it('is counting by one', () => {
      po.getCountByOne().should('be.disabled');
      po.getCountByThree().should('be.enabled');
      po.getCountByFive().should('be.enabled');
    });
  });

  describe('can change what you are counting by', () => {
    it('can count by 3', () => {
      po.getCountByThree().click().should('be.disabled');
      po.getCountByOne().should('be.enabled');
    });
    it('can count by 5', () => {
      po.getCountByFive().click().should('be.disabled');
      po.getCountByThree().should('be.enabled');
      po.getCountByOne().should('be.enabled');
    });
  });
});
