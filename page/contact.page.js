class Contact {

    get firstNameField() { return $$('.text')[0] }
    get lastNameField() { return $$('.text')[1] }
    get emailField() { return $$('.text')[2] }
    get companyNameField() { return $$('.text')[3] }
    get phoneField() { return $$('.text')[4] }
    get purposeDropdown() { return $('.select') }
    get permissionCheckbox() { return $('//*[@id="492981_34368pi_492981_34368"]') }
    get messageField() { return $('textarea') }
    get formSubmitButton() { return $('#form-submit') }
    get formErrorMessage() { return $('.errors=Please correct the errors below:') }

    fillOutForm(first, last, email, company, purpose, message) {
        this.firstNameField.setValue(first)
        this.lastNameField.setValue(last)
        this.emailField.setValue(email)
        this.companyNameField.setValue(company)
        this.purposeDropdown.selectByIndex(purpose)
        this.messageField.setValue(message)
        this.permissionCheckbox.click()
    }
}

module.exports = new Contact