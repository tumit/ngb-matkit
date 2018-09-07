import * as dayjs from 'dayjs';

import { DayjsUtils } from './dayjs.utils';

describe('DayjsUtils', () => {

  const testDate = dayjs('2018-09-05').toDate();

  it('should return th_TH format', () => {
    // assert
    // TODO: find way to test with dayjs.extend(buddhistEra);
    // expect(DayjsUtils.format(Date.now(), 'DD/MMMM/YYYY', 'th_TH')).toBe('05/กันยายน/2561');
    expect(DayjsUtils.format(testDate, 'DD/MMMM/YYYY', 'th_TH')).toBe('05/กันยายน/BBBB');
  });
  it('should return th_XX format', () => {
    // assert
    expect(DayjsUtils.format(testDate, 'DD/MMMM/YYYY', 'th_XX')).toBe('05/กันยายน/2018');
  });
  it('should return en_XX format', () => {
    // assert
    expect(DayjsUtils.format(testDate, 'DD/MMMM/YYYY', 'en_XX')).toBe('05/September/2018');
  });

});
