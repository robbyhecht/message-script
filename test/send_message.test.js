const nav = require("../page/nav.page")
const contact = require("../page/contact.page")
const specifics = require("../specifics");

describe('Send a Message', () => {

    browser.url("/");

    it('verifies home page heading', () => {
        $('h1').waitForDisplayed()
        const headingText = $('h1').getText()
        assert.equal(headingText, "Helping eLearning platforms work well together")
    });
    it('clicks nav contact link', () => {
        nav.clickContactUs()
    });
    it('verifies contact page heading', () => {
        $('h1').waitForDisplayed()
        const headingText = $('h1').getText()
        assert.equal(headingText, "Contact us")
    });
    it('completes and submits form', () => {
        browser.switchToFrame($('iframe'))
        contact.firstNameField.setValue('Robby')
        contact.lastNameField.setValue('Hecht')
        contact.emailField.setValue('robbyhecht@gmail.com')
        contact.companyNameField.setValue('Robby Hecht')
        contact.purposeDropdown.selectByIndex(7)
        contact.messageField.setValue(specifics.message)
        contact.permissionCheckbox.click()
        // contact.formSubmitButton.click()
    });

});
