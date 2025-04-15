import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bolder',
})

export class BolderPipe implements PipeTransform {
  transform(value: string, insertText: string): string {
    return `<div><b>${ value.slice(0, insertText.length) }</b>` + `${ value.slice(insertText.length) }</div>`;
  }

}
