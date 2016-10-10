import { CursoAngularPage } from './app.po';

describe('curso-angular App', function() {
  let page: CursoAngularPage;

  beforeEach(() => {
    page = new CursoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
