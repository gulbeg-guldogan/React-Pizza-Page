describe('Sipariş Formu Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/Siparis');
  });

  it('Sipariş notu inputuna metin girişi', () => {
    const testNotu = 'Canimsinnn';
    cy.get('textarea[name="SiparisNotu"]')
      .type(testNotu)
      .should('have.value', testNotu);
  });

  it('En az 4 farklı malzeme seçilebilmeli', () => {
    const malzemeler = ['Pepperoni', 'Sosis', 'Mısır', 'Soğan'];

    malzemeler.forEach((malzeme) => {
      cy.contains('label', malzeme).find('input[type="checkbox"]').check();
    });

    malzemeler.forEach((malzeme) => {
      cy.contains('label', malzeme).find('input[type="checkbox"]').should('be.checked');
    });
  });

  it('Form başarıyla gönderme', () => {
    
    cy.get('input[id="Orta"]').check();
    cy.get('select[name="Hamur"]').select('İnce');

    const secilecekMalzemeler = ['Pepperoni', 'Sosis', 'Mısır', 'Soğan', 'Susam'];
    secilecekMalzemeler.forEach((malzeme) => {
      cy.contains('label', malzeme).find('input[type="checkbox"]').check();
    });

    cy.get('textarea[name="SiparisNotu"]').type('I Love You');

    cy.get('form').submit();

    cy.url().should('include', '/orderSuccess');
  });
});