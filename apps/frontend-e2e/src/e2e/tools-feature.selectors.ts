const selectNav = '[data-testid="feature-nav"]';

export default {
  getCounterLink: () =>
    cy.get(selectNav).find('[data-testid="go-to-golf-counter"]'),
  getPrefsLink: () => cy.get(selectNav).find('[data-testid="go-to-prefs"]'),
} as const;
