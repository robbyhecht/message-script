class Nav {

    get contactLink() { return $('=Contact Us') }

    clickContactUs() {
        this.contactLink.waitForDisplayed()
        this.contactLink.click()
    }

}

module.exports = new Nav