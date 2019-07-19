module.exports = {
    "Google advanced search : Elon Musk" : function(browser){
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropDownOpenerSelector = '#lr_button';
        const languageDropDownValueSelector = '.goog-menuitem[value=lang_es]';
        const lastUpdateDropDownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropDownValueSelector = '.goog-menuitem[value=m]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
        const resultsPageQuerySelector = '#searchform input[name=q][value="Elon Musk"]';

        browser
            .url("https://www.google.com/advanced_search")
            .maximizeWindow()
            .setValue(mainQueryInputSelector,mainQuery)
            .click(languageDropDownOpenerSelector)
            .click(languageDropDownValueSelector)
            .click(lastUpdateDropDownOpenerSelector)
            .click(lastUpdateDropDownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk','Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_es', 'Params: Language is Spanish')
            .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

         browser.assert.visible(resultsPageQuerySelector, 'UI Elon Musk is set in the query')
         browser.saveScreenshot('screenshots/google.png')
            .end();
    }
};