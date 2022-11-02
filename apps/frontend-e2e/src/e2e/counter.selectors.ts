const componentSelect = '[data-testid="counter-component"]';

export default {
  getCurrent: () => cy.get(componentSelect).find('[data-testid="current"]'),
  getIncrement: () =>
    cy.get(componentSelect).find('[data-testid="increment-button"]'),
  getDecrement: () =>
    cy.get(componentSelect).find('[data-testid="decrement-button"]'),
} as const;
