/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Yuni Kurnia Taramita')
        cy.get('[placeholder ="Email"][type="text"]').type('kurniataramita186@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid', () => {
        cy.get('#inputEmail1').type('kurniataramita186@gmail.com')
        cy.get('#inputPassword2').type('12345')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('kurniataramita186@gmail.com')
        cy.get('#exampleInputPassword1').type('12345')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels', () => {
        cy.get('[placeholder="Recipients"]').type('Yuni Kurnia Taramita')
        cy.get('[placeholder="Subject"]').type('Pengujian Perangkat Lunak')
        cy.get('[placeholder="Message"').type('Blackbox Testing - PPL')
    })

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Yuni Kurnia')
        cy.get('#inputLastName').type('Taramita')
        cy.get('#inputEmail').type('kurniataramita186@gmail.com')
        cy.get('#inputWebsite').type('www.google.com')
    })

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('kurniataramita186@gmail.com')
        cy.get('#inputPassword3').type('12345')
        cy.get('.custom-checkbox').last().click()
    })

});