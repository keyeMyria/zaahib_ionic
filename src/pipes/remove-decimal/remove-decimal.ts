import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDecimal',
})
export class RemoveDecimalPipe implements PipeTransform {

  transform(value, ...args) {
    let a=parseInt(value);
    if(!isNaN(a))
    return a.toLocaleString();
    else
    return "Negotiable";
  }
}
