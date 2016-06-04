describe('ng2wp', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("ng2wp");
  });

  it('should have <header>', function () {
    expect(element(by.css('ng2wp-app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', function () {
    expect(element(by.css('ng2wp-app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', function () {
    expect(element(by.css('main .title')).getText()).toEqual('Hello from Angular 2!');
  });

  it('should have <footer>', function () {
    expect(element(by.css('ng2wp-app footer')).getText()).toEqual("Webpack Angular 2 Starter");
  });
});
