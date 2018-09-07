import { DayjsModule } from './dayjs.module';

describe('DayjsModule', () => {
  let dayjsModule: DayjsModule;

  beforeEach(() => {
    dayjsModule = new DayjsModule();
  });

  it('should create an instance', () => {
    expect(dayjsModule).toBeTruthy();
  });
});
