import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data',
})
export class DataPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): boolean {
    if (value.length > 0) {
      return true;
    }
    return false;
  }
}
