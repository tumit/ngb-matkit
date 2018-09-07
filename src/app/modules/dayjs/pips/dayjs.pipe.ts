
import { Pipe, PipeTransform } from '@angular/core';
import { DayjsUtils } from '../utils/dayjs.utils';

@Pipe({
  name: 'dayjs'
})
export class DayjsPipe implements PipeTransform {
  transform(date: Date | string | number, format = 'DD/MM/YYYY', locale = 'th_TH'): any {
    return DayjsUtils.format(date, format, locale);
  }
}
