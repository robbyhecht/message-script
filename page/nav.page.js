class Nav {

    get contactLink() { return $('=Contact Us') }

    clickContact() {
        this.contactLink.waitForDisplayed()
        this.contactLink.click()
    }

}

module.exports = new Nav