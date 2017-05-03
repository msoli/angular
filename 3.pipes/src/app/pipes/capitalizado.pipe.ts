import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {

    value = value.toLowerCase();

    if (todas) {
      value = value.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    } else {
      value = value.replace(/\b\w/, function (l) {
        return l.toUpperCase();
      });

    }

    return value;
  }
}
