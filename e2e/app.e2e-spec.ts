import { KostaTestPage } from './app.po';

describe('kostanz-registration App', () => {
  let page: KostaTestPage;

  beforeEach(() => {
    page = new KostaTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
