import { GetThingsDonePage } from './app.po';

describe('get-things-done App', function() {
  let page: GetThingsDonePage;

  beforeEach(() => {
    page = new GetThingsDonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
