import counterSelectors from './counter.selectors';
describe('The Golf Counter', () => {
  beforeEach(() => {
    cy.visit('/tools/golf-counter');
  });
  describe('Initial State', () => {
    it('Should display the initial count', () => {
      counterSelectors.getCurrent().should('contain.text', '0');
    });

    it('Should have the increment button enabled', () => {
      counterSelectors.getIncrement().should('be.enabled');
    });

    it('Should have the decrement button disabled', () => {
      counterSelectors.getDecrement().should('be.disabled');
    });
  });

  describe('Incrementing', () => {
    it('the current count increments', () => {
      counterSelectors.getIncrement().click();
      counterSelectors.getCurrent().should('contain.text', '1');
      counterSelectors.getIncrement().click();
      counterSelectors.getCurrent().should('contain.text', '2');
    });

    it('the decrement button is enabled', () => {
      counterSelectors.getIncrement().click();
      counterSelectors.getDecrement().should('be.enabled');
    });
  });
  describe('Decrementing', () => {
    beforeEach(() => {
      counterSelectors.getIncrement().click().click().click();
    });

    it('reduces the current', () => {
      counterSelectors.getCurrent().should('contain.text', '3');
      counterSelectors.getDecrement().click();
      counterSelectors.getCurrent().should('contain.text', '2');
      counterSelectors.getDecrement().click();
      counterSelectors.getCurrent().should('contain.text', '1');
    });

    it('decrement should be disabled when at start', () => {
      counterSelectors
        .getDecrement()
        .click()
        .click()
        .click()
        .should('be.disabled');
    });
  });
});
