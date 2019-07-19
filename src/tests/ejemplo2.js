module.exports = {
 "Demo test Guru" : function (browser) {
 browser
 .url("http://demo.guru99.com/V1/")
 .waitForElementVisible('body', 1000)
 .setValue('input[name=uid]', 'mngr207067')
 .setValue('input[name=password]', 'hunuvyg')
 .waitForElementVisible('input[name=btnLogin]', 1000)
 .click('input[name=btnLogin]')
 .pause(1000)
 .assert.containsText('h2', 'Gtpl Bank')
 //.saveScreenshot('guru.png')
 .end();
 }
};