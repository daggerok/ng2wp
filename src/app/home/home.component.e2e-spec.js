describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <ng2wp-home>', function () {
    var home = element(by.css('ng2wp-app ng2wp-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home page");
  });
});
