import { KostanzRegistrationPage } from './app.po';

describe('kostanz-registration App', () => {
  let page: KostanzRegistrationPage;

  beforeEach(() => {
    page = new KostanzRegistrationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
