const selectListComponent = '[data-testid="song-list-component"]';

export default {
  getSongList: () => cy.get(selectListComponent),

  getSongListItems: () => cy.get(selectListComponent).find('li.card'),

  getSongListItem: (id: string) =>
    cy.get(selectListComponent).find(`[data-testid="song-item-${id}"]`),
} as const;
