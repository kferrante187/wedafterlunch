import nav from './tools-feature.selectors';
import prefs from './count-by.selectors';
import counter from './counter.selectors';

describe('Counting by in Counter Uses Preferences', () => {
  beforeEach(() => {
    cy.visit('/tools');
  });
  it('Changing the prefs changes the counter', () => {
    // first go to the preferences and set count by to 3
    nav.getPrefsLink().click();
    prefs.getCountByThree().click();

    // then go to the counter and click increment, and it should go up by three
    nav.getCounterLink().click();

    counter.getIncrement().click();

    counter.getCurrent().should('contain.text', '3');
  });
  // More tests as needed - do it!
  describe('what we want it to do', () => {
    it('does not let me go below zero if the preferences are changed', () => {
      nav.getPrefsLink().click();
      prefs.getCountByThree().click();
      nav.getCounterLink().click();
      counter.getIncrement().click();
      nav.getPrefsLink().click();
      prefs.getCountByFive().click();
      nav.getCounterLink().click();
      counter.getDecrement().click();
      counter.getCurrent().should('have.text', '0');
    });
  });
});
