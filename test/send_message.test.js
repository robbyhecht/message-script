const nav = require("../page/nav.page")
const contact = require("../page/contact.page")
const specifics = require("../specifics");

const getPageHeading = () => {
    $('h1').waitForDisplayed()
    return $('h1').getText()
}

describe('Send a Message', () => {

    browser.url("/");

    it('verifies home page heading', () => {
        const headingText = getPageHeading()
        assert.equal(headingText, "Helping eLearning platforms work well together")
    });
    it('clicks nav contact link', () => {
        nav.clickContactUs()
    });
    it('verifies contact page heading', () => {
        const headingText = getPageHeading()
        assert.equal(headingText, "Contact us")
    });
    it('completes and submits form', () => {
        browser.switchToFrame($('iframe'))
        contact.fillOutForm(
            "Robby",
            "Hecht",
            "robbyhecht@gmail.com",
            "Robby Hecht",
            7,
            specifics.message
        )
        contact.formSubmitButton.click()
    });

});
