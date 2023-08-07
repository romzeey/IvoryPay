describe('User Registration', () => {
  it('Launch Application', () => {
    cy.visit('/').wait(20000)
  });
  beforeEach(() => {
    cy.visit ('${baseUrl}/register');
  });
  it('should display the user registration form' , () => {
    cy.get('form').should ('be.visible');
    cy.contains('Sign up').should('be.visible').click();
  });

  it('should register a new user' , () => {
    cy.get('.text-sm > .cursor-pointer').click();
    cy.get('#register_firstName').type('Melly')
    cy.get('#register_lastName').type('Obi')
    cy.get('#register_email').type('melly@mailinator.com')
    cy.get('#register_businessName').type('Nellys Couture')
    cy.get('#rc_select_0').click()
    cy.get('#rc_select_0').type('Nigeria').click()
    cy.get('#rc_select_0').click()
    cy.get('.ant-input-wrapper > .ant-input').type('09087765432')
    cy.get('#register_password').type('Password321$')
    cy.get('#register_confirmPassword').type('Password321$')
    cy.get('#register_businessType > :nth-child(1) > .ant-radio > .ant-radio-input').check()
    cy.get('#register_isDeveloper > :nth-child(2) > .ant-radio > .ant-radio-input').check()
    cy.get('.mb-8 > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check()
    cy.get('button[type="submit"]').click({force:true})
    //Check if registration was successful and user is redirected to the verify page
    cy.url().should('include', '/verify');
  })
 })