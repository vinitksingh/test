const Browser = require('zombie');

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('https://google.com/', done);
  });

  describe('submits form', function() {

    before(function(done) {
      browser
        .fill('q', 'Search Term');
        // Don't submit anything yet - for now
        done();
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see search page', function() {
      browser.assert.text('title', 'Google');
    });
  });
});
