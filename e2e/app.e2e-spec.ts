import { Angular4ToolsPage } from './app.po';

describe('angular4-tools App', () => {
  let page: Angular4ToolsPage;

  beforeEach(() => {
    page = new Angular4ToolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
