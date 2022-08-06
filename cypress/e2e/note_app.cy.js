describe('note app', () => {
  it('frontpage can be opened', () => {

    cy.visit('http://localhost:3000/')
    cy.contains('Inicio de sesión')
  })
})