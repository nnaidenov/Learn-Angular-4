import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseFormatPipe'
})
export class TitleCaseFormatPipePipe implements PipeTransform {

  transform(value: string, args?: any): any {

    if (!value) {
      return null;
    }

    const valueParts = value.trim().toLowerCase().split(' ');
    valueParts[0] = this.capitalise(valueParts[0]);

    for (let index = 1; index < valueParts.length; index++) {
      const word = valueParts[index].toLowerCase();

      if (word !== 'of' && word !== 'the') {
        valueParts[index] = this.capitalise(valueParts[index]);
      }
    }

    return valueParts.join(' ');
  }

  capitalise(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

}
