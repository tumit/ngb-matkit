import { NgbTableModule } from './ngb-table.module';

describe('NgbTableModule', () => {
  let ngbTableModule: NgbTableModule;

  beforeEach(() => {
    ngbTableModule = new NgbTableModule();
  });

  it('should create an instance', () => {
    expect(ngbTableModule).toBeTruthy();
  });
});
