import 'dayjs/locale/th';

import * as dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';

export class DayjsUtils {
  static format(date: Date | string | number, format = 'DD/MM/YYYY', locale = 'th_TH'): string {

    if (locale && locale.length < 2) {
      throw new Error(`locale should have length more than 1: locale=${locale}`);
    }

    if ('th_TH' === locale) {
      format = format.split('Y').join('B');
      dayjs.extend(buddhistEra);
    }

    locale = locale.substring(0, 2);

    return dayjs(date, { locale }).format(format);
  }
}
