import { SHOPPage } from './app.po';

describe('shop App', () => {
  let page: SHOPPage;

  beforeEach(() => {
    page = new SHOPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
