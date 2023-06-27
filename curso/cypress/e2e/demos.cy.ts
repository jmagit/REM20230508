describe('Demos', () => {
  it('Ejemplo', () => {
    cy.visit('/chisme/de/hacer/numeros')
    cy.contains('calculadora').should(tag => {
      expect(tag).to.be.class('active')
    })
    cy.get('.nav-link').filter('.active').should('contain', 'calculadora')
    const valor = '9876543210'
    valor.split('').forEach(item => cy.get(`[value="${item}"]`).click())
    cy.get('.Pantalla').should('contain', valor)
  });
});
