module.exports = {
 "Demo test Hacker News" : function(browser){
   browser
   .url("https://news.ycombinator.com/")
   .waitForElementVisible('tr:nth-child(1) td:nth-child(2) span.pagetop b.hnname:nth-child(1) > a:nth-child(1)', 1000)
   .assert.containsText('.hnname','Hacker News')
   .pause(1000)
   .end();
 }
};