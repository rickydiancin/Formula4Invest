import { AngularauthPage } from './app.po';

describe('angularauth App', function() {
  let page: AngularauthPage;

  beforeEach(() => {
    page = new AngularauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
