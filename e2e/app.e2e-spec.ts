import { TryAbpTemplatePage } from './app.po';

describe('TryAbp App', function() {
  let page: TryAbpTemplatePage;

  beforeEach(() => {
    page = new TryAbpTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
