import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSpacer',
})

export class ListSpacerPipe implements PipeTransform {
  transform(value: string[]): string {
    return value.join(', ');
  }

}
