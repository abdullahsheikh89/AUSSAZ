import { AussazPage } from './app.po';

describe('aussaz App', () => {
  let page: AussazPage;

  beforeEach(() => {
    page = new AussazPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
