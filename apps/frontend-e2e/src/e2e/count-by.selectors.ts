const componentSelect = '[data-testid="count-by-component"]';

export default {
  getComponent: () => cy.get(componentSelect),
  getCountByOne: () =>
    cy.get(componentSelect).find('[data-testid="count-by-1"]'),
  getCountByThree: () =>
    cy.get(componentSelect).find('[data-testid="count-by-3"]'),
  getCountByFive: () =>
    cy.get(componentSelect).find('[data-testid="count-by-5"]'),
} as const;
