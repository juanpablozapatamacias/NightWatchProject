module.exports = {
 "Demo test Google" : function (browser) {
 browser
 .url("https://www.google.com")
 .waitForElementVisible('body', 1000)
 .setValue('input[type=text]', 'testeandosoftware')
 .waitForElementVisible('input[name=btnK]', 1000)
 .click('input[name=btnK]')
 .pause(1000)
 .assert.containsText('#main', 'testeandosoftware.com')
 .end();
 }
};
